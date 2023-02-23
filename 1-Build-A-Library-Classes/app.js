class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
    /* using setter isCheckedOut, not property _isCheckedOut - do not use raw properties outside of getters and setters */
  }

  getAverageRating(ratings) {
    const ratingsSum = this.ratings.reduce((total, item) => total + item, 0);
    return (ratingsSum / this.ratings.length).toFixed(2);
  }

  addRating(value) {
    if (value >= 1 && value <= 5) {
      this.ratings.push(value);
    }
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title); // sets up title, isCheckedOut, ratings
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  /*shuffle() {
    this.songs.sort((a,b) => {
      return 0.5 - Math.random();
    })
  }; */

  shuffle(arr) {
    // Fisher-Yates Randomization Algorithm
    const shuffledArray = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * arr.length);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return shuffledArray;
    };
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const stateOfTrance = new CD("Armin Van Buuren", "State of Trance", [
  "first song",
  "second song",
  "third song",
  "fourth song",
  "fifth song",
]);
stateOfTrance.shuffle();
console.log(stateOfTrance.songs);

class Catalog {
  constructor(mediaList) {
    this._MyCatalog = [mediaList];
  }

  get mediaList() {
    return this._mediaList;
  }

  set mediaList(newMediaList) {
    this._MyCatalog.push(newMediaList);
  }
}

const newCatalog = new Catalog();
newCatalog.mediaList = historyOfEverything;
newCatalog.mediaList = speed;
newCatalog.medialist = stateOfTrance;
console.log(newCatalog);
