const express = require('express');
const cluster = require('cluster');
const os = require('os');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

const cpus = os.cpus().length;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello There! from ${process.pid}')
})

if (cluster.isMaster) {
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
}

else {
    app.listen(port, () => {
        console.log(`Server ${process.pid} listening at http://localhost:${port}`)
    })
}

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`)
// })