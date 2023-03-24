import database from "../config/database";
import { DatabaseRepository, Id, Query } from "../declarations/declaration";
import { Capabilities } from "../Entities/capacidadEntity";

export class CapabilitiesRepository implements DatabaseRepository<Capabilities> {
    
    list(query?: Query | undefined): Promise<Capabilities[]> {
        throw new Error("Method not implemented.");
    }

    //Repositorio de servicio create para las Capabilities
    async create(data: Partial<Capabilities>, query?: Query | undefined): Promise<Capabilities> {
        const repository = database.getRepository(Capabilities);
        const equivalenciesEntity = repository.create(data);
        await repository.save(equivalenciesEntity);
        return equivalenciesEntity;
    }

    ////Repositorio get para listar la ultima capacidad
    async getEnd(query: Query): Promise<Capabilities[]> {
        const repository = database.getRepository(Capabilities)
                        .createQueryBuilder('capabilities')
                        .orderBy('capabilities.createdAt','DESC')
                        .getOne();
        return repository.then();
    }
    get(id: Id, query?: Query | undefined): Promise<Capabilities> {
        throw new Error("Method not implemented.");
    }
    update(id: Id, query?: Query | undefined): Promise<Capabilities> {
        throw new Error("Method not implemented.");
    }

}