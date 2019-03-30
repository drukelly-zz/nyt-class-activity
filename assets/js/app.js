// JS
var headline = document.createElement("h3").classList.add("articleHeadline");
var author = document.createElement("h5");
var articleWell = document.createElement("div").classList.add("well");
var container = document.querySelector(".container");
var searchTerm = document.querySelector("#search");
var phrase;


document.addEventListener("DOMContentLoaded", () => {

    var APIKey = "nc3aNjnbcERvcFVo3she1akOWwwDozCF"
    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${phrase}&api-key=${APIKey}`;

    if (window.fetch) {
        fetch(queryURL, {
            method: "GET"
        })
            .then(result => result.json())
            .then(response => {
                startSearch();
            })
    } else {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", queryURL);

        xhr.onload = (event) => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                    var parsed = JSON.parse(xhr.responseText);
                }
            }
        }
    }

    var startSearch = () => {
        phrase = searchTerm.value;
        headline.innerText = response.docs.headline.main;
        author.innerText = response.docs.byline.original;
        container.appendChild(headline);
        container.appendChild(author);
    }

    searchTerm.addEventListener("click", startSearch)
});
