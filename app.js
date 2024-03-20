const factorial = (n) => {
    if (n === 0 || n === 1){
        return 1;
    }  else if (n < 0){
        return 0;
    } else {
        return n * factorial(n-1);
    }
} 

numero = prompt("Ingrese numero para calcularle factorial");
console.log(factorial(numero));