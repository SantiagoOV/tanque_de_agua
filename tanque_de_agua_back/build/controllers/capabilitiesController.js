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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilitiesControllers = void 0;
class CapabilitiesControllers {
    constructor(repository) {
        this.repository = repository;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Body = req.body;
                const capabilities = yield this.repository.create(Body);
                res.status(200).json(capabilities);
            }
            catch (error) {
                next(error);
            }
        });
    }
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const capabilities = yield this.repository.list();
                res.status(200).json(capabilities);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getEnd(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const capabilities = yield this.repository.getEnd();
                res.status(200).json(capabilities);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.CapabilitiesControllers = CapabilitiesControllers;
