// console.log("Iniciando o script...")
// var idade = 65;
// console.log(`Você tem ${idade} anos`);
// if (idade < 16) {
//   console.log("não vota")
// } else if (idade < 18 || idade >= 65) {
//   console.log("Voto opcional");
// } else {
//   console.log("Voto obrigatório");
// }
// console.log("Fim do script")

// import { questionInt } from "readline-sync";
// let num = questionInt("Digite um número:   ");
// function numeroPrimo(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// if (numeroPrimo(num)) {
//   console.log(`o número ${num} é primo`);
// } else {
//   console.log(`O número ${num} não é primo`);
// }

// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Digite um número para calcular o fatorial: ", (num) => {
//   num = parseInt(num);

//   function fatorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * fatorial(n - 1);
//   }

//   console.log(`O fatorial de ${num} é ${fatorial(num)}`);
//   rl.close();
// });
