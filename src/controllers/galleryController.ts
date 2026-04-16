import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const galleryController = {

    // Todos as imagens
    async getGalleryImages(req: Request, res: Response) {
        try {
            const gallery = await prisma.galleryImage.findMany();

            return res.json(gallery);
        } catch (error) {
            console.error("Erro ao buscar imagens da galeria:", error);

            return res.status(500).json({
                error: "Erro interno ao buscar imagens da galeria"
            });
        }
    }
}

export default galleryController