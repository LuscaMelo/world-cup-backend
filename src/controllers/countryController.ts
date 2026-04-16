import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const countryController = {

    async getCountries(req: Request, res: Response) {
    try {
      const countries = await prisma.country.findMany()

      res.json(countries)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: "Erro ao buscar países" })
    }
  }
}

export default countryController