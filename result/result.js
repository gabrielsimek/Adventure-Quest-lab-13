import { getUser } from '../local-storage-utils.js';
import { createResultMessage } from '../result-message.js';

const sectionEl = document.querySelector('.main-section');

const user = getUser();

const resultEl = document.createElement('div');

resultEl.textContent = createResultMessage(user);

sectionEl.appendChild(resultEl);