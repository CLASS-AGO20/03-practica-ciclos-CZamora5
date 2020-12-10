export default class App {
    factorial(numero){
        let result = 1;
        for(let i=1; i <= numero; i++){
            result *= i;
        }
        return result;
    }

    convertirAString(numero){
        let str = "";
        let i = 1;
        while(i <= numero){
            str += "*";
            i++;
        }
        return str;
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