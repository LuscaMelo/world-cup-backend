import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const stadiumController = {

    async getStadiums(req: Request, res: Response) {
        try {
            const stadiums = await prisma.stadium.findMany()
            res.json(stadiums)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Erro ao buscar estádios" })
        }
    }
}

export default stadiumController