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
exports.HistoricalRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
const historicalEntity_1 = require("../Entities/historicalEntity");
class HistoricalRepository {
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(historicalEntity_1.Historical);
            const historical = repository.create(data);
            yield repository.save(data);
            return historical;
        });
    }
    list(query) {
        throw new Error("Method not implemented.");
    }
    get(id, query) {
        throw new Error("Method not implemented.");
    }
    update(id, query) {
        throw new Error("Method not implemented.");
    }
}
exports.HistoricalRepository = HistoricalRepository;
