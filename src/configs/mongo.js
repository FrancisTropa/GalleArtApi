import mongoose from "mongoose";
import { MONGO_URI } from "./environments.js"

export default function connectDB() {
    return mongoose.connect(MONGO_URI).then((success) => {
        console.log("Mongo connected successfully");
        return true;
    }).catch((error) => {
        console.log(`MongoDB not connected. Error: ${error}`);
        return false;
    })
}