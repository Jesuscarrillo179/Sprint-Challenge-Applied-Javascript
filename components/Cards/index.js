// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response.data.articles);
    response.data.articles.javascript.forEach(obj => {
        document.querySelector(".cards-container").append(createCard(obj));
    });
    response.data.articles.bootstrap.forEach(obj => {
        document.querySelector(".cards-container").append(createCard(obj));
    });
    response.data.articles.technology.forEach(obj => {
        document.querySelector(".cards-container").append(createCard(obj));
    });
    response.data.articles.jquery.forEach(obj => {
        document.querySelector(".cards-container").append(createCard(obj));
    });
    response.data.articles.node.forEach(obj => {
        document.querySelector(".cards-container").append(createCard(obj));
    });
})



.catch(function(error) {
    console.error(error);
  });



function createCard(obj){
    //parent card
    const card = document.createElement('div');
    card.classList.add('card');

    //headline
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = obj.headline;

    //child card
    const author = document.createElement('div');
    author.classList.add('author');

    //img container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    //profile img
    const profileImg = document.createElement('img');
    profileImg.setAttribute('src', obj.authorPhoto);

    //authors name
    const authorsName = document.createElement('span');
    authorsName.textContent = "By " + obj.authorName;

    //structure
    card.append(headline, author);
    author.append(imgContainer, authorsName);
    imgContainer.append(profileImg);

    return card;
};