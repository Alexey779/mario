const  GAME_NODE = document.querySelector('#game-board');
const VICTORY_TEXT = document.querySelector('#victory-message');
const START_GAME_BUTTON = document.querySelector('#new-game-button');

const VISIBLE_CARD = 'visible';
const CARD_OPEN_TIMEOUT = 500;

const CARD_ELEMENT = ["🍓", "🍉", "🍌", "🍏", "🥝", "🍇"];

const CARD_COUNT = 12;

let VISIBLE_OVER = [];

START_GAME_BUTTON.addEventListener('click', startGame);
// для начало новой игры
function startGame( ){
[GAME_NODE, VICTORY_TEXT ].forEach((node) => (node.innerHTML = ''));

const CARD_VALUE = generatorArray(CARD_ELEMENT, CARD_COUNT);
console.log(CARD_VALUE);
CARD_VALUE.forEach(renderCard);

const rendersCard = document.querySelectorAll('.card');

rendersCard.forEach(card => card.classList.add(VISIBLE_CARD));

setTimeout(()=>{
    rendersCard.forEach(card => card.classList.remove(VISIBLE_CARD));  
}, 1000);
}

function generatorArray(emojes, cardAmount){
const randomArray = [];
const elementCount = {};

for(const emoji of  emojes){
    elementCount[emoji] = 0;
}
while(randomArray.length < cardAmount) {
    const randomIndex = Math.floor(Math.random() * emojes.length);
    const randomElement = emojes[randomIndex];

    if (elementCount[randomElement] < 2) {
        randomArray.push(randomElement);
        elementCount[randomElement]++;

    }
    
}

return randomArray;


}
function renderCard(emoji){
const card = document.createElement('div');
card.classList.add('card');

const cardInner = document.createElement('div')
cardInner.classList.add('card-inner');

const cardFront = document.createElement('div');
cardFront.classList.add('card-front');

const cardBack = document.createElement('div');
cardBack.classList.add('card-back');

cardFront.textContent = '?';
cardBack.textContent = emoji;

cardInner.appendChild(cardFront);
cardInner.appendChild(cardBack);

card.appendChild(cardInner);
GAME_NODE.appendChild(card);

card.addEventListener('click', () =>{
    handleCardClick(card);
})
}
function handleCardClick(card){
    if(card.classList.contains(VISIBLE_CARD)){
        return;
    }

const checkVictory = ()=>{
    const visibleCardNode = document.querySelectorAll('.visible');
const isVictory = visibleCardNode.length === CARD_COUNT;
const victoriMessage = 'Поздравляю, вы выиграли!';

if(isVictory){
    VICTORY_TEXT.textContent = victoriMessage;
}

}

card.querySelector('.card-inner').addEventListener('transitionend', checkVictory);

card.classList.add(VISIBLE_CARD);

VISIBLE_OVER.push(card);
if(VISIBLE_OVER.length % 2 !== 0){
    return;
}
const  [overCard, lasrCard]  = VISIBLE_OVER.slice(-2);


if(overCard.textContent !== lasrCard.textContent){
    VISIBLE_OVER = VISIBLE_OVER.slice(0, VISIBLE_OVER.length - 2);

setTimeout(() =>{
     overCard.classList.remove('visible');
    lasrCard.classList.remove('visible');
}, 500);

   
}
}
startGame();


