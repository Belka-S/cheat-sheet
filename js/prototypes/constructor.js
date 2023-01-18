// const newObj = { x: 2 };
// console.log(newObj.__proto__ === Object.prototype);

// Old syntax
function Album({ band, year, title, genre, tracks, rating } = {}) {
  this.band = band;
  this.year = year;
  this.title = title;
  this.genre = genre;
  this.tracks = tracks;
  this.rating = rating;
}
const violator = new Album({
  band: 'Depeche Mode',
  title: 'viOLator',
  year: 1990,
  genre: 'electronic',
  rating: 8,
  tracks: [
    'World In my eyes',
    'Sweetest Perfection',
    'Personal Jesus',
    'Halo',
    'Waiting FOR the night',
    'Enjoy the Silence',
    'Policy of Truth',
    'Blue Dress',
    'Clean',
  ],
});
Album.sourse = { sourse: 'torrent.tracker' };
Album.prototype.changeRating = function (newRating) {
  this.rating = newRating;
};
// console.dir(Album);
violator.changeRating(10);
// console.log('violator: ', violator);

// const qwe = Object.create(violator);
// qwe.changeRating(9);
// console.log('qwe: ', qwe);

// -----------------------------------------------------------------------------

// Modern syntax
class List {
  static sourse = 'torrent.tracker';
  static listInfo(object) {
    console.dir(object);
  }

  #quality = '1-st press';
  #info() {
    console.dir(`${this.band} ${this.year} "${this.title}"`);
  }

  constructor({ band, year, title, genre, tracks, rating } = {}) {
    this.band = band;
    this.year = year;
    this.title = title;
    this.genre = genre;
    this.tracks = tracks;
    this._rating = rating;
  }

  get quality() {
    console.log('quality:', this.#quality);
  }

  get info() {
    this.#info();
  }

  get rating() {
    console.log('rating: ', this._rating);
  }

  set rating(newRating) {
    console.log(`rating ${this._rating} to be set --> ${newRating}`);
    this._rating = newRating;
  }

  changeRating(newRating) {
    this._rating = newRating;
  }
}

const sofad = new List({
  band: 'Depeche Mode',
  title: 'Songs of Faith and Devotion',
  year: 1993,
  genre: 'rock',
  rating: 5,
  tracks: [
    'I Feel You',
    'Walking in My Shoes',
    'Condemnation',
    'Mercy in You',
    'Judas',
    'In Your Room',
    'Get Right with Me',
    'Interlude #4 (My Kingdom Comes)',
    'Rush',
    'One Caress',
    'Higher Love',
  ],
});

// console.dir(List);
// sofad.info;
// sofad.quality;
// List.listInfo(sofad);
// sofad.rating = 10;
// sofad.rating;
