import { Request, Response } from "express";

const stadiumController = {

    getStadiums(req: Request, res: Response) {
        res.send("Gallery")
    }
}

export default stadiumController