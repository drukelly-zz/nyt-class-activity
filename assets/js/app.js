// JS
document.addEventListener("DOMContentLoaded", () => {
    var APIKey = "nc3aNjnbcERvcFVo3she1akOWwwDozCF"
    var searchTerm;
    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${APIKey}`;

    if (window.fetch) {
        fetch(queryURL, {
            method:"GET"
        })
        .then(result => result.json())
        .then()
    }
    
    
});
