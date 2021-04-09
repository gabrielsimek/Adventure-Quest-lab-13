import questData from '../quest-data.js';


const mapEl = document.querySelector('.main-section');

for (let quest of questData){
    const linkEl = document.createElement('a');
    linkEl.href = `../quest/?id=${quest.id}`;
    linkEl.textContent = quest.title;
    mapEl.append(linkEl);

}