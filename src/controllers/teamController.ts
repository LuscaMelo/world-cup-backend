import { Request, Response } from "express";

const teamController = {

    getTeams(req: Request, res: Response) {
        res.send("Teams")
    }
}

export default teamController