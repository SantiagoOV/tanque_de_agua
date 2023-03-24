"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const database_1 = __importDefault(require("./config/database"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //configuracion del puerto y express
    config() {
        this.app.set('port', process.env.PORT || 3099);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
    }
    //inicio de ejecutado
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("BIENVENIDO AL API REST");
            console.log("       puerto ", this.app.get('port'));
            database_1.default.initialize()
                .then(() => console.log("Database conected"))
                .catch(console.error);
        });
    }
}
const server = new Server();
server.start();
