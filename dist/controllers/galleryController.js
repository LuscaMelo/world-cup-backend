"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../lib/prisma");
const galleryController = {
    // Todos as imagens
    async getGalleryImages(req, res) {
        try {
            const gallery = await prisma_1.prisma.galleryImage.findMany();
            return res.json(gallery);
        }
        catch (error) {
            console.error("Erro ao buscar imagens da galeria:", error);
            return res.status(500).json({
                error: "Erro interno ao buscar imagens da galeria"
            });
        }
    }
};
exports.default = galleryController;
