import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const stadiumController = {

    // Todos os estádios
    async getStadiums(req: Request, res: Response) {
        try {
            const stadiums = await prisma.stadium.findMany();

            return res.json(stadiums);
        } catch (error) {
            console.error("Erro ao buscar os estádios:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar os estádios"
            });
        }
    }
}

export default stadiumController