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
}

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
}

Cinema.prototype.filterByGenre = function (genre) {
  const result = this.films.filter((film) => {
    return genre === film.genre; 
  });
return result;
}

Cinema.prototype.checkByYear = function (year) {
  let condition = false
  const result = this.films.find((film) => {
    return year === film.year;
  }); 
  if (result.length > 0) {
    condition = true
    return condition;
  }
  else {
    return false; 
  }
  
}

Cinema.prototype.checkByLength = function (length) {
  const result = this.films.filter((film) => {
    return 
  }
}


module.exports = Cinema;
