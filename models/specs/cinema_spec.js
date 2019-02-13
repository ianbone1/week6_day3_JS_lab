const assert = require('assert');
const Film = require('../film.js');
const Cinema = require('../cinema.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];

    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    const actual = cinema.filmTitles()
    expected = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting']
    assert.deepStrictEqual(actual, expected);
  });


  it('should be able to find a film by title', function () {
    assert.strictEqual(dunkirk, cinema.findFilmByTitle('Dunkirk'));
  });

  it('should be able to filter films by genre', function () {
    assert.strictEqual(2, cinema.findFilmByGenre('drama').length);
  });

  it('should be able to check whether there are some films from a particular year', function () {
    assert.strictEqual(3, cinema.findFilmByYear(2017).length);
  });

  it('should be able to check whether there are no films from a particular year', function () {
    assert.strictEqual(0, cinema.findFilmByYear(2019).length);
  });

  it('should be able to check whether all films are over a particular length', function () {
    assert.strictEqual(4, cinema.findFilmByDuration(100).length);
  });

  it('should be able to calculate total running time of all films', function () {
    assert.strictEqual(622, cinema.totalDuration());
  });

  it('should be able to filter films by a property (genre)', function () {
    assert.strictEqual(1, cinema.filterByProperty('genre', 'action').length);
  });

  it('should be able to filter films by a property (title)', function () {
    assert.strictEqual(1, cinema.filterByProperty('title', 'Moonlight').length);
  });

  it('should be able to check there are films of a year (true)', function () {
    assert.strictEqual(true, cinema.checkYear(2016));
  });

  it('should be able to check there are films of a year (false)', function () {
    assert.strictEqual(false, cinema.checkYear(2019));
  });

  it('should be able to check if all films are over a length (true)', function () {
    assert.strictEqual(true, cinema.checkDuration(90));
  });

  it('should be able to check if all films are over a length (false)', function () {
    assert.strictEqual(false, cinema.checkDuration(170));
  });

});
