const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const checkLogin = prompt('Please enter login');
let checkPassword
if (checkLogin == false){
alert('Refused by user');
}
else if ( checkLogin !== adminLogin){
alert('Incorrect login');
}
else if (checkLogin === adminLogin){
checkPassword = prompt('Please enter password');
if (checkPassword === adminPassword){
alert('Welcome');
}
else if ( checkPassword == false){
alert('Refused by user')
}
else if ( checkPassword !== adminPassword){
alert('Incorrect password')
}
}

