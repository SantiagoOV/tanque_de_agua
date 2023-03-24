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
exports.equivalenciesRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
const equivalenciesEntity_1 = require("../Entities/equivalenciesEntity");
class equivalenciesRepository {
    getEnd(query) {
        throw new Error("Method not implemented.");
    }
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(equivalenciesEntity_1.Equivalencies);
            const equivalenciesEntity = repository.create(data);
            console.log("equivalenciesEntity ", equivalenciesEntity);
            yield repository.save(equivalenciesEntity);
            return equivalenciesEntity;
        });
    }
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(equivalenciesEntity_1.Equivalencies);
            return repository.find();
        });
    }
    get(id, query) {
        throw new Error("Method not implemented.");
    }
    update(id, query) {
        throw new Error("Method not implemented.");
    }
}
exports.equivalenciesRepository = equivalenciesRepository;
