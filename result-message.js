import { aliveGoldMessages, deadGoldMessages, hpMessages } from './end-game-data.js';

    

export function createResultMessage(user) {
    //can't use isDead function b/c affects multiple things
    const isDead = user.hp <= 0;

    let hpMessage;
    if (isDead) {
        hpMessage = 'dead';
    } else if (user.hp <= 15) {
        hpMessage = 'frail';
    } else {
        hpMessage = 'healthy';
    }


    let goldMessage;

    if (user.gold === 0){
        goldMessage = 'poor';
    } else if (user.gold > 0 && user.gold < 20) {
        goldMessage = 'modest';
    } else {
        goldMessage = 'rich';
    }

    //dead or alive
    let deadOrAliveGoldMessage;
    if (isDead){
        deadOrAliveGoldMessage = deadGoldMessages;
    } else {
        deadOrAliveGoldMessage = aliveGoldMessages;
    }
    
    const resultString = `${hpMessages[hpMessage]} ${deadOrAliveGoldMessage[goldMessage]}`;
    
    return resultString;

}