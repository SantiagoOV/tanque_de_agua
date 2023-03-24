import database from "../config/database";
import { DatabaseRepository, Id, Query } from "../declarations/declaration";
import { Historical } from "../Entities/historicalEntity";
import { Capabilities } from "../Entities/capacidadEntity";
import { CapabilitiesInterface } from "../Interface/capabilitiesInterface";
import { HistoricalInterface } from "../Interface/historicalInterface";

export class HistoricalRepository implements DatabaseRepository<HistoricalInterface> {
    getEnd(query: Query): Promise<HistoricalInterface[]> {
        throw new Error("Method not implemented.");
    }
    async create(data: Partial<HistoricalInterface>, query?: Query ): Promise<HistoricalInterface> {
        const repository = database.getRepository(Historical);
        const historical = repository.create(data);
        await repository.save(data);
        return historical;
    }
    list(query?: Query | undefined): Promise<HistoricalInterface[]> {
        throw new Error("Method not implemented.");
    }
    get(id: Id, query?: Query | undefined): Promise<HistoricalInterface> {
        throw new Error("Method not implemented.");
    }
    update(id: Id, query?: Query | undefined): Promise<HistoricalInterface> {
        throw new Error("Method not implemented.");
    }
}