// dynamicaly generalize
// generic
// ***---- summary Generic use kore kivabe dynamic type recive korte pari ***----


// type genericArray = Array<string>
type genericArray<i> = Array<i>

// ...

// const friend : string[] =["a","b","c","d"]
// const friend : Array<string> =["a","b","c","d"]
const friend : genericArray<string> =["a","b","c","d"]


// const rollNumber : number[] = [3,1,2,4]
const rollNumber : Array<number> = [3,1,2,4]

// const isEligaleList : boolean[]=[true,false,true]
const isEligaleList : Array<boolean>=[true,false,true]

console.log("hey");

// denote coordinates

// type Coordinates =[number,number]
// type Coordinates =[string]

/**
 ** note: 
aekhane amra dynamic data type use korsi jake bole generic
aeta use korar fole akta defined type theke onekgula type handle kora jae dynamicaly
jemon uporer comment kora gula normal ar nicher ta dynamic generic
 */
type Coordinates<x,y> = [x,y]

// genaric on array

const coordinates1 : Coordinates<number,number> = [20,30]
const coordinates2 : Coordinates<string,string> = ["20","30"]


// Here genaric on an array of object
/* const userList : genericArray<object>...
kintu aevabe object type define kore dile 
object ar vitor ja mon chae nite parbo kintu 
amon hole object ar vitorer data type fix thakbena 
jemon mon chae temon object ar data nite parbo 
kintu amra saeta chae na , tae hobe hosse aeta ja niche use korsi

ar karone amra strictly type gula check dite parchi
*/
const userList : genericArray<{name:string,age:number,class?:number}> =[
    {
        name:"sayhan",
        age:23
    },
    {
        name :"rejwan",
        age:21,
        class: 13
    }
]

// summary Generic use kore kivabe dynamic type recive korte pari