// interface
// typeilias and interface are kind of similar
type User = {

    name : string;
    age : number
}

// interface
// most of the time interface used for big arrays and objects

interface IUser {
    name: string,
    age: number
}

// combine two types of inteface
// here give a new name and extends it with any exsisting interface

interface IUserWithRole extends IUser{  
    role : "admin" | "user"
}

//...

type Role = {
    role : "admin" | "user"
}

type UserWithRole = Role & User
// ....
const iuser1 : IUser ={
    name:"this one is interface",
    age: 34
}

const iuser2 : IUserWithRole={
    name:"sayhan",
    age: 23,
    role:"admin"
}
// ...

const user1 :User ={
    name :"jasim",
    age : 46
}

const user2: UserWithRole = {
    name: "karim",
    age: 34,
    role: "admin"
}


// function a ae interface othoba type ar bebohar

type Add = (num1:number,num2:number) => number

interface IAdd {
    (num1:number,num2:number):number
} 
// aeta akata function ar type define kora hoese jar peramiters gula hobe number & return type o hobe number

const add :IAdd = (num1,num2)=> num1+num2  // type define kora function ka aekhaen use korsi (.. Add ..)

// array type and interface

type Friends = string[]

const friends : Friends = ["a","b","c"]

//setting up types for an array value types and array index types
interface IFriends {  
    [index :number] :string
}
