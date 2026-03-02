let x = 10;
let y = 5;
let proposicao1;
let proposicao2;
let proposicao3;
let proposicao4;
let resposta;

proposicao1 = x > y;
console.log(`\n proposicao 1: ${proposicao1}`);

proposicao2 = x < y;
console.log(`\n proposicao 2: ${proposicao2}`);

proposicao3 = x != y;
console.log(`\n proposicao 3: ${proposicao3}`); 

proposicao4 = x == y;
console.log(`\n proposicao 4: ${proposicao4}`);

console.log("\n conjuncao");

resposta = proposicao1 && proposicao3;
console.log("\n A proposicao 1 e proposicao 3 é: " + resposta)

resposta = proposicao2 && proposicao4;
console.log("\n A proposicao_02 e proposicao_04: " + resposta);

resposta = proposicao1 && proposicao2;
console.log("\n A proposicao_01 e proposicao_02: " + resposta);

resposta = proposicao3 && proposicao4;
console.log("\n A proposicao_03 e proposicao_04: " + resposta)