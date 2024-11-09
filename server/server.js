const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const express = require("express");
const app = express();


async function run() {
  const uri = "mongodb+srv://spice:spice@spicedb.7scmb.mongodb.net/?retryWrites=true&w=majority&appName=spiceDB";
  const client = new MongoClient(uri);

  const ObjectId = require('mongodb').ObjectId;

  await client.connect();

  const dbName = "Users";
  const collectionName = "Info";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);


  app.get('/', (req, res) => {
    res.send('server is running')
  })

  app.listen(port, ()=> {
    console.log('ser')
  })

  /*
   *  *** INSERT DOCUMENTS ***
   *
   * You can insert individual documents using collection.insert().
   * In this example, we're going to create four documents and then
   * insert them all in one call with collection.insertMany().
   */


  const user = [
    {
      name: "Veeren Patel",
      email: "vpate075@uottawa.ca",
      password: "spice123",
      address: [
        "123 Ottawa St",
        "Ottawa",
        "Ontario",
        "K** ***",
      ],
      productID: 29133,
      recipes: [
        [
            "Chicken Soup",
            "1/8 tsp blackpepper",
            "1/4 tsp salt",
            "1/2 tsp oregano",
        ],
        [
            "Chicken Pasta",
            "3/4 tps salt",
            "1/4 tps blackpepper",
            "1 tps italian seasoning",
        ],
      ],
      notificationLogs: [
        "Hatch left open at 13:38",
        "salt below 40%",
      ]
    },
  ];

  try {
    const insertManyResult = await collection.insertMany(user);
    console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
  } catch (err) {
    console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
  }

  /*
   * *** FIND DOCUMENTS ***
   *
   * Now that we have data in Atlas, we can read it. To retrieve all of
   * the data in a collection, we call Find() with an empty filter.
   * The Builders class is very helpful when building complex
   * filters, and is used here to show its most basic use.
   */

  const findQuery = { name: "Veer Pat" };

  try {
    const cursor = await collection.find(findQuery);
    await cursor.forEach(user => {
      console.log(`${user._id}`);
    });
    // add a linebreak
    console.log();
  } catch (err) {
    console.error(`Something went wrong trying to find the documents: ${err}\n`);
  }

  // We can also find a single document. Let's find the first document
  // that has the string "potato" in the ingredients list.
  const findOneQuery = {name: "Veeren Patel"};

  try {
    const findOneResult = await collection.findOne(findOneQuery);
    if (findOneResult === null) {
      console.log("Couldn't find any recipes that contain 'potato' as an ingredient.\n");
    } else {
      console.log(`Found a recipe with 'potato' as an ingredient:\n${JSON.stringify(findOneResult)}\n`);
    }
  } catch (err) {
    console.error(`Something went wrong trying to find one document: ${err}\n`);
  }

  /*
   * *** UPDATE A DOCUMENT ***
   *
   * You can update a single document or multiple documents in a single call.
   *
   * Here we update the PrepTimeInMinutes value on the document we
   * just found.
   */
  const updateDoc = { $set: { productID: null } };

  // The following updateOptions document specifies that we want the *updated*
  // document to be returned. By default, we get the document as it was *before*
  // the update.
  const updateOptions = { returnOriginal: false };

  try {
    const updateResult = await collection.findOneAndUpdate(
      findOneQuery,
      updateDoc,
      updateOptions,
    );
    console.log(`Here is the updated document:\n${JSON.stringify(updateResult.value)}\n`);
  } catch (err) {
    console.error(`Something went wrong trying to update one document: ${err}\n`);
  }

  /*      *** DELETE DOCUMENTS ***
   *
   *      As with other CRUD methods, you can delete a single document
   *      or all documents that match a specified filter. To delete all
   *      of the documents in a collection, pass an empty filter to
   *      the DeleteMany() method. In this example, we'll delete two of
   *      the recipes.
   */


  const deleteQuery = { name: { $in: ["elotes", "fried rice"] } };
  try {
    const deleteResult = await collection.deleteMany(deleteQuery);
    console.log(`Deleted ${deleteResult.deletedCount} documents\n`);
  } catch (err) {
    console.error(`Something went wrong trying to delete documents: ${err}\n`);
  }

  // Make sure to call close() on your client to perform cleanup operations
  await client.close();
}
run().catch(console.dir);
