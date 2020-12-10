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

    elevar(numero, potencia){
        let result = 1;
        for(let i = 1; i <= potencia; i++){
            result *= numero;
        }
        return result;
    }
}

let app = new App();

//Probando método factorial(numero)
let a = 3;
let b = 6;
let c = 11;
console.log(`Probando método factorial(numero):`);
console.log(`El factorial de ${a} es ${app.factorial(a)}`);
console.log(`El factorial de ${b} es ${app.factorial(b)}`);
console.log(`El factorial de ${c} es ${app.factorial(c)}`);
console.log(`El factorial de ${c-a} es ${app.factorial(c-a)}`);

//Probando método convertirAString(numero)
a = 3;
b = 19;
c = 30;
console.log(`Probando método convertirAString(numero):`);
console.log(`El siguiente string tiene ${a} asteriscos: ${app.convertirAString(a)}`);
console.log(`El siguiente string tiene ${b} asteriscos: ${app.convertirAString(b)}`);
console.log(`El siguiente string tiene ${c} asteriscos: ${app.convertirAString(c)}`);
console.log(`El siguiente string tiene ${a+b+c} asteriscos: ${app.convertirAString(a+b+c)}`);

//Probando método obtenerDivisbles(numero)
a = 24;
b = 72;
c = app.factorial(6);
let d = app.factorial(9);
let e = 6;
console.log(`Probando método obtenerDivisbles(numero):`);
console.log(`El número ${a} tiene ${app.obtenerDivisibles(a)} divisores positivos`);
console.log(`El número ${b} tiene ${app.obtenerDivisibles(b)} divisores positivos`);
console.log(`El número ${c} tiene ${app.obtenerDivisibles(c)} divisores positivos`);
console.log(`El número ${d} tiene ${app.obtenerDivisibles(d)} divisores positivos`);
console.log(`El número ${e} tiene ${app.obtenerDivisibles(e)} divisores positivos`);

//Probando método elevar(potencia)
a = 2;
b = 3;
c = 4;
d = 5;
e = 6;
console.log(`Probando método elevar(numero, potencia):`);
console.log(`${a} elevado a la potencia ${b} es igual a ${app.elevar(a, b)}`);
console.log(`${b} elevado a la potencia ${c} es igual a ${app.elevar(b, c)}`);
console.log(`${c} elevado a la potencia ${d} es igual a ${app.elevar(c, d)}`);
console.log(`${d} elevado a la potencia ${e} es igual a ${app.elevar(d, e)}`);
console.log(`${e} elevado a la potencia ${a} es igual a ${app.elevar(e, a)}`);