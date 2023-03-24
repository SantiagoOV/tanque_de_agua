import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "../declarations/declaration";
import { Historical } from "../Entities/historicalEntity";

export class GetHistoricalControllers {
    constructor(private repository: DatabaseRepository<Historical>) {}

    async list(req: Request, res: Response, next: NextFunction) : Promise<void> {
        try {
            const historical = await this.repository.list();
            res.status(200).json(historical);
        } catch (error) {
            next(error)
        }
    }
}