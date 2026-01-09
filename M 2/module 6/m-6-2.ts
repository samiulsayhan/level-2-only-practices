// interface
// typeilias and interface are kind of similar
type User = {

    name : string;
    age : number
}

type Role = {
    role : "admin" | "user"
}

type UserWithRole = Role & User

const user1 :User ={
    name :"jasim",
    age : 46
}

const user2: UserWithRole = {
    name: "karim",
    age: 34,
    role: "admin"
}