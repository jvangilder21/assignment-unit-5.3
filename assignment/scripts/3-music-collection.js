console.log('***** Music Collection *****')

/* - Create a variable `collection` that starts as an empty array. */

let collection = [];

/*
- Add a function named `addToCollection`. This function should:
  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
  - Create a new object having the above properties
  - Add the new object to the end of the `collection` array
  - Return the newly created object
*/

function addToCollection(title, artist, yearPublished){
    let album = {
        title: title,
        artist: artist, 
        yearPublished: yearPublished
    };
    collection.push(album);
    return album;
}
/*
- Test the `addToCollection` function:
  - Add 6 albums to your collection. Aim to have a mix of both same and different 
  artists and published years. (Feel free to share your musical interests, or make
     stuff up. Totally fine either way.)
  - Console.log each album as added using the returned value.
  - After all are added, console.log the `collection` array.
*/
let album1 = addToCollection('Hope', 'NF', 2023);
let album2 = addToCollection('The Search', 'NF', 2019);
let album3 = addToCollection("Hollywood's Bleeding", "Post Malone", 2019);
let album4 = addToCollection('OK Orchestra', 'AJR', 2021);
let album5 = addToCollection('WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 'Billie Eilish', 2019);
let album6 = addToCollection('Welcome Reality +','Nero', 2011);
console.log('Our list of albums:', collection);
console.table('Our table of albums:');
console.table(collection);

/*
- Add a function named `showCollection`. This function should:
  - Take in an array parameter. (This allows it to be reused to show any collection,
  like the results from the find or search.)
  - Console.log the number of items in the array.
  - Loop over the array and console.log each album's information formatted like:
   `TITLE by ARTIST, published in YEAR`.
*/

function showCollection(collectionArray){
  console.log('Number of albums in our collection array', collectionArray.length);
  for (let album of collectionArray){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}
//- Test the `showCollection` function.
showCollection(collection);

/* FIRST ATTEMPT:
function showCollection(collectionArray){
  console.log('Number of albums in our collection array', collectionArray.length);
  for (let i = 0; i < array.length; i++){
    console.log(array[i].title + ' by ' + array[i].artist + ', published in ' + array[i].yearPublished);
  }

}
//- Test the `showCollection` function.
showCollection(collection);
*/


/*
  - Add a function named `findByArtist`. This function should:
  - Take in `artist` (a string) parameter
  - Create an array to hold any results, empty to start
  - Loop through the `collection` and add any objects with a matching artist to the 
  array.
  - Return the array with the matching results. If no results are found, return an 
  empty array.

  - Test the `findByArtist` function. Make sure to test with an artist you know is 
in the collection, as well as an artist you know is not in your collection. 
Check that for artists with multiple matches, all are found.
*/
function findByArtist(artist) {
  let artistMatch = [];

  for (let album of collection) {
    if (album.artist === artist) {
      artistMatch.push(album);
    }// end if conditional
  }// end for loop
  return artistMatch;
}// end findByArtist


console.log('Albums found for artist NF:');
showCollection(findByArtist('NF'));

console.log('Albums found for artist Toto:');
showCollection(findByArtist('Toto'));


/*SECOND ATTEMPT
let foundArtist = [];

function findByArtist(artist){
  let myArtist = 'NF';
  for (let artist of collection){
    //console.log('artist log', artist);
    if ( myArtist === collection){
      foundArtist.push(myArtist);
      console.log('My artist was found!!', foundArtist);
    }else{
      return foundArtist;
      console.log('else found artist', foundArtist);
    } // end else
  } // end for loop
} // end findByArtist
console.log('check nf', findByArtist(collection));
*/

/*FIRST ATTEMPT
function findMyCollection(albumToCheck){
  let myAlbum = {
    title: 'Hope',
    artist: 'NF',
    yearPublished: 2023,
  }
  if(albumToCheck === myAlbum){
    console.log('MATCH!', title, 'by', artist + ', published in', yearPublished);
  }else{
    console.log('Not in collection');
  } //end else
} //end findMyCollection
showCollection(collection);
*/

/* 


### Stretch goals

- Create a function called `search`. This function should:
  - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
  ```
  { artist: 'Ray Charles', year: 1957 }
  ```
  - The returned output from `search` should meet these requirements:
    - Return a new array of all items in the `collection` matching *all* of the search criteria.
    - If no results are found, return an empty array.
    - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

- Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
  - Update the `addToCollection` function to also take an input parameter for the array of tracks.
  - Update `search` to allow a `trackName` search criteria. 
    - IF the search object has a `trackName` property, only search for that, ignoring any `artist` or `year` properties.
  - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
```
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
    3. NAME: DURATION
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
```

> Make sure to test all your code!


*/

