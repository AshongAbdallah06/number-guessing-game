let guessButton = document.querySelector('.guess-button');
let message = document.querySelector('.message');
let playAgain = document.querySelector('.replay-message');
let inputElement = document.getElementById("input");

let inputNumber = Number(inputElement);
let trials = 3;




let randomNumber = Math.random();
function secretNumber() {
    if(randomNumber >= 0 && randomNumber < 1/10) {
        randomNumber = 1; 
    } else if(randomNumber >= 1/10 && randomNumber < 2/10) {
        randomNumber = 2;
    } else if(randomNumber >= 2/10 && randomNumber < 3/10) {
        randomNumber = 3;
    } else if(randomNumber >= 3/10 && randomNumber < 4/10) {
        randomNumber = 4;
    } else if(randomNumber >= 4/10 && randomNumber < 5/10) {
        randomNumber = 5;
    } else if(randomNumber >= 5/10 && randomNumber < 6/10) {
        randomNumber = 6;
    } else if(randomNumber >= 6/10 && randomNumber < 7/10) {
        randomNumber = 7;
    } else if(randomNumber >= 7/10 && randomNumber < 8/10) {
        randomNumber = 8;
    } else if(randomNumber >= 8/10 && randomNumber < 9/10) {
        randomNumber = 9;
    } else if(randomNumber >= 9/10 && randomNumber < 10/10) {
        randomNumber = 10;
    } 
    // console.log(randomNumber)
}
secretNumber();




function all() {
    if (/^\d+$/.test(inputElement.value)) {

    
        if (Number(inputElement.value) === randomNumber) {
            console.log('You Win')
            message.innerHTML = 'Congrats.. You win!';      
            playAgain.innerHTML = `<div class=replay-message>
                Do you want to play again?!</div>
                <div class="l">
                <a href="guessing-game.html">
                    <button class="yes-button">Yes</button>
                </a>
                <button class="no-button">No</button>
            </div>`

    
        } else {
            trials -= 1;

            let input = document.querySelector("input");
            
            message.innerHTML = `Oops.. You have ${trials} trial(s) left..!`;
            input.value = ''


            if (trials < 3) {
                secondHintContainer.innerHTML = '';
            } 
            
            if (trials < 2) {
                firstHintContainer.innerHTML = '';
            }

            if (trials < 1) {
                message.innerHTML = 'Sorry, You failed!'
                playAgain.innerHTML = `<div class=replay-message>
                    Do you want to play again?!</div>
                    <div class="l">
                    <a href="guessing-game.html">
                        <button class="yes-button">Yes</button>
                    </a>
                    <button class="no-button">No</button>
                </div>`
                document.querySelector('.answer').innerHTML = `Answer: ${randomNumber}`;
            } 

        }
        } else {
            message.innerHTML = 'No strings allowed..!';
        }

        let noButton = document.querySelector('.no-button');
        noButton.addEventListener('click', () => {
            playAgain.innerHTML = ''
        })
}


let hintsContainer = document.querySelector('.hints-container');

let firstHintContainer = document.querySelector('.hint-1-container');
let firstHintButton = document.querySelector('.hint-1-button');

firstHintButton.addEventListener('click', () => {
    firstHintContainer.innerHTML = '* The number is between 1 and 10.'

    setTimeout(() => {
        firstHintContainer.innerHTML = '';
    }, 2000);

})


let secondHintContainer = document.querySelector('.hint-2-container');
let secondHintButton = document.querySelector('.hint-2-button');

secondHintButton.addEventListener('click', () => {
    if (randomNumber % 2 === 1) {
        secondHintContainer.innerHTML = '* The number is an odd number.'
    } else {
        secondHintContainer.innerHTML = '* The number is an even number.'
    }

    setTimeout(() => {
        secondHintContainer.innerHTML = '';
    }, 2000);

})

let thirdHintContainer = document.querySelector('.hint-3-container');
let thirdHintButton = document.querySelector('.hint-3-button');

thirdHintButton.addEventListener('click', () => {
        thirdHintContainer.innerHTML = '* Use your head dumbass.'

    setTimeout(() => {
        thirdHintContainer.innerHTML = '';
    }, 2000);
})





guessButton.addEventListener('click', all)
inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        all();
    }
})