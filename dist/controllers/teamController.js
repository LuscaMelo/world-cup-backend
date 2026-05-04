"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../lib/prisma");
const teamController = {
    // Todas as seleções
    async getTeams(req, res) {
        try {
            const stadiums = await prisma_1.prisma.team.findMany();
            return res.json(stadiums);
        }
        catch (error) {
            console.error("Erro ao buscar as seleções:", error);
            return res.status(500).json({
                error: "Erro interno ao buscar as seleções"
            });
        }
    },
    // Seleções em destaque
    async getFeaturedTeams(req, res) {
        try {
            const teams = await prisma_1.prisma.team.findMany({
                where: {
                    isFeatured: true
                }
            });
            return res.json(teams);
        }
        catch (error) {
            console.error("Erro ao buscar as seleções em destaque:", error);
            return res.status(500).json({
                error: "Erro interno ao buscar as seleções em destaque"
            });
        }
    }
};
exports.default = teamController;
