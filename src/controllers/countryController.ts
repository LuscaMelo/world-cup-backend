import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const countryController = {

    // Todos os países
    async getCountries(req: Request, res: Response) {
        try {
            const countries = await prisma.country.findMany();

            return res.json(countries);
        } catch (error) {
            console.error("Erro ao buscar países:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar países"
            });
        }
    },
}

export default countryController