import { MongoClient } from "mongodb";
import { Config } from "../config";

let uri = Config.mongo_db_url;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(uri, { useNewUrlParser: true });
  const db = await client.db(Config.db_name);

  cachedDb = db;
  return db;
}

export default connectToDatabase;
