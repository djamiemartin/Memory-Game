document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'cat',
            img: 'pics/cats.jpg'
        },
        {
            name: 'cat',
            img: 'pics/cats.jpg'
        },
        {
            name: 'dog',
            img: 'pics/dogs.jpg'
        },
        {
            name: 'dog',
            img: 'pics/dogs.jpg'
        },
        {
            name: 'rainbow',
            img: 'pics/rainbow.jpg'
        },
        {
            name: 'rainbow',
            img: 'pics/rainbow.jpg'
        },
        {
            name: 'strawberry',
            img: 'pics/strawberries.jpg'
        },
        {
            name: 'strawberry',
            img: 'pics/strawberries.jpg'
        },
        {
            name: 'watermelon',
            img: 'pics/watermelons.jpg'
        },
        {
            name: 'watermelon',
            img: 'pics/watermelons.jpg'
        },
        {
            name: 'stars',
            img: 'pics/stars.jpg'
        },
        {
            name: 'stars',
            img: 'pics/stars.jpg'
        }
        
    ]
cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];


function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        let card = document.createElement('img');
        card.setAttribute('src', 'pics/background.jpg');
        card.setAttribute('data-id', i);

        card.addEventListener('click', flipcard);
        grid.appendChild(card);
    }
}
function checkForMatch(){
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'pics/white.jpg');
        cards[optionTwoId].setAttribute('src', 'pics/white.jpg');
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'pics/background.jpg');
        cards[optionTwoId].setAttribute('src', 'pics/background.jpg');
        alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congrats, you won!'
    }
}

function flipcard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}
createBoard();
})