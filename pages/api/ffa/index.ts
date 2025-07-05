import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const usuarios = await prisma.ffa_users.findMany({
            take: 10,
        });

        const parsed = usuarios.map(user => ({
            ...user,
            dateCreated: user.dateCreated.toString(),
            last_online: user.last_online.toString(),
        }));

        res.status(200).json(parsed);
    } catch (error: any) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}