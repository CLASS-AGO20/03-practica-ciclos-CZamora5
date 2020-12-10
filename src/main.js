export default class App {
    factorial(numero){
        let result = 1;
        for(let i=1; i <= numero; i++){
            result *= i;
        }
        return result;
    }
}

let app = new App();

//Probando método factorial(numero);
let a = 3;
let b = 6;
let c = 11;
console.log(`El factorial de ${a} es ${app.factorial(a)}`);
console.log(`El factorial de ${b} es ${app.factorial(b)}`);
console.log(`El factorial de ${c} es ${app.factorial(c)}`);
console.log(`El factorial de ${c-a} es ${app.factorial(c-a)}`);