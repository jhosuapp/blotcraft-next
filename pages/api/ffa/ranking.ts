import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const topKills = await prisma.ffa_users.findMany({
            orderBy: { kills: 'desc' },
            take: 10,
        });

        const topDeaths = await prisma.ffa_users.findMany({
            orderBy: { deaths: 'desc' },
            take: 10,
        });

        const topStreaks = await prisma.ffa_users.findMany({
            orderBy: { killStreak: 'desc' },
            take: 10,
        });

        const parseBigIntFields = (users: any[]) =>
        users.map(user => ({
            ...user,
            dateCreated: user.dateCreated.toString(),
            last_online: user.last_online.toString(),
        }));

        res.status(200).json({
            kills: parseBigIntFields(topKills),
            deaths: parseBigIntFields(topDeaths),
            ks: parseBigIntFields(topStreaks),
        });
    } catch (error: any) {
        console.error('Error al obtener rankings:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}