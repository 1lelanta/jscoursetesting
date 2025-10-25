let userRole = "admin";
let accessLevel;

if(userRole==="admin"){
    accessLevel = "full access is granted";
}
else if(userRole==="manager"){
    accessLevel = "limited access granted"
}
else{
    accessLevel = "no access granted"
}

console.log("access Level",accessLevel);

let isLoggedIn= true;
let userMessage;

if(isLoggedIn){
    if(userRole==="admin"){
        userMessage="welcome, Admin!";
    }
    else
userMessage="welcome User"
}else{
    userMessage="Please log in to access the system."
}

let userType="Subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory="manager";
        break;
    case "Subscriber":
        userCategory="Subscriber";
        break
    default:
        userCategory="Unknow";
}
console.log("User Category:",userCategory);