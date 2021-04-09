import questData from '../quest-data.js';
import { findById } from '../utils.js';

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

sectionEl.append(titleEl, imageEl, formEl);