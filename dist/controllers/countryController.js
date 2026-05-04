"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../lib/prisma");
const countryController = {
    // Todos os países
    async getCountries(req, res) {
        try {
            const countries = await prisma_1.prisma.country.findMany();
            return res.json(countries);
        }
        catch (error) {
            console.error("Erro ao buscar países:", error);
            return res.status(500).json({
                error: "Erro interno ao buscar países"
            });
        }
    },
};
exports.default = countryController;
