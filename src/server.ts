import express, { response } from 'express';
import bodyparse from 'body-parser'

export default class App {
    private express: express.Application;
    private user: { id: number, name: string, email: string, phone: string }[] = [];
    constructor() {
        this.express = express();
        this.express.use(bodyparse.json());
        this.routes();
    }

    private routes() {
        this.express.post('/sum', (req, res) => {
            const { value1, value2 } = req.body
            const result = value1 + value2
            res.send(JSON.stringify(result))
        });
        this.express.post('/user', (req, res) => {
            const { name, email, phone } = req.body
            const user = {
                id: this.user.length + 1,
                name: name,
                email: email,
                phone: phone
            }
            this.user.push(user)
            res.send(JSON.stringify(user))
        });
        this.express.get('/user/', (req, res) => {
            const { id } = req.query
            const user = this.user.find(user => user.id === (id === undefined ? 0 : +id))
            res.send(JSON.stringify(user))
        })
    }

    public start() {
        this.express.listen(4003)
    }
}

const app = new App();
app.start();