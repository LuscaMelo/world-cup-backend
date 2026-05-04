"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../lib/prisma");
const playerController = {
    // Todos os jogadores
    async getPlayers(req, res) {
        try {
            const players = await prisma_1.prisma.player.findMany();
            return res.json(players);
        }
        catch (error) {
            console.error("Erro ao buscar os jogadores:", error);
            return res.status(500).json({
                error: "Erro interno ao buscar os jogadores"
            });
        }
    },
    // Jogador por ID
    async getPlayerById(req, res) {
        try {
            const { id } = req.params;
            const player = await prisma_1.prisma.player.findUnique({
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
        }
        catch (error) {
            console.error("Erro ao buscar jogador:", error);
            return res.status(500).json({
                error: "Erro interno ao buscar jogador"
            });
        }
    }
};
exports.default = playerController;
