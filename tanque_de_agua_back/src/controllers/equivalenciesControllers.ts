import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "../declarations/declaration";
import { Equivalencies } from "../Entities/equivalenciesEntity";

export class equivalenciesControllers {
    constructor(private repository: DatabaseRepository<Equivalencies>) {}

    async create(req: Request, res: Response, next: NextFunction) : Promise<void> {
        try {
            const Body = req.body;
            const equivalencies = await this.repository.create(Body);
            res.status(200).json(equivalencies)
        } catch (error) {
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction) : Promise<void> {
        try {
            const equivalencies = await this.repository.list();
            res.status(200).json(equivalencies);
        } catch (error) {
            next(error)
        }
    }
}