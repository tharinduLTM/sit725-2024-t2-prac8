let express = require('express');
let app = express();
let { MongoClient, ServerApiVersion } = require('mongodb');
let detailsRouter = require('./routes/detailsRouter');
let detailsModel = require('./models/detailsModel');
const uri = "mongodb+srv://s224238367:uh1dhGnQbReJzQX7@cluster0.ueb59mc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let port = process.env.port || 3080;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


let http = require('http').createServer(app);
let io = require('socket.io')(http);

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


const australianStates = ['VIC', 'NSW', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];


io.on('connection', (socket) => {
    console.log('User connected');
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    
    setInterval(() => {
        let broadcastingState = australianStates[Math.floor(Math.random() * australianStates.length)];
        socket.emit('state', broadcastingState);
        console.log('Broadcasting State: ' + broadcastingState);
    }, 1000);
});

http.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    runDBConnection();
});
