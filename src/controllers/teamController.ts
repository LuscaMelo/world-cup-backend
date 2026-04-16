import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const teamController = {

    // Todas as seleções
    async getTeams(req: Request, res: Response) {
        try {
            const stadiums = await prisma.team.findMany();

            return res.json(stadiums);
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
    }
}

export default teamController