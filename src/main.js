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
