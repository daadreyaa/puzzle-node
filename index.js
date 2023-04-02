const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var connection = require('./utils/config');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const developerRoute = require('./routes/developer');
const userRoute = require('./routes/user');

app.use('/developer', developerRoute);
app.use('/user', userRoute);

app.get('/', (req, res) => {
    console.log(connection.readyState);
    res.json({ "data": "Success" });
});

app.get('/test', (req, res) => {
    console.log('test')
    connection.get('open', async function () {
        console.log('got connection');
        const collection = connection.db.collection("test");
        console.log(collection);
        collection.find({}).toArray(function (err, data) {
            console.log(data);
            res.json(data); // it will print your collection data
        });

    });
});

app.listen(PORT, () => console.log(`Server running on port http://127.0.0.1:${PORT}`));