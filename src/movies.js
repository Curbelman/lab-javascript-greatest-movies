// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(film => film.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(film => film.director === 'Steven Spielberg' && film.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length){return 0};
    const scoredMovies = moviesArray.filter(film => film.score !== undefined);
    const totalScore = scoredMovies.reduce((acc,curVal) => acc + curVal.score, 0);
    const avgScore = totalScore/scoredMovies.length;
    return parseFloat(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(film => film.genre.includes ('Drama'));
    if (!dramaMovies.length){return 0};
    const dramaTotalScore = dramaMovies.reduce((accumulator,currentScore) => accumulator + currentScore.score,0);
    const dramaAvgScore =dramaTotalScore/dramaMovies.length;
    return parseFloat(dramaAvgScore.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const mappedArray = moviesArray.map(x => x);
    //mappedArray.sort(function (a,b){
//        if (a.year<b.year) return -1;
 //       if (a.year>b.year) return 1;
  //      if (a.year===b.year)
  //          return (sort ((a,b) => a.title.toLowerCase() - b.title.toLowerCase()));
  //  })
   return mappedArray.sort((a,b) => a.year - b.year);;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleArray = moviesArray.map(x => x.title);
    const orderedArray = titleArray.sort();
    return orderedArray.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
