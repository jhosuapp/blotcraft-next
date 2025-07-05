import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 20;
        const search = (req.query.search as string) || '';

        // Total de registros (con o sin filtro de búsqueda)
        const totalItems = await prisma.ffa_users.count({
            where: {
                name: {
                    contains: search,
                },
            },
        });

        const usersFfa = await prisma.ffa_users.findMany({
            where: {
                name: {
                    contains: search,
                },
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
            orderBy: {
                id: 'asc',
            },
        });

        // Convertir BigInt a string
        const parsed = usersFfa.map(user => ({
            ...user,
            dateCreated: user.dateCreated.toString(),
            last_online: user.last_online.toString(),
        }));

        const totalPages = Math.ceil(totalItems / pageSize);

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
