import { getUser } from '../local-storage-utils.js';
import { createResultMessage } from '../result-message.js';
import { renderUserStats } from '../dom-render-utils.js';
renderUserStats();

const sectionEl = document.querySelector('.main-section');

const user = getUser();

const resultEl = document.createElement('div');

resultEl.textContent = createResultMessage(user);

const buttonEl = document.createElement('button');
buttonEl.textContent = 'Play Again';
buttonEl.addEventListener('click', () => {
    localStorage.removeItem('USER');
    window.location.href = '../'
});

sectionEl.append(resultEl, buttonEl);

