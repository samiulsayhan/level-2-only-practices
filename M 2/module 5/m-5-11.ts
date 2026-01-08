type User = "admin" | "user"

const getDashboard = (role:User)=>{
    if(role==="admin"){
        return "Admin Dashboard"
    }
    else if(role==="user"){
        return "User Dashboard"
    }
    else{
        return "Guest Dashboard"
    }
}

console.log(getDashboard("admin"));

// intersection

type Employe = {
    id:string,
    name:string,
    phoneNo: string
}
type Manager = {
    post:string,
    teamMember :number
}
type EmployeManager = Employe & Manager

const RahmatAli:EmployeManager = {
    id: "12312",
    name:"RahmatAli",
    phoneNo: "82349823",
    post:"manager",
    teamMember:25
}

console.log(RahmatAli);
