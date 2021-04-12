import { getUser, setUser } from './local-storage-utils.js';

export function applyUserChoice(userChoice, currentQuest){
    const user = getUser();
    user.hp += userChoice.hp;
    if (user.hp < 0) {
        user.hp = 0;
    }
    user.gold += userChoice.gold;

    const completedQuest = currentQuest.id;
    user.completed[completedQuest] = true;
    setUser(user);
}