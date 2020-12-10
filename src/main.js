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

    obtenerDivisibles(numero){
        let result = 0;
        let i = 1;
        do{
            if(numero % i == 0){
                result ++;
            }
            i++;
        }while(i <= numero);
        return result;
    }
}

let app = new App();

//Probando método factorial(numero);
let a = 3;
let b = 6;
let c = 11;
console.log(`Probando método factorial(numero):`);
console.log(`El factorial de ${a} es ${app.factorial(a)}`);
console.log(`El factorial de ${b} es ${app.factorial(b)}`);
console.log(`El factorial de ${c} es ${app.factorial(c)}`);
console.log(`El factorial de ${c-a} es ${app.factorial(c-a)}`);

//Probando método convertirAString(numero);
a = 3;
b = 19;
c = 30;
console.log(`Probando método convertirAString(numero):`);
console.log(`El siguiente string tiene ${a} asteriscos: ${app.convertirAString(a)}`);
console.log(`El siguiente string tiene ${b} asteriscos: ${app.convertirAString(b)}`);
console.log(`El siguiente string tiene ${c} asteriscos: ${app.convertirAString(c)}`);
console.log(`El siguiente string tiene ${a+b+c} asteriscos: ${app.convertirAString(a+b+c)}`);
