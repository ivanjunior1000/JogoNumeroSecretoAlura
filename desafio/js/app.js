let titulo      = document.querySelector('h1');
let btConsole   = document.querySelector('#console');
let btAlert = document.querySelector('#alert');
let btPrompr = document.querySelector('#prompt');
let btSoma = document.querySelector('#soma');

titulo.innerHTML = "Hora do desafio";
btConsole.addEventListener("click", clickConsole);
btAlert.addEventListener("click", amoJS);
btPrompr.addEventListener("click", dialog)
btSoma.addEventListener("click", soma)

function clickConsole() {
    console.log('O botão do console foi clicado...');
}

function amoJS(){
    alert("Eu amo JS...");
}

function dialog(){
    let cPrompt = prompt("Digite o nome de sua cidade:");
    alert(`Estive ${cPrompt} e lembrei de você!`);
}

function soma() {
    
    let n1 = prompt("Digite um número: ");
    let n2 = prompt("Digite outro número: ");
    let nSoma = parseInt(n1) + parseInt(n2);

    alert(`A soma dos números é: ${nSoma}`)
    console.log(`A soma dos números é: ${nSoma}`)

}