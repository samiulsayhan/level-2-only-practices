// generic function

// const createArrayWithString = (value:string) => [value]

// const createArrayWithNumber = (value:number) => [value]

// const createArrayWithUserObj = (value: {id:number,name:string}) => {
    
//     return [value]
// }



// dynamic genereic function recive 

const createArrayWithGeneric = <T>(value:T)=>{

}

// calling 
const arrString = createArrayWithGeneric("sayhan")
const arrNumber = createArrayWithGeneric(898)
const arrObj = createArrayWithGeneric({
    id:343,
    name:"samiul",
    
})

// watch this video if you have any confusion :- https://app.usebubbles.com/fXc69DoYJxEi4aWKuTBQdK

// tuple
const createArrayWithTuple = (param1: string, param2:string)=> [param1,param2]

// <x,y> ae braket ar vitor jae thake aeta asole data recive korar jonno ta sara aetar kono kaj nae tae beshi vaebo na aeta nea, <x,y> aetar pore je first braket thake oitar  
const createArrayTipleWithGeneric = <x,y> (param1:x,param2:y)=>[param1,param2]

const res1 = createArrayTipleWithGeneric("mezba",false)

const res2 = createArrayTipleWithGeneric(222,{ name:"rahim" })

// 

const addStudentToCourse = <T>(studentInfo:T)=>{
    return{
        course: "Next Level",
        willShowDetails:true,
        ...studentInfo,
    }
}

const student1 = {
    id:323,
    name:"dsdw",
    bike:true
}

const student2 ={
    id:423,
    name:"koi",
    hasPen: true,
    isMarried: true
}

const result = addStudentToCourse(student2)
console.log(result);
