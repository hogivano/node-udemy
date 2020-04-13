var name = 'hendriyan ogivano' //text, syntax variable outdate/lama
let nameLet = 'Hendriyan Ogivano' //text, syntax variable new ES6
const nameConst = 'Hendriyan Ogivano' //text, tidak bisa diubah (konstan)

var age = 20 //angka, syntax variable outdate/lama
let ageLet = 20 //angka, syntax variable new ES6
const ageConst = 20 //angka, tidak bisa diubah (konstan)

var hasHobbies = true //boolean, syntax variable outdate/lama
let hasHobbiesLet = true //boolean, syntax variable new ES6
const hasHobbiesConst = true //boolean, tidak bisa diubah (konstan)

ageLet = 30

const checkThisVariable = 'Hendri'


//return function/fungs
function summarizeUser(userName, userAge, userHasHobby){
  return 'name is ' + userName +
        ', age is ' + userAge +
        ' and the user has hobbies : ' + userHasHobby + ' ' + checkThisVariable
}

const summarizeUserFunc = function(userName, userAge, userHasHobby) {
  return 'name is ' + userName +
        ', age is ' + userAge +
        ' and the user has hobbies : ' + userHasHobby + ' ' + checkThisVariable
} //function ke dalam variable

const summarizeUserFuncArrow = (userName, userAge, userHasHobby) => { // arrow function tidak mempunyai this
  return 'name is ' + userName +
        ', age is ' + userAge +
        ' and the user has hobbies : ' + userHasHobby + ' ' + checkThisVariable
} //arrow function ES6

const sumNumber = (a, b) => a+b //peringkas function/fungsi jika tidak ada statement lain hanya return
const addOne = a => a+1 //peringkas function/fungsi jika hanya 1 parameter tidak perlu ()
const funcNoArgumen = () => 10 + 1

console.log(sumNumber(10, 10))
console.log(funcNoArgumen())
console.log(summarizeUser(name, age, hasHobbies) )
console.log(summarizeUserFuncArrow(name, age, hasHobbies) )
