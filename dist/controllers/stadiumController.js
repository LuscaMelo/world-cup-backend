"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../lib/prisma");
const stadiumController = {
    // Todos os estádios
    async getStadiums(req, res) {
        try {
            const stadiums = await prisma_1.prisma.stadium.findMany();
            return res.json(stadiums);
        }
        catch (error) {
            console.error("Erro ao buscar os estádios:", error);
            return res.status(500).json({
                error: "Erro interno ao buscar os estádios"
            });
        }
    }
};
exports.default = stadiumController;
