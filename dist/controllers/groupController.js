"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../lib/prisma");
const groupController = {
    // Todos os grupos
    async getGroups(req, res) {
        try {
            const groups = await prisma_1.prisma.group.findMany();
            return res.json(groups);
        }
        catch (error) {
            console.error("Erro ao buscar grupos:", error);
            return res.status(500).json({
                error: "Erro interno ao buscar grupos"
            });
        }
    },
    // Grupos em destaque
    async getFeaturedGroups(req, res) {
        try {
            const groups = await prisma_1.prisma.group.findMany({
                where: {
                    isFeatured: true
                }
            });
            return res.json(groups);
        }
        catch (error) {
            console.error("Erro ao buscar grupos:", error);
            return res.status(500).json({
                error: "Erro interno ao buscar grupos"
            });
        }
    }
};
exports.default = groupController;
