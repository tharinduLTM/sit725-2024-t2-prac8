let express = require('express');
let app = express();
let { MongoClient, ServerApiVersion } = require('mongodb');
let detailsRouter = require('./routes/detailsRouter');
let detailsModel = require('./models/detailsModel');

const uri = "mongodb+srv://s224238367:uh1dhGnQbReJzQX7@cluster0.ueb59mc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let port = process.env.port || 3000;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function runDBConnection() {
    try {
        await client.connect();
        detailsModel.initialize(client.db().collection('Details'));
        console.log('Database connection successful');
    } catch (ex) {
        console.error(ex);
    }
}

app.use('/api', detailsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    runDBConnection();
});
