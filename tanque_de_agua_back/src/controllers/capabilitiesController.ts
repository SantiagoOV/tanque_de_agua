import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "../declarations/declaration";
import { Capabilities } from "../Entities/capacidadEntity";

export class CapabilitiesControllers {

    //Controladores de servicios para las capacidades del tanque
    
    constructor(private repository: DatabaseRepository<Capabilities>) {}

    async create(req: Request, res: Response, next: NextFunction) : Promise<void> {
        try {
            const Body = req.body;
            const capabilities = await this.repository.create(Body);
            res.status(200).json(capabilities)
        } catch (error) {
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction) : Promise<void> {
        try {
            const capabilities = await this.repository.list();
            res.status(200).json(capabilities);
        } catch (error) {
            next(error)
        }
    }
    
    async getEnd(req: Request, res: Response, next: NextFunction) : Promise<void> {
        try {
            const capabilities = await this.repository.getEnd();
            res.status(200).json(capabilities);
        } catch (error) {
            next(error)
        }
    }


}