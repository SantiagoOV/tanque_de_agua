"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Historical = void 0;
const typeorm_1 = require("typeorm");
const capacidadEntity_1 = require("./capacidadEntity");
let Historical = class Historical {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Historical.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Historical.prototype, "unidad_medida", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double' }),
    __metadata("design:type", Number)
], Historical.prototype, "llenado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double' }),
    __metadata("design:type", Number)
], Historical.prototype, "vaciado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double' }),
    __metadata("design:type", Number)
], Historical.prototype, "disponibilidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Historical.prototype, "total_capacity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => capacidadEntity_1.Capabilities, capabilities => capabilities.historical),
    (0, typeorm_1.JoinColumn)({ name: 'total_capacity' }),
    __metadata("design:type", capacidadEntity_1.Capabilities)
], Historical.prototype, "capabilities", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Historical.prototype, "createdAt", void 0);
Historical = __decorate([
    (0, typeorm_1.Entity)()
], Historical);
exports.Historical = Historical;
