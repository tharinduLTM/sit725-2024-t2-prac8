let collection;

const initialize = (dbCollection) => {
    collection = dbCollection;
}

const postDetails = (details, callback) => {
    collection.insertOne(details, callback);
}

const getLastDetail = (callback) => {
    collection.find({}).sort({ _id: -1 }).limit(1).toArray(callback);
}

module.exports = { initialize, postDetails, getLastDetail };
