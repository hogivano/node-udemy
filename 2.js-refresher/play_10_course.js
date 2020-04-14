//Destructuring bisa di object dan arrays
const person = {
    name: 'Hendriyan Ogivano',
    age: 21,
    greet () {
        console.log('Hi, Iam ' + this.name) // this tidak bisa digunakan di arrow function
    },
}

person.greet()

//mengambil value yang diiginkan lgsg lewat parameter function
const desct = ({name, greet}) => { //sesuai dengan key object/property name
    //function greet tidak bisa mengambil value name "undefined"
    greet()
    return name
}
console.log(desct(person))

//variable destructuring
const {name, age} = person
console.log(name + " " + age)


const hobbies = ['Sports', 'Cooking', 'Football']
const [hobby1, hobby2, hobby3, hobby4] = hobbies
//[menamakan index, menamakan index, menamakan index] berdasarkan index array
console.log(hobby1 + " dan " + hobby3)