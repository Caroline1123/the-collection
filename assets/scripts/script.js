document.addEventListener("DOMContentLoaded", (event) => {
    
    function niceList(array, element) {
        for (item of array) {
            if (array.indexOf(item) != (array.length)-1) {
                element.innerHTML += `${item} `+ `&#8226; `;
                console.log(element.innerHTML);
            }
            else {
                element.innerHTML += `${item}`;
            }
        }
        return element.innerHTML;
    }
    
    // Adding title to the page
    document.title = "My Collection";
    // Creating variables for each existing page element
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    // Adding H1 to header
    const h1 = document.createElement("h1");
    h1.innerText = "Favourite Movies";
    header.appendChild(h1);

    const collection = [
        {
            id : 1,
            name: "The Prestige",
            director: "Christopher Nolan",
            released: 2006,
            mainCast: ["Christian Bale", "Hugh Jackman","Scarlett Johansson"],
            genres : ["Drama","Mystery","Sci-Fi"],
            imdbRating : 8.5,
            movieImg : "./assets/images/the_prestige.jpg", 
        },
        {
            id : 2,
            name: "Forrest Gump",
            director: "Robert Zemeckis",
            released: 1994 ,
            mainCast: ["Tom Hanks", "RobinWright", "Gary Sinise"],
            genres : ["Drama", "Romance"],
            imdbRating : 8.8,
            movieImg : "./assets/images/forrest_gump.jpg", 
        },
        {
            id : 3,
            name: "Dune: Part Two",
            director: "Denis Villeneuve",
            released: 2024 ,
            mainCast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
            genres : ["Action", "Adventure", "Drama"],
            imdbRating : 8.7,
            movieImg : "./assets/images/dune2.jpg", 
        },
        {
            id : 4,
            name: "The Shawshank Redemption",
            director: "Frank Darabont",
            released:1994 ,
            mainCast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            genres : ["Drama"],
            imdbRating : 9.3,
            movieImg : "./assets/images/shawshank_redemption.jpg", 
        },
        {
            id : 5,
            name: "Schindler's List",
            director: "Steven Spielberg",
            released:1993,
            mainCast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
            genres : ["Biography", "Drama", "History"],
            imdbRating : 9.0,
            movieImg : "./assets/images/schindlers_list.jpg", 
        },
        {
            id : 6,
            name: "The Lord of the Rings: The Fellowship of the Ring",
            director: "Peter Jackson",
            released: 2001,
            mainCast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
            genres : ["Action", "Adventure", "Drama"],
            imdbRating : 8.9,
            movieImg : "./assets/images/LOTR.jpg", 
        },
        {
            id : 7,
            name: "Gladiator",
            director: "Ridley Scott",
            released: 2000,
            mainCast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
            genres : ["Action", "Adventure", "Drama"],
            imdbRating : 8.5,
            movieImg : "./assets/images/gladiator.jpg", 
        },
        {
            id : 8,
            name: "Braveheart",
            director: "Mel Gibson",
            released: 1995,
            mainCast: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
            genres : ["Biography", "Drama", "War"],
            imdbRating : 8.3,
            movieImg : "./assets/images/braveheart.jpg", 
        },
        {
            id : 9,
            name: "Shaun of the Dead",
            director: "Edgar Wright",
            released: 2004,
            mainCast: ["Simon Pegg", "Nick Frost", "Kate Ashfield"],
            genres : ["Comedy", "Horror"],
            imdbRating : 7.9,
            movieImg : "./assets/images/shaun_of_the_dead.jpg", 
        },
        {
            id : 10,
            name: "Seven",
            director: "David Fincher",
            released: 1995,
            mainCast: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
            genres : ["Drama", "Crime", "Mystery"],
            imdbRating : 8.6,
            movieImg : "./assets/images/Seven.jpg", 
        }
    ]
    // Adding divs to main
    for (movie of collection) {
        // Creates a div for the movie
        const div = document.createElement("div");
        div.classList.add("movie");
        // Adds background image
        div.style.backgroundImage = `url(${movie["movieImg"]})`;
        // // Adds div to page
        main.appendChild(div);
        
        // Add div for movie info 
        const content = document.createElement("div");
        content.classList.add("content");
        div.appendChild(content);

        // Creates elements for movie card content
        // title + year and contents
        const title = document.createElement("h2");
        title.innerText = `${movie["name"]}, `;
        const year = document.createElement("strong");
        year.innerText = movie["released"];
        title.appendChild(year);
        // Director
        const director = document.createElement("p");
        director.classList.add("director");
        director.innerText = `by ${movie["director"]}`;
        // Ratings 
        const rating = document.createElement("div");
        rating.classList.add("rating");
        const total = document.createElement("strong");
        total.innerText = " / 10"
        rating.innerHTML = `&#9733;`+` ${movie["imdbRating"] }`
        rating.appendChild(total);

        const cast = document.createElement("p");
        cast.classList.add("cast");
        cast.innerHTML = `<strong> &#9733; Starring &#9733;</strong>`;
        cast.innerHTML = niceList(movie["mainCast"], cast);
        const genres = document.createElement("p");
        genres.classList.add("genres");
        genres.innerHTML = niceList(movie["genres"], genres);

        // Adds content to elements
        content.appendChild(title);
        content.appendChild(director);
        content.appendChild(rating);
        content.appendChild(cast);
        content.appendChild(genres);
    }

})