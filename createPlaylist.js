//Stored inside is information about a concert, including a list of bands and their scheduled songs.
//Using an object matching this format, we want for the createPlaylist function to return an array of song titles in the order they appear in the object.

const createPlaylist = function (concertObject) {
  const playList = [];
  for (const band of concertObject.bands) {
    for (const song of band.songs) {
      playList.push(song.title);
    }
  }
  return playList;
};


const concert = {
  name: "Rockin' Road Trip",
  location: "New York City",
  date: "July 4, 2023",
  bands: [
    {
      name: "The Rolling Stones",
      genre: "rock",
      songs: [
        {
          title: "Satisfaction",
          duration: 233
        },
        {
          title: "Gimme Shelter",
          duration: 272
        },
        {
          title: "Jumpin' Jack Flash",
          duration: 220
        }
      ]
    },
    {
      name: "The Black Keys",
      genre: "rock",
      songs: [
        {
          title: "Lonely Boy",
          duration: 204
        },
        {
          title: "Howlin' For You",
          duration: 210
        },
        {
          title: "Gold on the Ceiling",
          duration: 223
        }
      ]
    },
    {
      name: "Kendrick Lamar",
      genre: "hip-hop",
      songs: [
        {
          title: "HUMBLE.",
          duration: 177
        },
        {
          title: "DNA.",
          duration: 185
        },
        {
          title: "Alright",
          duration: 307
        }
      ]
    }
  ]
};


const playList = createPlaylist(concert);
console.log(playList);


//expected outputs;
// Outputs:
// [
//   "Satisfaction",
//   "Gimme Shelter",
//   "Jumpin' Jack Flash",
//   "Lonely Boy",
//   "Howlin' For You",
//   "Gold on the Ceiling",
//   "HUMBLE.",
//   "DNA.",
//   "Alright",
// ];