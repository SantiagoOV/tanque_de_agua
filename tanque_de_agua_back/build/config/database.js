"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const capacidadEntity_1 = require("../Entities/capacidadEntity");
const equivalenciesEntity_1 = require("../Entities/equivalenciesEntity");
const historicalEntity_1 = require("../Entities/historicalEntity");
exports.default = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "tanque_de_agua",
    synchronize: true,
    entities: [equivalenciesEntity_1.Equivalencies, capacidadEntity_1.Capabilities, historicalEntity_1.Historical]
});
