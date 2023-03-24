"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const capabilitiesController_1 = require("../controllers/capabilitiesController");
const equivalenciesControllers_1 = require("../controllers/equivalenciesControllers");
const getHistoricalController_1 = require("../controllers/getHistoricalController");
const historicalController_1 = require("../controllers/historicalController");
const capabilitiesRepository_1 = require("../repository/capabilitiesRepository");
const equivalenciesRepository_1 = require("../repository/equivalenciesRepository");
const GetHistoricalRepository_1 = require("../repository/GetHistoricalRepository");
const historicalRepository_1 = require("../repository/historicalRepository");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controllersEquivalencies = new equivalenciesControllers_1.equivalenciesControllers(new equivalenciesRepository_1.equivalenciesRepository());
        this.capabilitiesControllers = new capabilitiesController_1.CapabilitiesControllers(new capabilitiesRepository_1.CapabilitiesRepository());
        this.historicalControllers = new historicalController_1.HistoricalControllers(new historicalRepository_1.HistoricalRepository());
        this.getHistoricalControllers = new getHistoricalController_1.GetHistoricalControllers(new GetHistoricalRepository_1.GetHistoricalRepository());
        this.config();
    }
    config() {
        /*rutas para las equivalencias de las medidas*/
        this.router.get('/equivalencies', this.controllersEquivalencies.list.bind(this.controllersEquivalencies));
        this.router.post('/createEquivalencies', this.controllersEquivalencies.create.bind(this.controllersEquivalencies));
        /*rutas para la capacidad del tanque*/
        this.router.get('/capabilities', this.capabilitiesControllers.list.bind(this.capabilitiesControllers));
        this.router.post('/createCapabilities', this.capabilitiesControllers.create.bind(this.capabilitiesControllers));
        /*rutas para el historico de llenado o vacio*/
        this.router.get('/historical', this.getHistoricalControllers.list.bind(this.getHistoricalControllers));
        this.router.post('/createHistorical', this.historicalControllers.create.bind(this.historicalControllers));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
