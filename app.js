let title = 'Богдан Стащук JS 11 часов'
console.log(title)


let myName

console.log(myName)

myName = 'Yaro' // заново лет уже не надо писать, потому что переменная уже была определена
console.log(myName)

// Объявление переменных

// const myName2 - не сработает, нужно присвоить значение
// console.log(myName2) 

const myName2 = 'Yaro2'
console.log(myName2)

const objectA = {
  a: 10,
  b: true
}
console.log(objectA)


// function a(){
//  console.log('Hello')
// }
// a() // функция вызвалась со строкой Хеллоу
// a = 10 // меняю значение переменной
// a() // вызываю как функцию, но будет ошибка, потому что переменная перестала быть функцией

const a = () => {
  console.log('Hello 2')
}
a() // 'Hello 2'
// a = 10 // TypeError: Assignment to constant variable.
// a()

const myCity = {
  city: 'New York',
}

myCity['popular'] = true
const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA'

delete myCity[countryPropertyName]

console.log(myCity)