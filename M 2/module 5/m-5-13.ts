const discountCalculator = (input:unknown) =>{
    if(typeof input === "number"){
        const discountPrice = input * 0.1;
        console.log(discountPrice);
    } else if(typeof input === "string"){
        const [discountPrice] = input.split(" ");
        console.log(Number(discountPrice)*0.1);
    } else {
        console.log("Wrong Input");
    }
}

discountCalculator(100);
discountCalculator("100 Taka");
discountCalculator(null)

const net = "1000"
console.log( typeof Number(net)); //easy way to convert string value in number
