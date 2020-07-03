import express, { Application, Request, Response } from 'express';
import { connectDB } from './db/db';
import { getUsers, saveUser } from './controllers/userController';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8000;

export default class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.startDB();
    }

    startDB(): void {
        connectDB();
    }

    config(): void {
        this.app.set('port', PORT);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
        this.app.get('/api', (req: Request, res: Response) => res.send('api'));
        this.app.get('/api/user', getUsers);
        this.app.post('/api/user', saveUser);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () =>
            console.log(`api running in http://${HOST}:${PORT}`),
        );
    }
}
