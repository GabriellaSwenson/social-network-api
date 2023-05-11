const usernames = [];

const thoughts = [
  "Cats are cool",
  "Tried a new cookie recipe",
  "The new Mario Movie was great",
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () => `${getRandomArrItem(usernames)}`;

const getRandomThought = () => `${getRandomArrItem(thoughts)}`;

for (let i = 0; i < 20; i++) {
  const thought = {
    username: getRandomUser(),
    thoughtText: `This is thought ${i + 1}`,
    createdAt: new Date(),
  };
  thoughts.push(thought);
}

module.exports = { thoughts, usernames, getRandomUser, getRandomThought };
