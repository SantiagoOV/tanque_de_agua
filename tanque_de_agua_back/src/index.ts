import { Application } from "express";
import express from 'express';
import indexRoutes from './routes/indexRoutes';
import database from "./config/database";
import morgan from 'morgan';
import cors from 'cors';

class Server {
    
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    //configuracion del puerto y express
    config(): void {
        this.app.set('port', process.env.PORT || 3099);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use(indexRoutes)
    }

    //inicio de ejecutado
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("BIENVENIDO AL API REST");
            console.log("       puerto ", this.app.get('port'));
            database.initialize()
                .then(() => console.log("Database conected"))
                .catch(console.error)
        });
    }
}

const server = new Server();
server.start();