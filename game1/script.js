const emojes = ['🎩','💎','🧣','🍑','🍅',
    '🍎','🍎','🥝','🥝','🎩', '🧅','🧅','🧣','🥬','🥬','🥦','🥦','🍕','🍕',
    '🥪','🥪','🥯','🥯','🍗','🍗','🥩','🥩','🍦','🍦','🍫','🍫',
'🍰','🍰','🧁','💎','🧁','🍩','🍅','🍩','🍬','🍬','🍪','🍑','🍪','🥛','🥛','🧃','🧃',
'☕','☕','🧉','🧉','🍹','🍹','🍵','🍵','🍴','🍴','🍽','🍽','🏺','🏺','🐒','🐒','🐿','🐿','🐬','🐬']

let numberOfCard = 0;
function startGame() {
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);

    if (isOutFrinch(width, 4, 11)){
        alert('Ширина должна быть от 4 до 11');
        return;
    }
    if (isOutFrinch(height, 3, 6)){
        alert('Высота должна быть от 3 до 6');
        return;
    }

    
setupBoard(width, height);

const selectedEmoje = shuffelArray(emojes).slice(0, numberOfCard /2);
const duublEmoje = [...selectedEmoje, ...selectedEmoje];

if(numberOfCard % 2 === 0){
    duublEmoje.push('');

}

const gameEmoje = shuffelArray(duublEmoje); 

gameEmoje.forEach((emoji) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.emoji = emoji;

    const emojiElement = document.createElement('span');
    emojiElement.textContent = emoji;
    emojiElement.style.visibility = 'hidden';
    card.appendChild(emojiElement);

    card.addEventListener('click', ()=> flipCard(card, emojiElement));

    board.appendChild(card)
})


}

function flipCard( card, emojiElement){
card.classList.toggle('flipper');
emojiElement.style.visibility = 
emojiElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
}


function setupBoard(width,height){
      const board = document.getElementById('board');
      board.innerHTML = '';
      board.style.gridTemplateColumns = `repeat(${width}, 100px)`;
      board.style.gridTemplateColumns = `repeat(${height}, 100px)`;
    
      numberOfCard = width * height;
    }



function isOutFrinch(val, minVal, maxVal){
    return val < minVal || val > maxVal;
}
function shuffelArray(array){
    for(let i = array.lenght - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i]], array[j] = [array[j], array[i]];

    }
return array;
}
document.getElementById('start-button').addEventListener('click', startGame);