import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const playerController = {

    // Todos os jogadores
    async getPlayers(req: Request, res: Response) {
        try {
            const players = await prisma.player.findMany({
                include: {
                    team: {
                        select: {
                            name: true,
                            flag: true
                        }
                    }
                }
            });

            return res.json(players);
        } catch (error) {
            console.error("Erro ao buscar os jogadores:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar os jogadores",
                details: error instanceof Error ? error.message : error
            });
        }
    },

    // Jogadores em destaque (overall > 89, top 4)
    async getFeaturedPlayers(req: Request, res: Response) {
        try {
            const players = await prisma.player.findMany({
                where: {
                    overallRating: {
                        gt: 89
                    }
                },
                orderBy: {
                    overallRating: 'desc'
                },
                take: 4,
                include: {
                    team: {
                        select: {
                            name: true,
                            flag: true
                        }
                    }
                }
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

    // Jogador por slug
    async getPlayerBySlug(req: Request, res: Response) {
        try {
            const { slug } = req.params;

            const players = await prisma.player.findMany({
                include: {
                    team: {
                        select: {
                            name: true,
                            flag: true
                        }
                    }
                }
            });

            const player = players.find((player) => {

                const playerSlug = player.name
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, "-");

                return playerSlug === slug;
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
                error: "Erro interno ao buscar jogador",
                details: error instanceof Error
                    ? error.message
                    : error
            });
        }
    }
};

export default playerController;