let getCountryList = (country) =>{

    let url = `https://restcountries.eu/rest/v2/name/${country}`
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(country => {
            //console.log(country)
            appendOptions(country);
            return country;
        })
        .catch(err => {
            console.error(err);
        })
} 

let getNYTSearch = query => {

    //  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=news_desk:("Foreign")&sort=newest&api-key=ANooBjXPkbqFKXjf17VGwNqopneIappl`)
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=news_desk:("Foreign")&fq=headline('${query}')&sort=newest&api-key=ANooBjXPkbqFKXjf17VGwNqopneIappl`)
    .then(res => {
        return res.json();
    })
    .then(articles => {
       
        console.log(articles)
        createArticles(articles.response.docs)
        return articles;
    })
    .catch(err => {
        console.log(err);
    })
}