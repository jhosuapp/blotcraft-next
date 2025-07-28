import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 8;
        const search = (req.query.search as string) || '';

        // Obtener todos los usuarios para calcular posición y puntos
        const allUsers = await prisma.ffa_users.findMany();

        // Calcular puntos y ordenar
        const rankedUsers = allUsers
        .map(user => ({
            ...user,
            points: Number(user.kills) - Number(user.deaths),
        }))
        .sort((a, b) => b.points - a.points);

        // Asignar posición
        const rankedWithPosition = rankedUsers.map((user, index) => ({
            ...user,
            position: index + 1,
        }));
        
        // Filtrar por búsqueda (si aplica)
        const filteredUsers = rankedWithPosition.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );

        const totalItems = filteredUsers.length;
        const totalPages = Math.ceil(totalItems / pageSize);

        // Obtener usuarios paginados
        const paginatedUsers = filteredUsers.slice((page - 1) * pageSize, page * pageSize);

        // Convertir campos BigInt a string (si es necesario)
        const parsed = paginatedUsers.map(user => ({
            ...user,
            dateCreated: user.dateCreated?.toString() ?? null,
            last_online: user.last_online?.toString() ?? null,
        }));

        res.status(200).json({
            data: parsed,
            pagination: {
                totalItems,
                totalPages,
                currentPage: page,
                pageSize,
            },
        });
    } catch (error: any) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}
