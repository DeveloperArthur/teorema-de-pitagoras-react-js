function TeoremaDePitagoras() {
    var titulo = 'Teorema de Pitágoras';
    var pitagoras = require('./img/pitagoras.jpg').default;
    var texto = 'O teorema de Pitágoras está diretamente relacionado ao triângulo retângulo, os egípcios e os Babilônios já o utilizavam, mas ainda não se tinha a formulação e o rigor matemático adequado. A história do Teorema de Pitágoras perpassa pela Grécia antiga, onde o filósofo e também matemático Pitágoras realizou a primeira demonstração desse teorema. Conjectura-se que talvez Pitágoras tenha observado mosaicos antigos que possuíam as formas geométricas triângulos retângulos isósceles e triângulos retângulos escalenos para assim conceber o teorema que leva o seu nome. Veja a seguir a estrutura geométrica desses dois triângulos, Após Pitágoras observar esses mosaicos, ele estabeleceu importantes relações geométricas, sendo uma delas "A área do quadro construído sobre a hipotenusa é igual à soma das áreas dos quadrados construídos sobre os catetos". Para entender essa definição de forma mais clara, observe a figura geométrica abaixo, nela está representada a hipotenusa e os catetos de um triângulo retângulo. A hipotenusa sempre será o lado aposto ao ângulo de 90°, já os catetos são os segmentos de reta que formam o ângulo de 90°. Agora que já sabemos as características de um triângulo retângulo, vamos representar a relação enunciada anteriormente utilizando um exemplo geométrico que segue a condição de existência de triângulo.';
    var triangulo = require('./img/triangulo.png').default;
    return (
        <div>
            <h1>{titulo}</h1>
            <img src={pitagoras} height/>
            <p>{texto}</p>
            <img src={triangulo} height='300px' />
        </div>
    );
}

export default TeoremaDePitagoras;