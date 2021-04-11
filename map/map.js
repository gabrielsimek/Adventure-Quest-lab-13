import questData from '../quest-data.js';
import { hasCompleted } from '../end-game-utils.js';
import { getUser } from '../local-storage-utils.js';
// import { findById } from '../utils.js';
import { renderUserStats } from '../dom-render-utils.js';
import { createResultMessage } from '../result-message.js';





renderUserStats();


const mapEl = document.querySelector('.main-section');
const user = getUser();
const quests = questData;

//where exactly should i put this function?
if (hasCompleted(user, quests)){
    window.location.href = '../result';
}


for (let quest of questData){
    const linkEl = document.createElement('a');
    linkEl.href = `../quest/?id=${quest.id}`;
    linkEl.textContent = quest.title;
    if (user.completed[quest.id]){
        // linkEl.textContent = 'completed';
        linkEl.classList.add('completed');
        const spanEl = document.createElement('span');
        spanEl.innerHTML = ' &check;';
        linkEl.appendChild(spanEl);

    }
        


    
    mapEl.append(linkEl);

}


//test field
// createResultMessage(user);
