import { Request, Response } from "express";

const galleryController = {

    getGallery(req: Request, res: Response) {
        res.send("Gallery")
    }
}

export default galleryController