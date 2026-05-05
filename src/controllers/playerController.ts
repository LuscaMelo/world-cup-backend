import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const playerController = {

    // Todos os jogadores
    async getPlayers(req: Request, res: Response) {
        try {
            const players = await prisma.player.findMany();

            return res.json(players);
        } catch (error) {
            console.error("Erro ao buscar os jogadores:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar os jogadores"
            });
        }
    },

    // Jogadores em destaque
    async getFeaturedPlayers(req: Request, res: Response) {
        try {
            const players = await prisma.player.findMany({
                where: {
                    overallRating: {
                        not: null,
                        gt: 89
                    }
                },
                orderBy: {
                    overallRating: 'desc'
                },
                take: 4
            });

            return res.json(players);
        } catch (error) {
            console.error("Erro ao buscar jogadores em destaque:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar jogadores em destaque",
                details: error instanceof Error ? error.message : error
            });
        }
    },

    // Jogador por ID
    async getPlayerById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const player = await prisma.player.findUnique({
                where: {
                    id: String(id)
                }
            });

            if (!player) {
                return res.status(404).json({
                    error: "Jogador não encontrado"
                });
            }

            return res.json(player);

        } catch (error) {
            console.error("Erro ao buscar jogador:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar jogador"
            });
        }
    }
}

export default playerController