// generic With Interface

interface Developer<i> {
    name: string,
    salary : number,
    device:{
         brand :string,
         model:string,
         relesedDate: string
    }
    smartWatch: i

}

const poorDeveloper : Developer<{
    heartRate: string,
    stopWatch: boolean
}> ={
    name: "poorMan",
    salary: 30000,
    device:{
        brand: "bmw",
        model: "8i",
        relesedDate: "2020/05/24"
    },
    smartWatch:{
        heartRate:"200",
        stopWatch: true
    }
}
// 

const richDeveloper : Developer<{
    heartRate: string,
    CallSupport: boolean,
    calculator: boolean,
    AiSupport: boolean
    
}> ={
    name: "richMan",
    salary: 30000,
    device:{
        brand: "bmw",
        model: "8i",
        relesedDate: "2020/05/24"
    },
    smartWatch:{
        heartRate:"200",
        CallSupport:true,
        calculator:true,
        AiSupport:true
    }
}



