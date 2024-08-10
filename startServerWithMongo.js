let express = require('express');
let app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://s224238367:uh1dhGnQbReJzQX7@cluster0.ueb59mc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
let port = process.env.port || 3000;
let collection;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});



async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db().collection('Details');
        console.log(collection);
    } catch(ex) {
        console.error(ex);
    }
}

app.post('/api/details', (req,res)=>{
    let details = req.body;
    postDetails(details, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'success'});
        }
    });
});


app.get('/api/lastDetail', (req, res) => {
    collection.find({}).sort({_id: -1}).limit(1).toArray((err, result) => {
        if (!err && result.length > 0) {
            res.json({statusCode: 200, data: result[0], message: 'Last detail fetched successfully'});
        } else {
            res.json({statusCode: 404, message: 'No details found'});
        }
    });
});



function postDetails(details,callback) {
    collection.insertOne(details,callback);
}

function getAllDetails(callback){
    collection.find({}).toArray(callback);
}


app.listen(port, ()=>{
    console.log('express server started');
    runDBConnection();
});