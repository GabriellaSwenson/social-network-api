const connection = require("../config/connection");
const { Thoughts, Users } = require("../models");
const { getRandomUser, getRandomThought } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await Thoughts.deleteMany({});

  await Users.deleteMany({});

  const users = [];

  for (let i = 0; i < 20; i++) {
    const thoughts = getRandomThought(20);

    const users = getRandomUser();
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    users.push({
      users,
      github,
      thoughts,
    });
  }

  await Users.collection.insertMany(users);

  await Thoughts.collection.insertOne({
    users: [...users],
  });

  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
