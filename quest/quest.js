import { hasDied } from '../end-game-utils.js';
import { getUser } from '../local-storage-utils.js';
import { applyUserChoice } from '../game-play-utils.js';
import questData from '../quest-data.js';
import { findById } from '../utils.js';
import { renderUserStats } from '../dom-render-utils.js';

renderUserStats();

const param = new URLSearchParams(window.location.search);

const questId = param.get('id');

const currentQuest = findById(questData, questId);

const sectionEl = document.querySelector('.main-section');
const titleEl = document.createElement('h1');
titleEl.textContent = currentQuest.title;

const imageEl = document.createElement('img');
imageEl.src = `../assets/quests/${currentQuest.image}`;


const formEl = document.createElement('form');
for (let choice of currentQuest.choices) {
    const labelEl = document.createElement('label');
    labelEl.textContent = choice.description;

    const inputEl = document.createElement('input');
    inputEl.type = 'radio';
    inputEl.name = 'potential-choice';
    inputEl.value = choice.id;
    

    labelEl.append(inputEl);
    formEl.append(labelEl);
}
//append in order 
const buttonEl = document.createElement('button');
buttonEl.textContent = 'Play';
formEl.append(buttonEl);
const resultEl = document.createElement('div');
sectionEl.append(titleEl, imageEl, formEl, resultEl);

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const selectedChoiceId = formData.get('potential-choice');
    
    //get 'choice' and value is returned...
    const userChoice = findById(currentQuest.choices, selectedChoiceId);
    
    resultEl.textContent = userChoice.result;
    applyUserChoice(userChoice, currentQuest);
    buttonEl.classList.add('hidden');
    const user = getUser();
    hasDied(user);
    setTimeout(() => {
        window.location.href = '../map';
    }, 5000);

});

