//NOTE: string type
var userName;
// this will error as we have assigned userName to string
//userName = 34
//this will work
userName = 'Ben';
//NOTE: number typre
var userAge;
// errors
//userAge = '18'
//works
userAge = 18;
//NOTE: Boolean
var isValid;
//errors
//isValid = 'true'
//works
isValid = true;
//NOTE
// union types that need more than one type
var userID;
userID = '123';
var user;
user = {
    name: 'Ben',
    age: 16,
    isValid: false
};
//NOTE: arrays
// this is the ;ong way let hobbies: Array<string>
var hobbies;
hobbies = ['sports', 'cooking', 'coding'];
//NOTE: functions
function add(a, b) {
    console.log(a + b);
}
add(2, 4);
