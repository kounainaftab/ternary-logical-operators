// if else statement
//let admissioncriteria=82;
//if(admissioncriteria>=80){
//console.log("You are eligible")
//}
//else{
//console.log("You are not eligible");
//}
//if else statements (fb insta login method)
var enterEmail = true; //logical Operators && , ||
var enterNumber = false;
if (enterEmail && enterNumber) {
    console.log("Continue");
}
else {
    console.log("invalid email");
}
//if else and else if statements
var per = 3;
if (per >= 90 && per <= 100) {
    console.log("your grade is A+");
}
else if (per >= 80 && per < 90) {
    console.log("your grade is A");
}
else if (per >= 70 && per < 80) {
    console.log("your grade is B+");
}
else if (per >= 60 && per < 70) {
    console.log("your grade is B");
}
else if (per >= 50 && per < 60) {
    console.log("your grade is C");
}
else if (per >= 1 && per <= 49) {
    console.log("you are fail");
}
else {
    console.log("");
}
