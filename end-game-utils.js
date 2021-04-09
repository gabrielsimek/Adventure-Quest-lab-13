// import questData from './quest-data.js';
import { getUser } from './local-storage-utils.js';

export function hasCompleted(user, quests) {
    let completedQuests = 0;
    for (let quest of quests){
        if (user.completed[quest.id])
            completedQuests += 1;
           
    }

    if (completedQuests === quests.length) {
        return true;
    }
}