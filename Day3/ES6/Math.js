export function Add(a,b){ //export is used to expose the functions, varibales
    return a+b;
}


// default export, only one per module
export default function Product(a,b){ 
    return a*b;
}

export const PI = 3.14;