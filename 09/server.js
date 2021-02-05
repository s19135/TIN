const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post('/calculate', (req, res) => {
    let x = parseFloat(req.body.x);
    let y = parseFloat(req.body.y);
    let operation = req.body.operation;

    if (operation === 'add')
        res.json({ result: (x + y) });
    else if (operation === 'sub')
        res.json({ result: (x - y) });
    else if (operation === 'mul')
        res.json({ result: (x * y) });
    else if (operation === 'div') {
        if (y === 0)
            res.json(null);
        else
            res.json({ result: (x / y) });

    }
});

app.listen(PORT, () => {
    console.log(`Server listens at port ${PORT}...`);
});
