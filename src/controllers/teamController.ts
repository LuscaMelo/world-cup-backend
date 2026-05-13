import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const teamController = {

    // Todas as seleções
    async getTeams(req: Request, res: Response) {
        try {
            const teams = await prisma.team.findMany({
                include: {
                    players: true
                }
            });

            return res.json(teams);

        } catch (error) {
            console.error("Erro ao buscar as seleções:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar as seleções"
            });
        }
    },

    // Seleções em destaque
    async getFeaturedTeams(req: Request, res: Response) {
        try {
            const teams = await prisma.team.findMany({
                where: {
                    isFeatured: true
                }
            });

            return res.json(teams);
        } catch (error) {
            console.error("Erro ao buscar as seleções em destaque:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar as seleções em destaque"
            });
        }
    },

    // Seleção por slug
    async getTeamBySlug(req: Request, res: Response) {
        try {
            const { slug } = req.params;

            const teams = await prisma.team.findMany({
                include: {
                    players: true
                }
            });

            const team = teams.find((team) => {
                const teamSlug = team.name
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, "-");

                return teamSlug === slug;
            });

            if (!team) {
                return res.status(404).json({
                    error: "Seleção não encontrada"
                });
            }

            return res.json(team);

        } catch (error) {
            console.error("Erro ao buscar seleção:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar seleção",
                details: error instanceof Error
                    ? error.message
                    : error
            });
        }
    }
}

export default teamController