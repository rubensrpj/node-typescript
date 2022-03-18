import express, { response } from 'express';
import bodyparse from 'body-parser'

const app = express();
app.use(bodyparse.json());
app.post('/sum', (req, res) => {
    const data = req.body
    const result = data.value1 + data.value2
    res.send(JSON.stringify(result))
});
app.listen(4003);