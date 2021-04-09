import { getUser } from './local-storage-utils.js';

export function renderUserStats(){
    const headerEl = document.querySelector('header');
    const user = getUser();
    const divEl = document.createElement('div');

    const nameEl = document.createElement('p');
    nameEl.textContent = `HP ${user.name}`;

    const hpEl = document.createElement('p');
    hpEl.textContent = `HP: ${user.hp}`;

    const goldEl = document.createElement('p');
    goldEl.textContent = `Gold: ${user.gold}`;

    const typeEl = document.createElement('p');
    typeEl.textContent = `Type: ${user.type}`;

    divEl.append(nameEl, hpEl, goldEl, typeEl);

    headerEl.append(divEl);
}