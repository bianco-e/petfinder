import * as mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
};
const {
  NEXT_PUBLIC_MONGO_HOSTNAME,
  NEXT_PUBLIC_MONGO_DB,
  NEXT_PUBLIC_MONGO_USERNAME,
  NEXT_PUBLIC_MONGO_PASSWORD,
} = process.env;

const dbConnectionURL = {
  MongoAtlas: `mongodb+srv://${NEXT_PUBLIC_MONGO_USERNAME}:${NEXT_PUBLIC_MONGO_PASSWORD}@${NEXT_PUBLIC_MONGO_HOSTNAME}/${NEXT_PUBLIC_MONGO_DB}?retryWrites=true&w=majority`,
};
mongoose.connect(dbConnectionURL.MongoAtlas, options);
const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(
    console,
    "Mongodb Connection Error:" + dbConnectionURL.MongoAtlas
  )
);
db.once("open", () => console.log("Connected to Mongodb"));
