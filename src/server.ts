import express from 'express';

const app = express();
app.get('/', (req, res) => {
    return res.send('Ok!');
});
app.post('/sum', (req, res) => {
    const  data = req.body.data
    const result = data.value1 + data.value2
    return res.send(result);
});
app.listen(4003);


