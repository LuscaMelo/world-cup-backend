import { Request, Response } from "express";

const stadiumController = {

    getStadiums(req: Request, res: Response) {
        res.send("Stadiums")
    }
}

export default stadiumController