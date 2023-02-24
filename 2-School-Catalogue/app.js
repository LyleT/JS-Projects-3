class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(value) {
    if (typeof(value) === 'number') {
    this._numberOfStudents = value;
    }
  }

  quickFacts() {
    console.log( `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randIndex];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
    
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;

class SchoolCatalog {
  constructor(name){
    this._name = name;
    this._school = [];
  }
  get school(){return this._school;}
  set school(school){
    this._school.push(school);
  }
}

// Instantiating SchoolCatalog class
const addSchool = new SchoolCatalog('Add School');
// console.log(newMediumSchool.school);
addSchool.school = 'Al E. Smith';
addSchool.school = 'All Saints School';
addSchool.school = 'Lorraine Hansbury';

// Print out all school names
console.log(addSchool.school);
