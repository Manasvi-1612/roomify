import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

//mongoose cached connection
let cached = (global as any).mongoose || { conn: null, promise: null };


//SERVERLESS FUNCTIONS -> using server action and each will have to call connectToDatabase again and again if were not using cached connections ot makes new connection to the db each time ,,, by caching we can reuse the existing connection
export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error('Mongo URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'login',
        // bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}