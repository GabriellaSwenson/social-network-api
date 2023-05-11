const connection = require("../config/connection");
const { Thoughts, Users } = require("../models");
const { getRandomUser, getRandomThought } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await Thoughts.deleteMany({});

  await Users.deleteMany({});

  const usersArr = [];

  for (let i = 0; i < 20; i++) {
    const users = getRandomUser();
    const thoughts = getRandomThought();

    usersArr.push({
      users,
      thoughts,
    });
  }

  await Users.collection.insertMany(usersArr);

  await Thoughts.collection.insertOne({
    users: [...usersArr],
  });

  console.table(usersArr);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
