// const avenger = {
//   name: "Tony Stark",
//   house: "🏠",
//   networth: "💰💰💰💰",
//   power: "🤖",
//   phrase: "Happy Day",
// };

const {
  name,
  networth,
  power = "💿",
  skill = ["genius", "billionaire", "playboy", "philanthropist"],
} = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "Happy Day",
};

console.log(networth, power, skill);
//💰💰💰💰 🤖 (4) ['genius', 'billionaire', 'playboy', 'philanthropist']

const avg = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "Happy Day",
};

const avg1 = { ...avg, nation: "US", power: "💿" };
console.log(avg, avg1);

const avg2 = { nation: "US", power: "💿", ...avg };
console.log(avg2);

// nation: "US",
// name: "Tony Stark",
// house: "🏠",
// networth: "💰💰💰💰",
// power: "🤖",
// phrase: "Happy Day",

// {
//     name: "Tony Stark",
//     house: "🏠",
//     networth: "💰💰💰💰",
//     power: "💿",
//     phrase: "Happy Day",
//     nation: "US"
//   };
