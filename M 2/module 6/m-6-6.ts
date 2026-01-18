//  constraint : strict rules deya
type mustStudentInfo = {id:number,name:string}

const addToCourse = <T extends mustStudentInfo>(studentInfo:T)=>{
    return{
        course: "Next Level",
        willShowDetails:true,
        ...studentInfo,
    }
}

// watch the video :- https://app.usebubbles.com/htsmEUWuJURH5tMhdK4K11

const student3 = {
    id:323,
    name:"dsdw",
    bike:true
}

const student4 ={
    id:434,
    name:"koi",
    hasPen: true,
    isMarried: true
}
const student5 ={
    hasBike:true
}

const FinalResult = addToCourse(student4)
console.log(FinalResult);
