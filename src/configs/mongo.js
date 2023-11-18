import mongoose from "mongoose";
import { DATABASE } from "./environments.js"

export default function connectDB() {
    return mongoose.connect(DATABASE).then((success) => {
        console.log("Mongo connected successfully");
        return true;
    }).catch((error) => {
        console.log(`MongoDB not connected. Error: ${error}`);
        return false;
    })
}