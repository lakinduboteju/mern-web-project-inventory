import express from 'express';
import database from "./database.js";
import cors from "cors";

/**
 * Server configuration
 * @type {{
 *     serverPort: number,
 *     mongo: {
 *         connectionUri: string,
 *         dbName: string,
 *         collections: {
 *             inventoryManagers: string
 *         },
 *     },
 * }}
 */
const config = {
    serverPort: 8080,
    mongo: {
        connectionUri: 'mongodb://user:pass@localhost:27017',
        dbName:        'inventory',
        collections: {
            inventoryManagers: 'inventory-managers'
        }
    },
};

const app = express();
app.use(express.json());
app.use(cors());

app.route('/manage/inventory/user').get(
    /**
     * Gets Inventory Manager user info
     * @param {express.Request} req
     * @param {express.Response} res
     * @return {Promise<void>}
     */
    async function(req, res) {
        /**
         * @type {{username: string, name: string} | null}
         */
        let inventoryManager = null;
        try {
            inventoryManager = await database.getFirstInventoryManager(config.mongo.connectionUri,
                config.mongo.dbName, config.mongo.collections.inventoryManagers);
        } catch (e) {
            console.error({
                errorMsg: 'Get first Inventory Manager from database failed.',
                error: e,
            });
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (inventoryManager === null) {
            console.error({
                errorMsg: 'Inventory Manager not found in database.',
            });
            res.status(404).json({ error: 'Not Found' });
            return;
        }

        res.status(200).json(inventoryManager);
        return;
    }
);

app.listen(config.serverPort, function() {
    console.log('Server is listening at port', config.serverPort);
});
