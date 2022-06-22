const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  const result = this.films.map((film) => {
    return film.title;
  });

  // let titles = [];
  // for (film of this.films) {
  //   titles.push(film);
  // }
  // return titles;

  return result;
};

Cinema.prototype.filterByTitle = function (title) {
  // let a;
  // for (film of this.films) {
  //   if (film.title == title) {
  //     a = film.title;
  //   }
  // }
  // return a;
  const result = this.films.find((film) => {
    return title === film.title;
  });
  return result;
};

Cinema.prototype.filterByGenre = function (genre) {
  const result = this.films.filter((film) => {
    return genre === film.genre;
  });
  return result;
};

Cinema.prototype.checkByYear = function (year) {
  return this.films.some((film) => film.year === year);
};

Cinema.prototype.checkByLength = function (length) {
  return this.films.every((film) => film.length > length);
};

Cinema.prototype.calculateTotalRunningTime = function () {
  return this.films.reduce((runningTime, film) => {
    return runningTime + film.length;
  }, 0);
};

module.exports = Cinema;
