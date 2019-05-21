function Add(x,y){
    return x+y;
}

function Multiply(x,y){
    return x * y;
}

function Divide(x,y){
  return x/y;
}

module.exports = {Add:Add, Multiply:Multiply} //Node internally uses CommonJS module loader.commonJS gives the module object to be used to be expose to other modules