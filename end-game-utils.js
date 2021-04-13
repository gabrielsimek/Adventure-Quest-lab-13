
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
//round about way to return a boolean ^^


export function hasCompleted(user, quests) {
    for (let quest of quests) {
        if (!user.completed[quest.id]){
            return false;
            
        }
    }
    //will only return true if none of above evaluate to false. If we evaluate for true first the function will return at the first true.
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

