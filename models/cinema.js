const Cinema = function(films){
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => film.title);
};

Cinema.prototype.findFilmByTitle = function (title) {
  return this.films.filter((film) => film.title === title)[0];
};

Cinema.prototype.findFilmByGenre = function (genre) {
  return this.films.filter((film) => film.genre === genre);
};

Cinema.prototype.findFilmByYear = function (year) {
  return this.films.filter((film) => film.year === year);
};

Cinema.prototype.findFilmByDuration = function (duration) {
  return this.films.filter((film) => film.duration >= duration);
};

Cinema.prototype.totalDuration = function () {
  return this.films.reduce(((total, film) => total += film.duration), 0);
};

Cinema.prototype.checkYear = function (year) {
  return this.findFilmByYear(year).length > 0 ? true : false;
};

Cinema.prototype.checkDuration = function (duration) {
  return this.findFilmByDuration(duration).length > 0 ? true : false;
};

Cinema.prototype.filterByProperty = function (property, value) {
  return this.films.filter((film) => film[property] === value);
};


module.exports = Cinema;
