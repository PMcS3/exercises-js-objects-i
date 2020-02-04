let process = require('process');
// There are many facts about a user we might want to keep track of,
// but we want to be able to treat a user as a single value.
// That means the user has to be some kind of collection.

// Here's one way we might do it using an array.

let user = {};

user['firstName'] = 'Christo';
user['lastName'] = 'Sullivan';
user['currentLocation'] = 'Ann Arbor, MI';
user['favoriteSongs'] = ['Finish Line', 'Follow God', 'Sweet Caroline'];
user['favoriteMovies'] = ['The Departed', 'Forrest Gump', 'Good Will Hunting'];
user['age'] = 20;
user['Favorite Food'] = 'Pizza'

// To get started, set user['canBeDisplayed'] to true instead of false
user['canBeDisplayed'] = true;

if (user['canBeDisplayed'] === false) {
  console.log('Hey! Open up printUserInfo.js to get started.');
  process.exit();
}


console.log(`Hello, ${user['firstName']} ${user['lastName']}.`);
console.log();

console.log(`How's the weather in ${user['currentLocation']}?`);
console.log();

if (user['age'] >= 100) {
  console.log(`Wow! You're ${user['age']} years old? Fewer than 0.2% reach that age.`);
  console.log();
}

if (user['Favorite Food'] === 'Pizza')
{
  console.log(`Ah ${user['Favorite Food']}, One Bite, Everyone knows the rules!`);
  console.log();
}
else if (user['Favorite Foods'] === 'Chicken')
{
  console.log(`I see your favorite food is ${user['Favorite Food']} - cant go wrong with some pollo`);
  console.log();
}
else
{
  console.log(`Yes! I love ${user['Favorite Food']}!`);
  console.log();
}
 
console.log('Looks like you have great taste in music. Your favorite songs:');

for (let i = 0; i < user['favoriteSongs'].length; i += 1) {
  let songPosition = i + 1;
  let songName = user['favoriteSongs'][i];

  console.log(`${songPosition}. ${songName}`);
}

console.log('Looks like you have great taste in movies. Your favorite movies:');

for (let i = 0; i < user['favoriteMovies'].length; i += 1) {
  let moviePosition = i + 1;
  let movieName = user['favoriteMovies'][i];

  console.log(`${moviePosition}. ${movieName}`);
}

function printFavorites(dict)
{
  //let bookMovies = dict['favoriteMovies'] + dict['favoriteSongs'];
  let finalList = [];
  let movies = dict['favoriteMovies'];
  let music = dict['favoriteSongs'];
  let favorites = movies.concat(music);
  while(finalList.length < 6) 
  {
    for(i=0;i<favorites.length;i++)
    {
     let num = i+1;
    finalList.push(num + '. ' + favorites[i]);
    }
  }
  console.log('Your favorite media:');
  return finalList;
}

if (require.main === module)
{
  console.log(printFavorites(user));
}

//module.exports = printUserInfo.js;