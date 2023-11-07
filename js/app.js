//Variáveis globais
let btChute = getTagHTML('.container__botao');
let btReiniciar = document.getElementById('reiniciar');
let chute = getTagHTML('.container__input');
let limiteJogo  = 100;
let listaNumAleatorio = [];
let numAleat = getNumeroAleatorio(limiteJogo);
let contChute = 1;

main()

function main() {

    exibirMsgInicial();
    chute.focus();

    btChute.addEventListener("click", verificarChute);
    document.addEventListener('keypress', function(e){

        if (e.which == 13) {
            btChute.click();
        } else if (e.which == 10) {
            btReiniciar.click();
        }

    });
    btReiniciar.addEventListener("click", reiniciarJogo);
 
}

function exibirMsgInicial(texto) {
    setTextoHTML('h1', 'Jogo de números secretos.');
    setTextoHTML('p', `Digite um número de 1 a ${limiteJogo}`);
}


//Getters e Setters
function setTextoHTML(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function getTagHTML(tagClass) {
    let campo = document.querySelector(tagClass);
    return campo;
}

function getNumeroAleatorio(limite) {

    let numAleatorio = parseInt(Math.random() * limite + 1);

    console.log('-------------------------------------------------------');
    console.log(`Número sorteado: ${numAleatorio}`);
    console.log(`Lista de Números sorteados: ${listaNumAleatorio}`);
    console.log(`Tamanho da lista: ${listaNumAleatorio.length}`);
    console.log('-------------------------------------------------------');

    if (listaNumAleatorio.length == limite) {
        console.log('Limite máximo da lista atingido, limpando lista.');
        listaNumAleatorio = [];
    }

    if (listaNumAleatorio.includes(numAleatorio)) {
        console.log(`O número ${numAleatorio} já está na lista, sorteando outro número...`)
        return getNumeroAleatorio(limite);
    }else{
        listaNumAleatorio.push(numAleatorio);
        return numAleatorio
    }

}

function verificarChute() {

    //console.log(parImpar(chute));

    if (chute.value == ''){
        alert('Vazio');
    }

    if (chute.value == numAleat){
        setTextoHTML('h1', 'Acertou, parabéns!!!');
        setTextoHTML('p', `Você acertou o número secreto na ${contChute}ª tentativa.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        btChute.setAttribute('disabled', true);
    }else{

        setTextoHTML('h1', 'Você errou, tente novamente.');

        if (chute.value > numAleat){
            setTextoHTML('p', `${contChute}ª tentativa. - O número secreto é menor que o digitado.`);
        }else{
            setTextoHTML('p', `${contChute}ª tentativa. - O número secreto é maior que o digitado.`);
        }

        limparCampo('.container__input');
    }

    contChute++
}

function parImpar(chute) {
    return chute % 2 == 0 ? 'O número é par.' : 'O número é impar.';
}

function limparCampo(nomeCampo) {
    let campo = document.querySelector(nomeCampo);
    campo.value = "";
}

function reiniciarJogo() {

    exibirMsgInicial();
    limparCampo('.container__input');
    contChute = 1;
    numAleat = getNumeroAleatorio(limiteJogo);
    document.getElementById('reiniciar').setAttribute('disabled',true);
    btChute.removeAttribute('disabled');
    chute.focus();

}