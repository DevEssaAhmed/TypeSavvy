// function multiByTwo(number: unknown) {
//     return number *2;
// }

//? In default type typescript does not know which type of argument will be so it gives an error implying that the result might not be same as what we want
//! Unknown types forces you to check for the variable type

function multiByThree(number: unknown){
    if (typeof number === "number") {
        return number * 3;
    } 
    return "Please provdie a valid number"
}