import mongoose from "mongoose";

export const connectDB = async()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`mongoDB connected: ${conn.connection.host}`)

    } catch (error) {
        console.log(`error connecting to mongodb: ${error.message}`)
        process.exit(1) //1 means failure, 0 means success. here- catch block so failure
        
    }

}

