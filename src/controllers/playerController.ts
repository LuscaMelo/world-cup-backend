import { Request, Response } from "express";

const playerController = {

    getPlayers(req: Request, res: Response) {
        res.send("Players")
    }
}

export default playerController