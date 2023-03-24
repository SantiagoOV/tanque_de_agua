import database from "../config/database";
import { DatabaseRepository, Id, Query } from "../declarations/declaration";
import { Equivalencies } from "../Entities/equivalenciesEntity";

export class equivalenciesRepository implements DatabaseRepository<Equivalencies>{
    getEnd(query: Query): Promise<Equivalencies[]> {
        throw new Error("Method not implemented.");
    }

    //Repository create equivalencias de unidades
    async create(data: Partial<Equivalencies>, query?: Query | undefined): Promise<Equivalencies> {
        const repository = database.getRepository(Equivalencies);
        const equivalenciesEntity = repository.create(data);
        console.log("equivalenciesEntity ",equivalenciesEntity);
        await repository.save(equivalenciesEntity);
        return equivalenciesEntity;
    }

    //Repository listar equivalencias
    async list(query?: Query | undefined): Promise<Equivalencies[]> {
        const repository = database.getRepository(Equivalencies);
        return repository.find();
    }

    get(id: Id, query?: Query | undefined): Promise<Equivalencies> {
        throw new Error("Method not implemented.");
    }

    update(id: Id, query?: Query | undefined): Promise<Equivalencies> {
        throw new Error("Method not implemented.");
    }
}