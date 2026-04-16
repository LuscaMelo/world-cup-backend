import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const globalSearch = async (req: Request, res: Response) => {
  const { q } = req.query;

  // validação básica
  if (!q || typeof q !== "string") {
    return res.status(400).json({ error: "Query inválida" });
  }

  const search = q.trim();

  // evita busca inútil (1 letra, espaço, etc)
  if (search.length < 2) {
    return res.json({
      query: search,
      total: 0,
      results: {
        players: [],
        teams: [],
        stadiums: [],
      },
    });
  }

  try {
    const [players, teams] = await Promise.all([
      prisma.player.findMany({
        where: {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
          ],
        },
        select: {
          id: true,
          name: true,
          photo: true,
        },
        orderBy: {
          name: "asc",
        },
        take: 5,
      }),

      prisma.team.findMany({
        where: {
          name: { contains: search, mode: "insensitive" },
        },
        select: {
          id: true,
          name: true,
          thumbnail: true,
        },
        orderBy: {
          name: "asc",
        },
        take: 5,
      }),
    ]);

    return res.json({
      query: search,
      total: players.length + teams.length,
      results: {
        players,
        teams,
      },
    });
  } catch (error) {
    console.error("Erro na busca:", error);
    return res.status(500).json({ error: "Erro interno na busca" });
  }
};