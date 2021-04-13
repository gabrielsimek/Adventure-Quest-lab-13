// import functions and grab DOM elements
import { setUser } from './local-storage-utils.js';
import { findById } from './utils.js';
import { userTypes } from './user-classes.js';
// initialize state

// set event listeners to update state and DOM
const formEl = document.querySelector('form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formEl);
    let userName = formData.get('name');
    if (userName.toLowerCase() === 'bryana') {
        userName = 'The best TA!';
    }
    const userTypeName = formData.get('type');
    const userType = findById(userTypes, userTypeName);
    
    
    const user = {
        name: userName,
        type: userType.name,
        hp: userType.hp,
        gold: userType.gold,
        completed: {}
    };
    
    setUser(user);
    window.location.href = './map';
});

