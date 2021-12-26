const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

//Api

//Api config
const app = express();

//middleware
app.use(cors({ orgin: true }));
app.use(express.json());

//api routes
app.get("/customers/view", (request, response) => {
  response.status(200).send("Hello world");
});

app.post("/customers/add", async (request, response) => {
  response.status(200).send("Add customer api");
});

//listen commands
exports.api = functions.https.onRequest(app);
