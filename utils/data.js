const usernames = [
  "KittenLover112",
  "ARSmith",
  "vo1dfru1t",
  "hauntingask",
  "experienceamphora",
  "covenproceed",
  "shannonprayer",
  "jetpartial",
  "enchantshortcake",
  "savorslimy",
  "boomerangwhy",
  "jodhpursprocessionary",
];

const thoughts = [];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () => `${getRandomArrItem(usernames)}`;

for (let i = 0; i < 20; i++) {
  const thought = {
    username: getRandomUser(),
    thoughtText: `This is thought ${i + 1}`,
    createdAt: new Date(),
  };
  thoughts.push(thought);
}

module.exports = { thoughts, usernames };
