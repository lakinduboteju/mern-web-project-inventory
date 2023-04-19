import {MongoClient} from "mongodb";

/**
 * Gets first Inventory Manager.
 * @param {string} mongoConnectionUri
 * @param {string} mongoDbName
 * @param {string} mongoCollectionName
 * @return {Promise<{username: string, name: string} | null>}
 * @throws {Error}
 */
async function getFirstInventoryManager(mongoConnectionUri, mongoDbName, mongoCollectionName) {
    const mongoClient = new MongoClient(mongoConnectionUri);
    const mongoDb = mongoClient.db(mongoDbName);
    const collection = mongoDb.collection(mongoCollectionName);
    try {
        const document = await collection.findOne();
        if (document !== null) {
            return {
                username: document.username,
                name:     document.name,
            };
        }
    } finally {
        await mongoClient.close();
    }
    return null;
}

export default {
    getFirstInventoryManager,
};
