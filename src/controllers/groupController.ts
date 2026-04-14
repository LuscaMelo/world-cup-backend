import { Request, Response } from "express";

const groupController = {

    getGroups(req: Request, res: Response) {
        res.send("Groups")
    }
}

export default groupController