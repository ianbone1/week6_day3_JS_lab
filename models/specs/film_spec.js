const assert = require('assert');
const Film = require('../film.js');

describe('Film', function(){

  let film;

  beforeEach(function () {
    film = new Film('Goldeneye', 'Action', 1995, 130);
  });


  it('will have a title', function(){
    assert.strictEqual('Goldeneye', film.title);
  });

  it('will have a genre', function(){
    assert.strictEqual('Action', film.genre);
  });

  it('will have a year', function(){
    assert.strictEqual(1995, film.year);
  });

  it('will have a length', function(){
    assert.strictEqual(130, film.duration);
  });

})
