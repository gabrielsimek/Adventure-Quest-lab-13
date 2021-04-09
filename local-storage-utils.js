const USER = 'USER';
export function getUser(){
    const stringyUser = localStorage.getItem(USER);
    const parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}


export function setUser(parsedUser){
    const stringyUser = JSON.stringify(parsedUser);
    localStorage.setItem(USER, stringyUser);

}

