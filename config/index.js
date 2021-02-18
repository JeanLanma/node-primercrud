const MongoDBConection = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.uua7q.azure.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

module.exports = MongoDBConection;