document.addEventListener("DOMContentLoaded", (event) => {

    function filterSelection(genre) {
        const cards = document.querySelectorAll(".movie");
        for (let card of cards) {
            card.style.display = " inline";
            if (genre === "all") {
                card.style.display = " inline";
            }
            else {
                const genres = card.querySelectorAll(".genres");
                for (let item of genres) {
                    item = [...item.classList];
                    if (!item.includes(genre)) {
                        card.style.display="none";
                    }
                }
            }
        }
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
    // Adds filter element
    const filterSelect = document.createElement("div");
    filterSelect.classList.add("filters");
    filterSelect.innerHTML = 
    `   <p>Filter by Movie Genre</p>
        <button class="active" data-genre='all'>Show all</button>
        <button data-genre='action'>Action</button>    
        <button data-genre='adventure'>Adventure</button>
        <button data-genre='biography'>Biography</button>    
        <button data-genre='crime'>Crime</button>    
        <button data-genre='drama'>Drama</button>
        <button data-genre='horror'>Horror</button>    
        <button data-genre='history'>History</button>    
        <button data-genre='mystery'>Mystery</button>    
        <button data-genre='romance'>Romance</button>
        <button data-genre='sci-fi'>Sci-Fi</button>    
        <button data-genre='thriller'>Thriller</button>    
        <button data-genre='war'>War</button>`;

    filterSelect.addEventListener("click", (event) => {
        const buttons = document.querySelectorAll("button");
        for (button of buttons) {
            button.classList.remove("active");
        }
        const genre = event.target.dataset.genre;
        if (event.target.tagName === "BUTTON") {
            event.target.classList.add("active");
            filterSelection(genre);
        }
    })

    header.appendChild(filterSelect);

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
        for (genre of movie["genres"]) {
            genres.classList.add(genre.toLowerCase());
        }
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
    // Retrieve movie info and create the cards using the createCards function
    fetch("./assets/movies.json")
        .then(res => res.json())
        .then(data => {
            createCards(data);
        })
    })