// generic With Interface

interface Developer<i,x=null> { 
// extra paramiter ..x.. nisi but kaj same y ar moto recive kore ar paramiter
// x=null dear karon jodi karo bike na thake taele value 0 hobe , tae x ar default value null disi mane <x=null>

    name: string,
    salary : number,
    device:{
         brand :string,
         model:string,
         relesedDate: string
    }
    smartWatch: i,
    bike?: x 

}
/**
uporer interface a amra deksi Delveloper<i> aetae <i> recevier ar moto kaj kore ,
ar mane holo nicher line ar aetae dea data 
.......
const poorDeveloper : Developer<{
    heartRate: string,
    stopWatch: boolean
}>
.......
 ae data uporer interface ... <i>.... ar vitor jabe karon <i> aeta auto recive korbe
 then interface ardynamic generic ar neom onujae ae Developer<i> ar data .....smartWatch : i .... aetar vitor jabe
 then sob gula variable type check hone normali temon boro kisu na 

 */

//  watch this video for clarification:-  https://app.usebubbles.com/tk9CuFYnHoMiRUC3BeWf6T

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
type richDevelopoerExtraTypes = {
    heartRate: string,
    CallSupport: boolean,
    calculator: boolean,
    AiSupport: boolean
    
}

const richDeveloper : Developer< richDevelopoerExtraTypes > ={
// aekhane o amra poorDeveloper ar moto notun object type nite partam kintu code 
// code clean rakhar joono ae new object gula upore arekta notun interface banie tar vitor nici
// ar ae Developer<> ar vitor oi interface ar name ta dea disi ,, simple(0`0) ar code o clean holo

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



