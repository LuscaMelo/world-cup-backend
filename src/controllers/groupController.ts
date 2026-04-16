import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const groupController = {

    // Todos os grupos
    async getGroups(req: Request, res: Response) {
        try {
            const groups = await prisma.group.findMany();

            return res.json(groups);
        } catch (error) {
            console.error("Erro ao buscar grupos:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar grupos"
            });
        }
    },

    // Grupos em destaque
    async getFeaturedGroups(req: Request, res: Response) {
        try {
            const groups = await prisma.group.findMany({
                where: {
                    isFeatured: true
                }
            });

            return res.json(groups);
        } catch (error) {
            console.error("Erro ao buscar grupos:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar grupos"
            });
        }
    }
};

export default groupController;