const { MongoClient } = require("mongodb");
const connectionString = process.env.MONGODB_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function(callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("personal_website");
      console.log("Successfully connected to MongoDB Atlas.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};

/* import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

if (!global.__db) {
  global.__db = new PrismaClient();
}
db = global.__db;

export { db }; */