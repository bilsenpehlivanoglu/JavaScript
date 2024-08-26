//Normal function: camel case

function carInfo(brand, model, year){
    return{
        brand,model,year
    };
};

const carFunction = carInfo('Mercedes', 'G Wagon G63', '2024');
console.log(carFunction);

//Constructor 
console.log(carFunction.brand);
console.log(carFunction.model);
console.log(carFunction.year);

//Constructor: PascalCase
function CarInfo(brand, model, year){
  //this keyword is a reference to the objects
  this.brand=brand;
  this.model=model;
  this.year =year;
}

const carConstructor=new CarInfo('Tesla', 'Model X', 2024);
console.log(carConstructor);

console.log(carConstructor.brand);//Tesla
console.log(carConstructor.model);//Model X
console.log(carConstructor.year);//2024

//Example2
function areaOfCircle(r){
    return{
        r,
        result(){
            console.log('Result : ')
        }
    }
}
const myCircleArea=areaOfCircle(7);

//Create constructor
function AreaOfCircle(r){
    this.r=r;
    this.result=function(){
        console.log('Result :')
    }
}
const myCircleArea2=new AreaOfCircle(10);

//New keyword: creates an empty object, then returns objects from the constructor
//Function of new keywords, wraps the values of given in function and return it as an object

//Create a person as constructor with 4 params
//Params: name,age,languages


function Person(name,age,languages){
    this.name=name;
    this.age=age;
    this.languages=languages;
}

const personTom = new Person('Tom', 30,["English", "Spanish", "German"]);
console.log(personTom);

//Print all of the information one by one
console.log(personTom.name);
console.log(personTom.age);
console.log(personTom.languages);
console.log(personTom.languages[1]);// Spanish

