'use strict';

const createArticles = articles => {
    const main = document.getElementById('main');
    //Append card to DOM
    //document.getElementById('main').appendChild(article)
    let i = 0;
    let row = getNewRow();

    articles.forEach(a => {
        if(i%3){
            row.appendChild(getArticleDiv(a));
        }else{
            main.appendChild(row);
            row = getNewRow();
            row.appendChild(getArticleDiv(a))
        }
        i++;
    })

    main.appendChild(row);   

}

const getNewRow = () => {
    const row = document.createElement('div');
    row.classList = 'row justify-content-center card-group';
    return row;
}

const getArticleDiv = a => {

    const hl =  a.headline.main;
    const snippet = a.snippet;
    const url = a.web_url;
    let imgURL = '';

    try{
        imgURL =  a.multimedia.filter(img => img.subtype == 'mediumThreeByTwo440')[0].url;
    }catch(err){
        console.log('Image not found');
    }
        
    //Create article card
    let article = document.createElement('article');
    article.classList = 'card m-3';  
   
    //Create headline
    let headline = document.createElement('h5');
    headline.classList = 'card-title';
    headline.innerText = hl;

    //Create text
    let p = document.createElement('p');
    p.classList = 'card-text';
    p.innerText= snippet;

    //Create anchor
    let link = document.createElement('a');
    link.setAttribute('target','_blank');
    link.innerText = 'Read Full Story';
    link.href = url;
    
    //Create card body
    let cardBody = document.createElement('main');
    cardBody.classList = 'card-body';
    cardBody.appendChild(headline);
    cardBody.appendChild(p);
    cardBody.appendChild(link);

    //Include image if there is one
    if(imgURL.length > 1){
        let cardImg = document.createElement('img');
        cardImg.classList = 'card-img-top img-fluid';
        cardImg.setAttribute('src', `http://www.nytimes.com/${imgURL}`);
        cardImg.setAttribute('alt','Story Image')
        article.appendChild(cardImg); 
    }
        
    article.appendChild(cardBody);

    return article;
}

if(sessionStorage.getItem('country')){
    getNYTSearch(sessionStorage.getItem('country'));
}else{
    getNYTSearch('tourism');
}