import express  from  "express"
import dotenv  from  "dotenv";
import { connectDB }  from "./config/db.js";

import productRoutes from "./routes/ProductRoute.js"

dotenv.config() // this scans the .env file for any data and makes it available universally

const app = express(); //initiates an express server
app.use(express.json()); // a middleware - it  enables us to use the json data in the body


//if any other custom port is present, we use that, otherwise the default :)
const OUR_PORT = process.env.PORT || 3000;   

console.log(process.env.MONGO_URI) //process.env fetches the URI data from the env file

app.use("/api/products", productRoutes)

app.listen(OUR_PORT, () => {
    connectDB();
    console.log("server started at port" + OUR_PORT)
});

// mongo cluster pwd - CxqysvuWVL6aAt4h
//mongo username - manishpokhrel313
//connection string - mongodb+srv://manishpokhrel313:<db_password>@cluster0.26morvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0