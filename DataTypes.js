console.clear();


//Primitve data type in JS
//string,number,boolean,null,undefined


var myName = 'javascript'//"string"
console.log(typeof(myName));

//Number literal:
//we only have data type. No int, double, byte,...

var myNum=20;
console.log(typeof(myNum));//"number"
var myNum=10.9;
console.log(typeof(myNum));//"number"

var myNum=20/0;
console.log(myNum);//Infinity
console.log(typeof(myNum));//"number"

//num+string
var num1=20+'b';
console.log(num1)//string overload "20a"
console.log(typeof(num1));//"string"

//string+num
var num2='a'+20;
console.log(num2)//"a20"
console.log(typeof(num2))

//boolean:
//True or False
var isExist=true;
console.log(isExist)
console.log(typeof(isExist)) //"boolean"

var isExist=false;
console.log(isExist)
console.log(typeof isExist); //boolean

//null
var pickedColor=null;
console.log(pickedColor);//null
console.log(typeof(pickedColor));//"data type is Object"

//undefined
var selectedCar;
console.log(selectedCar);//"undefined"
console.log(typeof(selectedCar));//"undefined"

var selectedCar=undefined;
console.log(selectedCar);//"undefined"
console.log(typeof(selectedCar));//"undefined"

const firstName='Neo',
      lastName='Trinity',
      country='Matrix',
      age=35,
      isMarried=false
      console.log(firstName,lastName,country,age,isMarried);
      
let name='Bilsen',
    surname='Pehlivanoglu',
    state='New_Hampshire',
    occupation='Software qa automation engineer'
    console.log(name,surname,state,occupation);
    
    



