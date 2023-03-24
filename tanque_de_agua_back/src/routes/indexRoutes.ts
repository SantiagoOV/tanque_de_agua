import { response, Router } from 'express';
import { CapabilitiesControllers } from '../controllers/capabilitiesController';
import { equivalenciesControllers } from '../controllers/equivalenciesControllers';
import { GetHistoricalControllers } from '../controllers/getHistoricalController';
import { HistoricalControllers } from '../controllers/historicalController';
import { CapabilitiesRepository } from '../repository/capabilitiesRepository';
import { equivalenciesRepository } from '../repository/equivalenciesRepository';
import { GetHistoricalRepository } from '../repository/GetHistoricalRepository';
import { HistoricalRepository } from '../repository/historicalRepository';

class IndexRoutes {
    public router: Router = Router();

    public controllersEquivalencies = new equivalenciesControllers(
        new equivalenciesRepository()
    );
    public capabilitiesControllers = new CapabilitiesControllers(
        new CapabilitiesRepository()
    );
    public historicalControllers = new HistoricalControllers(
        new HistoricalRepository()
    );
    public getHistoricalControllers = new GetHistoricalControllers(
        new GetHistoricalRepository()
    );

    constructor() {
        this.config();
    }

    config(): void {
        /*rutas para las equivalencias de las medidas*/
        this.router.get('/equivalencies', this.controllersEquivalencies.list.bind(this.controllersEquivalencies))
        this.router.post('/createEquivalencies', this.controllersEquivalencies.create.bind(this.controllersEquivalencies))

        /*rutas para la capacidad del tanque*/
        this.router.get('/capabilities', this.capabilitiesControllers.list.bind(this.capabilitiesControllers))
        this.router.post('/createCapabilities', this.capabilitiesControllers.create.bind(this.capabilitiesControllers))

        /*rutas para el historico de llenado o vacio*/
        this.router.get('/historical', this.getHistoricalControllers.list.bind(this.getHistoricalControllers))
        this.router.post('/createHistorical', this.historicalControllers.create.bind(this.historicalControllers))
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router