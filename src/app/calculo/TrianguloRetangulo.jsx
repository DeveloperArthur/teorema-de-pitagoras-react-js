import { useState } from "react";
import CalculadorTrianguloRetangulo from "./CalculadorTrianguloRetangulo";

function TrianguloRetangulo() {
    var titulo = 'Calcular Triângulo Retângulo'
    const [calculador,] = useState(new CalculadorTrianguloRetangulo());

    function calcula(){
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;

        var resultado = calculador.calcula(a,b);
        document.getElementById("resultado").innerHTML = 'Resultado: '+resultado;
    }

    return (
        <div>
            <h2>{titulo}</h2>

            <form>
                <label for="fname">Cateto oposto: </label>
                <input type="number" id="a" name="a"></input>
                <br></br><br></br>
                <label for="fname">Cateto adjacente: </label>
                <input type="number" id="b" name="b"></input>
            </form>
            
            <strong><p id="resultado"></p></strong>
            <button type="button" onClick={calcula} className="action">Calcular</button>
        </div>
    );
}

export default TrianguloRetangulo;