
// Selective import
// import {Add, PI} from "./Math.js"; 
// console.log(Add(2034,40));
// console.log(PI);


// global import
// import * as MathModule from "./Math.js" 
// console.log(MathModule.Add(40,30));

//Default import: alias name can be used, no {} in import statement
// In the below example, the Product method is called with name Multiplication
import Multiplication from "./Math.js"
console.log(Multiplication(30,45));
