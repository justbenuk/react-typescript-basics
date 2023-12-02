//NOTE: string type
let userName: string
// this will error as we have assigned userName to string
//userName = 34
//this will work
userName = 'Ben'

//NOTE: number typre
let userAge: number
// errors
//userAge = '18'
//works
userAge = 18

//NOTE: Boolean
let isValid: boolean
//errors
//isValid = 'true'
//works
isValid = true

//NOTE
// union types that need more than one type
let userID: string | number

userID = '123'

//NOTE: object types

// you can use the object type, but this is good as this wont give any hints to the structure
//let user: object
type userType = {
  name: string,
  age: number,
  isValid: boolean,
  id?: string | number
}

let user: userType

user = {
  name: 'Ben',
  age: 16,
  isValid: false
}

//NOTE: arrays
// this is the ;ong way let hobbies: Array<string>
let hobbies: string[]

hobbies = ['sports', 'cooking', 'coding']


//NOTE: functions

function add(a: number, b: number){
  const result = a + b
  return result
  }

function calculate(a: number, b: number, calcfn: (a: number, b: number) => number){
  calcfn(a, b)
}

calculate(1, 2, add)

type Admin = {
  permisions: string[]
}

type AppUser = {
  userName: string
}

type AppAdmin = Admin & AppUser

let admin: AppAdmin

admin = {
  permisions: ['login'],
  userName: 'Ben'
}

//NOTE: type literals

type Role = 'Admin' | 'User'
let role: Role

function performAction(action: string, role: Role){
  if(role === 'User' && typeof action === 'string'){
    // run the action
  }
}
