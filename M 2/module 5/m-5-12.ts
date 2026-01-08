const EligableForJob = (age:number)=>{

    // if(age>=21){
    //     console.log("Eligable for Job");
    // }
    // else{
    //     console.log("Not eligable for Job");
    // }
    
    const result = age >= 21 ? "Eligable for Job" : "Not eligable for Job"
}
EligableForJob(21);


// null , undefined -- default value

const userTheme = undefined   // aekhane null & undefined sara kono value dile ar default value show korbe na

const selectedTheme = userTheme ?? "light theme";
console.log(selectedTheme);

// 

const isAuthenticated = null

const resultWithTernary = isAuthenticated ? isAuthenticated : "Yor Are guest" // this line is a normal tunary oparator

const resultWithNullish = isAuthenticated ?? "you are guest" // aeta default value ar jonno null ar bodole kono value thakle aeta run hobe na 

// optional chaining

const user :{
    adress:{
        city: string,
        town: string,
        postalCode?: string
    }
} = {

    adress:{
        city: "dhaka",
        town: "faridpur"
    }
};
const postalCode = user?.adress?.postalCode; 
// aekhane ae ? mark use koresi jeno value undefined na ashe 

console.log(postalCode); 
/**
 aeta jodi ? mark na dea print kortam tahole 
 undefined dekhato and undefined dekhale react 
 code crash kore tae ? mark use kora hoese 
 jeno undefined na dekhae
 */
