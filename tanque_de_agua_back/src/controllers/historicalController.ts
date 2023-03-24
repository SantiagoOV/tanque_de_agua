import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "../declarations/declaration";
import { HistoricalInterface } from "../Interface/historicalInterface";

export class HistoricalControllers {

    //Controlador para crear historico del tanque

    constructor(private repository: DatabaseRepository<HistoricalInterface>) {}

    async create(req: Request, res: Response, next: NextFunction) : Promise<void> {
        try {
            const Body = req.body;
            const historical = await this.repository.create(Body);
            res.status(200).json(historical)
        } catch (error) {
            next(error);
        }
    }
}