const names = [
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

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUser = () =>
  `${getRandomArrItem(users)} ${getRandomArrItem(users)}`;

// Function to generate random assignments that we can add to student object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtName: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThoughts };
