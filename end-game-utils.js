// import questData from './quest-data.js';
// import { getUser } from './local-storage-utils.js';

// export function hasCompleted(user, quests) {
//     let completedQuests = 0;
//     for (let quest of quests){
//         if (user.completed[quest.id])
//             completedQuests += 1;
           
//     }

//     if (completedQuests === quests.length) {
//         return true;
//     }
// }

export function hasCompleted(user, quests) {
    for (let quest of quests) {
        if (!user.completed[quest.id]){
            return false;
        }
    }
    return true;
}

export function hasDied(user) {
    if (user.hp <= 0) {
        alert('You died!');
        setTimeout(() => {
            window.location.href = '../result';
        }, 3000);
    }
}

