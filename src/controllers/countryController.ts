import { Request, Response } from "express";

const countryController = {

    getCountries(req: Request, res: Response) {
        res.send("Countries")
    }
}

export default countryController