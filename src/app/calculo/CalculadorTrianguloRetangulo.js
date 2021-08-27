export default class CalculadorTrianguloRetangulo {
    constructor(){}

    calcula(a, b){
        return Math.hypot(a, b).toFixed(2);
    }
}