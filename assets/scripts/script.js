document.addEventListener("DOMContentLoaded", (event) => {
    // Adding title to the page
    document.title = "My Collection";
    // Creating variables for each existing page element
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    // Adding H1 to header
    const h1 = document.createElement("h1");
    h1.innerHTML = "<span>F</span>avourite <span>M</span>ovies";
    header.appendChild(h1);
    
    // Transforms an array into a string with bullet point separators
    function niceList(array, element) {
        for (let item of array) {
            if (array.indexOf(item) != (array.length)-1) {
                element.innerHTML += ` ${item} `+ `&#8226;`;
            }
            else {
                element.innerHTML += ` ${item}`;
            }
        }
        return element.innerHTML;
    }

    // Creating function to create cards on the page
    function createCards(collection) {
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
        // title, year
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
            div.style.animationPlayState = 'running';
            div.addEventListener('animationend', () => {
                div.style.display = 'none';
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
    }

    fetch("./assets/movies.json")
        .then(res => res.json())
        .then(data => {
            createCards(data);
        })
    })