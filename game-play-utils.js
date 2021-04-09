import { getUser, setUser } from './local-storage-utils.js';

export function applyUserChoice(userChoice, currentQuest){
    const user = getUser();
    user.hp += userChoice.hp;
    user.gold += userChoice.gold;

    const completedQuest = currentQuest.id;
    user.completed[completedQuest] = true;
    setUser(user);
}