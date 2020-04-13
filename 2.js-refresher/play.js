//lesson object
const person = {
  name: 'Hendriyan Ogivano',
  age: 21,
  greet: () => {
    console.log('Hi, Iam ' + this.name) // this tidak bisa digunakan di arrow function
  },
  greetNoValue(){ // syntax function lama bisa menggunakan this
    console.log('Hi, Iam ' + this.name)
  },
  greetOutdateFunction: function () { // syntax function lama bisa menggunakan this
    console.log('Hi, Iam ' + this.name)
  }
}

person.name = 'Soffya Ranti'
person.greetNoValue = 'Change function to primitive variable'

console.log(person)
console.log(person.greet())
console.log(person.greetNoValue)
console.log(person.greetOutdateFunction())

//lesson array
const hobbies = ['Sports', 'Cooking', 'Climbing']
const hobbies2 = hobbies // create new array but same array
const hobbiesMap = hobbies.map(hobby => 'hobby : ' + hobby) // create new array in new array
hobbies[0] = 'traveling'
console.log(hobbies2)

hobbiesMap.push('Hobby : ' + 'Programming')
console.log('Map hobbies ' + hobbiesMap)

const arrayMultipleVariable = ['Hendriyan Ogivano', 20, true] // can multiple primitive variable in array
console.log(arrayMultipleVariable)

for (let hobby of hobbies){
  console.log(hobby)
}
