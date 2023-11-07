main()

function main() {
    
    let nome = prompt("Digite seu nome");
    let numero = prompt("Digite um número");

    olaMundo();
    setSaudacao(nome);
    console.log(dobro(numero));
    console.log(media(3, 2, 3));
    console.log(retMaior(40, 63));
    console.log(mult(30));
}

function olaMundo() {
    console.log("Olá Mundo");
}

function setSaudacao(nome) {
    console.log(`Olá, ${nome}`);
}

function dobro(numero) {
    return 2 * numero;
}

function media(num1, num2, num3) {
    return (num1+num2+num3)/3
}

function retMaior(n1, n2) {
    if (n1 > n2) {
        return n1;
    }else{
        return n2;
    }
}

function mult(num){
    return num*num;
}