import { getUser } from './local-storage-utils.js';

export function renderUserStats(){
    const headerEl = document.querySelector('header');
    const user = getUser();
    const divEl = document.createElement('div');

    const nameEl = document.createElement('p');
    nameEl.textContent = `Name ${user.name}`;

    const hpEl = document.createElement('p');
    hpEl.textContent = `HP ${user.hp}`;
    if (user.hp <= 0){
        hpEl.style.color = 'red';
        
    } else if (user.hp <= 15) {
        hpEl.style.color = 'orange';
    } else {
        hpEl.style.color = 'green';
    }
    
    const goldEl = document.createElement('p');
    goldEl.textContent = `Gold ${user.gold}`;
    if (user.gold <= 0) {
        goldEl.style.color = 'red';
    } else if (user.gold > 0 && user.gold < 20) {
        goldEl.style.color = 'blue';
    } else {
        goldEl.style.color = 'gold';
    }

    const typeEl = document.createElement('p');
    typeEl.textContent = `Type ${user.type}`;

    divEl.append(nameEl, hpEl, goldEl, typeEl);

    headerEl.append(divEl);
}