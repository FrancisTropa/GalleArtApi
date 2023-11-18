import dotenv from 'dotenv';
import express from 'express';
import router from '/src/routes/router.js';
import { PORT } from '/src/configs/environments.js';
import connectDB from '/src/configs/mongo.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(router);

async function startServer() {
    const isConnected = await connectDB();
    if (isConnected) {
        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`);
        });
    } else {
        process.exit();
    }
}

startServer();