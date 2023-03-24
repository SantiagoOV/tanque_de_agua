"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilitiesRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
const capacidadEntity_1 = require("../Entities/capacidadEntity");
class CapabilitiesRepository {
    list(query) {
        throw new Error("Method not implemented.");
    }
    //Repositorio de servicio create para las Capabilities
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(capacidadEntity_1.Capabilities);
            const equivalenciesEntity = repository.create(data);
            yield repository.save(equivalenciesEntity);
            return equivalenciesEntity;
        });
    }
    ////Repositorio get para listar la ultima capacidad
    getEnd(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(capacidadEntity_1.Capabilities)
                .createQueryBuilder('capabilities')
                .orderBy('capabilities.createdAt', 'DESC')
                .getOne();
            return repository.then();
        });
    }
    get(id, query) {
        throw new Error("Method not implemented.");
    }
    update(id, query) {
        throw new Error("Method not implemented.");
    }
}
exports.CapabilitiesRepository = CapabilitiesRepository;
