document.addEventListener("DOMContentLoaded", (event) => {
    
    // Transforms an array into a string with bullet point separators
    function niceList(array, element) {
        for (item of array) {
            if (array.indexOf(item) != (array.length)-1) {
                element.innerHTML += ` ${item} `+ `&#8226;`;
            }
            else {
                element.innerHTML += ` ${item}`;
            }
        }
        return element.innerHTML;
    }

    // Adding title to the page
    document.title = "My Collection";
    // Creating variables for each existing page element
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    // Adding H1 to header
    const h1 = document.createElement("h1");
    h1.innerHTML = "<span>F</span>avourite <span>M</span>ovies";
    header.appendChild(h1);

    const collection =
    [
        {
            id : 0,
            name: "The Prestige",
            director: "Christopher Nolan",
            released: 2006,
            mainCast: ["Christian Bale", "Hugh Jackman","Scarlett Johansson"],
            genres : ["Drama","Mystery","Sci-Fi"],
            imdbRating : 8.5,
            movieImg : "./assets/images/the_prestige.jpg", 
        },
        {
            id : 1,
            name: "Forrest Gump",
            director: "Robert Zemeckis",
            released: 1994 ,
            mainCast: ["Tom Hanks", "RobinWright", "Gary Sinise"],
            genres : ["Drama", "Romance"],
            imdbRating : 8.8,
            movieImg : "./assets/images/forrest_gump.jpg", 
        },
        {
            id : 2,
            name: "Dune: Part Two",
            director: "Denis Villeneuve",
            released: 2024 ,
            mainCast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
            genres : ["Action", "Adventure", "Drama"],
            imdbRating : 8.7,
            movieImg : "./assets/images/dune2.jpg", 
        },
        {
            id : 3,
            name: "The Shawshank Redemption",
            director: "Frank Darabont",
            released:1994 ,
            mainCast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            genres : ["Drama"],
            imdbRating : 9.3,
            movieImg : "./assets/images/shawshank_redemption.jpg", 
        },
        {
            id : 4,
            name: "Schindler's List",
            director: "Steven Spielberg",
            released:1993,
            mainCast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
            genres : ["Biography", "Drama", "History"],
            imdbRating : 9.0,
            movieImg : "./assets/images/schindlers_list.jpg", 
        },
        {
            id : 5,
            name: "The Lord of the Rings: The Fellowship of the Ring",
            director: "Peter Jackson",
            released: 2001,
            mainCast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
            genres : ["Action", "Adventure", "Drama"],
            imdbRating : 8.9,
            movieImg : "./assets/images/LOTR.jpg", 
        },
        {
            id : 6,
            name: "Gladiator",
            director: "Ridley Scott",
            released: 2000,
            mainCast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
            genres : ["Action", "Adventure", "Drama"],
            imdbRating : 8.5,
            movieImg : "./assets/images/gladiator.jpg", 
        },
        {
            id : 7,
            name: "Braveheart",
            director: "Mel Gibson",
            released: 1995,
            mainCast: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
            genres : ["Biography", "Drama", "War"],
            imdbRating : 8.3,
            movieImg : "./assets/images/braveheart.jpg", 
        },
        {
            id : 8,
            name: "Shutter Island",
            director: "Martin Scorsese",
            released: 2010,
            mainCast: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo"],
            genres : ["Drama", "Mystery", "Thriller"],
            imdbRating : 8.2,
            movieImg : "./assets/images/shutter_island.jpg", 
        },
        {
            id : 9,
            name: "Seven",
            director: "David Fincher",
            released: 1995,
            mainCast: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
            genres: ["Drama", "Crime", "Mystery"],
            imdbRating: 8.6,
            movieImg: "./assets/images/Seven.jpg", 
        },
        {
            id: 10,
            name: "The Shining",
            director: "Stanley Kubrick",
            released: 1980,
            mainCast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
            genres: ["Drama", "Horror"],
            imdbRating: 8.4,
            movieImg: "./assets/images/the_shining.jpg",
        }
    ]

    // Adding divs to main
    for (movie of collection) {
        // Creates a div for the movie card
        const div = document.createElement("div");
        div.classList.add("movie");
        // Adds background image
        div.style.backgroundImage = `url(${movie["movieImg"]})`;
        // Adds the card to the webpage
        main.appendChild(div);
        
        // Add div to contain movie info 
        const content = document.createElement("div");
        content.classList.add("content");
        div.appendChild(content);

        // Creates elements for movie card content
        // title + year and contents
        const title = document.createElement("h2");
        title.innerHTML = `${movie["name"]}, <strong>${movie["released"]}</strong>`;
        // Director
        const director = document.createElement("p");
        director.classList.add("director");
        director.innerText = `by ${movie["director"]}`;
        // Ratings 
        const rating = document.createElement("div");
        rating.classList.add("rating");
        rating.innerHTML = `&#9733;`+` ${movie["imdbRating"]} <strong>/10</strong>`
        //cast
        const cast = document.createElement("p");
        cast.classList.add("cast");
        cast.innerHTML = `<strong> &#9733; Starring &#9733;</strong>`;
        cast.innerHTML = niceList(movie["mainCast"], cast);
        //movie genres
        const genres = document.createElement("p");
        genres.classList.add("genres");
        genres.innerHTML = niceList(movie["genres"], genres);
        //Remove button 
        const button = document.createElement("p");
        button.classList.add("button", `${movie["id"]}`);
        button.innerText = "remove";
        // Adds event listener to button 
        button.addEventListener("click", (event) => {
            const removedCardWidth = div.offsetWidth;
            console.log(removedCardWidth);
            div.style.animationPlayState = 'running';
            div.addEventListener('animationend', () => {
                div.style.display = 'none';
                // Adjust the position of the remaining cards
                const cards = document.querySelectorAll('.card');
                cards.forEach(card => {
                    if (card !== div) {
                        card.style.transform = `translateX(-${removedCardWidth}px)`;
                    }
                });
            });
        });

        // Adds content to elements
        content.appendChild(title);
        content.appendChild(director);
        content.appendChild(rating);
        content.appendChild(cast);
        content.appendChild(genres);
        div.appendChild(button);
    }

})