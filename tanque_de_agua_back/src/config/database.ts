import { DataSource } from 'typeorm';
import { Capabilities } from '../Entities/capacidadEntity';
import { Equivalencies } from '../Entities/equivalenciesEntity';
import { Historical } from '../Entities/historicalEntity';

export default new DataSource(
    {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "tanque_de_agua",
        synchronize:true,
        entities: [Equivalencies,Capabilities,Historical]
    }
)