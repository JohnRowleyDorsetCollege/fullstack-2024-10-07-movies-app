$(function () {


    init();

})

function init() {
    console.log('jquery goodness has loaded');
    SetUpMovieLoader();

}

function SetUpMovieLoader() {

    // $('#btnLoadMovies').on('click', function () {})
    $('#btnLoadMovies').on('click', function () {

        console.log('loading movie button clicked');
        // const URL_MOVIES = './data/movies.json';
        const URL_MOVIES = ' https://localhost:7286/api/Movie';



        $.getJSON(URL_MOVIES, function (moviedata) {

            console.log(moviedata);
            let foundMovie = FindMovieById(107, moviedata);
            console.log(foundMovie);
            let listOfDirectors = GetListOfDirectors(moviedata);
            console.log(listOfDirectors.join('-'));
            RenderMovieDataAsTable(moviedata)

        })
        // no code here as above call is async 
    });
}

function RenderMovieDataAsTable(moviedata) {

    console.log(moviedata);
    console.log("===============")
    console.log({ moviedata })

    htmlString = [];


    for (const movie of moviedata) {

        // object destructuring
        const { title, year, director, id, cast, ...rest } = movie;

        console.log(title)

        htmlString.push('<tr>')

        htmlString.push(`<td>${title}</td><td>${year}</td><td>${director}</td>`)


        // htmlString.push('<td>')
        // htmlString.push(title)
        // htmlString.push('</td>')


        // htmlString.push('<td>')
        // htmlString.push(year)
        // htmlString.push('</td>')


        // htmlString.push('<td>')
        // htmlString.push(director)
        // htmlString.push('</td>')

        htmlString.push('</tr>')

    }


    $('#movieBody').append(htmlString.join(""));



}

// Basic use of For to search for an item
function FindMovieById_Using_For_Loop(id, listOfMovies) {

    //return "Not implemented";

    let movie = {};

    for (i = 0; i < listOfMovies.length; i++) {
        if (listOfMovies[i].id === id) {

            movie = listOfMovies[i];
            break; // since we found it, no need to continue with loop
        }
    }
    return movie;

}
//using for - of loop 
function FindMovieById_For_Of(id, listOfMovies) {

    //return "Not implemented";

    let movie = {};
    for (const currentMovie of listOfMovies) {

        if (currentMovie.id === id) {

            movie = currentMovie;
            break; // since we found it, no need to continue with loop

        }
    }
    return movie;
}

function FindMovieById(id, listOfMovies) {

    // let foundMovie = listOfMovies.find(function (currentMovie) { 
    //     return currentMovie.id === id 
    // });

    // return foundMovie;

    return listOfMovies.find(currentMovie => currentMovie.id === id);


}

function GetListOfDirectors_1(listOfMovies) {

    let directors = [];
    for (const currentMovie of listOfMovies) {

        // console.log(currentMovie.director);

        directors.push(currentMovie.director)
    }

    return directors;

}

function GetListOfDirectors(listOfMovies) {

    // let directors = listOfMovies.map(function (currentMovie) {

    //     return currentMovie.director
    // })


    // return directors;


    return listOfMovies.map(currentMovie => currentMovie.director)

}