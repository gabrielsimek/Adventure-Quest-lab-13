import questData from '../quest-data.js';
import { hasCompleted } from '../end-game-utils.js';
import { getUser, setUser } from '../local-storage-utils.js';
const mapEl = document.querySelector('.main-section');

for (let quest of questData){
    const linkEl = document.createElement('a');
    linkEl.href = `../quest/?id=${quest.id}`;
    linkEl.textContent = quest.title;
    mapEl.append(linkEl);

}

const user = getUser();

user.completed.questOne = true;
user.completed.questTwo = true;
user.completed.questThree = true;
// user.completed.questFour = true;
// setUser(user);
hasCompleted(user, questData);

