import leia from 'readline-sync';

let numero = leia.questionInt("Digite o numero: ");

for(let contador = 1; contador <= 10; contador++){
    console.log(`${numero} x ${contador} = ${contador * numero}`);
}