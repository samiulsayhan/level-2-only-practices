// keyOf type oparator

type richPeoplesVehical = {
    car: string,
    bike: string;
    cng: string
}

type MyVehicale1= "bike" | "car" | "cng"
type MyVehicale2= keyof richPeoplesVehical

const MyVehicale:MyVehicale2 = "bike" // type ar vitor ja dea ase tar vitor ar data dile accept kore nae error dae
// const Vehicale:MyVehicale2 = "ship" // type ar vitor ship nae tae error dise , karon aeta dynamic na aeta fix type

//

type User = {
    id: number,
    name: string,
    address:{
        city: string
    } 
}

const user : User ={
    id:43,
    name:"sayhan",
    address:{
        city: "ctg"
    }
}

const myId = user.id // aevabe specific data nite pari object theke
const MyId = user["id"] // aevabeo o key dea object theke data ber kora jae
const MyName = user["name"]
const MyAddress= user["address"]

console.log(MyId,MyName,MyAddress);

//

const getPropertyFromObj =(obj:User,key : keyof User)=>{
    return obj[key] // aekhane aeta ahamori kisu na, normal strucure jevabe object ar key dea details ber kore omon vabe key ar index or value ta dynamic vabe recive kore
}

const result = getPropertyFromObj(user,"name")
console.log(result);

// chaele aeta dynamic kora jae generic ar maddhome

