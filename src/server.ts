import express from 'express';
import bodyparse from 'body-parser'
import UserController from './controller/user';
import IUser from './model/user';


export default class App {
    private express: express.Application;
    private userController: UserController;

    constructor() {
        this.express = express();
        this.express.use(bodyparse.json());
        this.routes();
        this.userController = new UserController();
    }

    private routes() {
        this.express.post('/sum', (req, res) => {
            const { value1, value2 } = req.body
            const result = value1 + value2
            res.send(JSON.stringify(result))
        });
        this.express.post('/user', (req, res) => {
            const { name, email, phone } = req.body
            const result = this.userController.User({ name, email, phone } as IUser)
            if (result)
                res.send(JSON.stringify(result))
            else
                res.send(JSON.stringify({ error: 'Usuário não cadastrado' }))

        });
        this.express.get('/user/', (req, res) => {
            const { id } = req.query
            if (id)            
                res.send(JSON.stringify(this.userController.GetUser(+id as number)))
            else
                res.send(JSON.stringify({ error: 'Usuário não localizado' }))
        })
    }

    public start() {
        this.express.listen(4003)
    }
}

const app = new App();
app.start();