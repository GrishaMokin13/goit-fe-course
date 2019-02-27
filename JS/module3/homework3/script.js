let logins = [];
let login;
function isLoginValid (login){
if ((login.length)>3 && (login.length)<17){
return true;}
else{
    return false;
}
}
function isLoginUnique(allLogins, login){
if (allLogins.includes(login)){
return false;
}
else{
    return true;
}
}
function addLogin(allLogins, login){
    login = prompt('Plese enter login');
    if (isLoginValid(login) === true)
    {
        if (isLoginUnique(allLogins,login) === true){
            alert('Login was successfully added');
            allLogins.push(login);
        }
        else{
            alert('This login has already been used ');
        }
    }
    else{
        alert('Login must be between 4 and 16');
    }

}
while(login !== null){
addLogin(logins,login);}
