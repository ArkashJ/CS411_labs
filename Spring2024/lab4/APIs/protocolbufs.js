// https://medium.com/@dinghan1995/unleashing-the-power-of-grpc-advantages-over-rest-for-microservices-with-fastapi-af1b2a82bad0
//  why protobufs and grpcs 

const axios = require("axios");
const express = require("express");
const protobuf = require("protobufjs");

const app = express();

run().catch((err) => console.log(err));

async function run() {
  const root = await protobuf.load("user.proto");

  const doc = { name: "Bill", age: 30 };
  const User = root.lookupType("userpackage.User");

  app.get("/user", function (req, res) {
    res.send(User.encode(doc).finish());
  });

  app.post("/user", express.text({ type: "*/*" }), function (req, res) {
    // Assume `req.body` contains the protobuf as a utf8-encoded string
    const user = User.decode(Buffer.from(req.body));
    Object.assign(doc, user);
    res.end();
  });

  await app.listen(3000);

  let data = await axios
    .get("http://localhost:3000/user")
    .then((res) => res.data);

  // "Before POST User { name: 'Bill', age: 30 }"
  console.log("Before POST", User.decode(Buffer.from(data)));
  const postBody = User.encode({ name: "Joe", age: 27 }).finish();
  await axios
    .post("http://localhost:3000/user", postBody)
    .then((res) => res.data);

  data = await axios.get("http://localhost:3000/user").then((res) => res.data);
  // "After POST User { name: 'Joe', age: 27 }"
  console.log("After POST", User.decode(Buffer.from(data)));
}
