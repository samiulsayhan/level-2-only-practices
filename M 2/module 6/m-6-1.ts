let anything: any 

anything = "samiul"

const KgToGmComvert = (input : string | number) : string|number|undefined=>{
    if(typeof input === "number"){
        return input * 1000;
    } else if (typeof input === "string") {
        const [value] = input.split(" ")
        return `Converted Output is ${Number(value)*1000}`
    }
}
const result1 = KgToGmComvert(8) as number  // this is call typeAssertion
console.log(result1);

const result2 = KgToGmComvert("8 kg") as string // this is a typeAssertion example
console.log(result2);



