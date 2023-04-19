import {MongoClient} from "mongodb";

async function run() {
    const mongoConnectionUri = 'mongodb://user:pass@localhost:27017';
    const mongoDbName        = 'inventory';

    const mongoClient = new MongoClient(mongoConnectionUri);
    const mongoDb = mongoClient.db(mongoDbName);

    const collection = mongoDb.collection('inventory-managers');

    const inventoryManager = {
        username: 'user',
        password: 'pass',
        name:     'Admin'
    };

    const result = await collection.insertOne(inventoryManager);
    console.log('Inventory Manager document inserted.', result.insertedId.toString());
    return;
}

run().then(function() {
    process.exit(0);
}).catch(function(e) {
    console.error(e);
    process.exit(-1);
});

