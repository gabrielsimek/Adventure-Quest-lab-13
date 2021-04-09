// import functions and grab DOM elements
import { getUser, setUser } from './local-storage-utils.js'
// initialize state

// set event listeners to update state and DOM
const formEl = document.querySelector('form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const userName = formData.get('name');
    const userType = formData.get('type');
    
    const user = {
        name: userName,
        type: userType,
        hp: 40,
        gold: 0,
        completed: {}
    };
    setUser(user);
    window.location.href = './map';
});

