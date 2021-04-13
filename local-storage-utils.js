const USER = 'USER';
export function getUser(){
    const user = JSON.parse(localStorage.getItem(USER));
    
    return user;
}


export function setUser(parsedUser){
    const stringyUser = JSON.stringify(parsedUser);
    localStorage.setItem(USER, stringyUser);

}

