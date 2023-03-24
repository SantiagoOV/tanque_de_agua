import database from "../config/database";
import { DatabaseRepository, Id, Query } from "../declarations/declaration";
import { Historical } from "../Entities/historicalEntity";

export class GetHistoricalRepository implements DatabaseRepository<Historical> {
    getEnd(query: Query): Promise<Historical[]> {
        throw new Error("Method not implemented.");
    }
    create(data: Partial<Historical>, query?: Query | undefined): Promise<Historical> {
        throw new Error("Method not implemented.");
    }
    update(id: Id, query?: Query | undefined): Promise<Historical> {
        throw new Error("Method not implemented.");
    }
    async list(query?: Query | undefined): Promise<Historical[]> {
        const repository = database.getRepository(Historical)
                    .createQueryBuilder('historical')
                    .innerJoinAndSelect('historical.capabilities', 'capabilities')
                    .getMany();
        return repository;
    }
    get(id: Id, query?: Query | undefined): Promise<Historical> {
        throw new Error("Method not implemented.");
    }

}