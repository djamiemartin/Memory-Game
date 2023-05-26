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
            img: 'pics/strawberries.jpg'
        },
        {
            name: 'watermelon',
            img: 'pics/strawberries.jpg'
        }
    ]
const grid = document.querySelector('.grid');

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        let card = document.createElement('img');
        card.setAttribute('src')
    }
}

})