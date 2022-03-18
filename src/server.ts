import express, { response } from 'express';
import bodyparse from 'body-parser'

export default class App {
    private express : express.Application;

    constructor() {
        this.express = express();
        this.express.use(bodyparse.json());
        this.routes();
    }

    private routes() {
        this.express.post('/sum', (req, res) => {
            const data = req.body
            const result = data.value1 + data.value2
            res.send(JSON.stringify(result))
        });
    }

    public start() {
        this.express.listen(4003)
    }
}

const app = new App();
app.start();