let agora = new Date();
let diaSem = agora.getDay();

/*
0-domingo
1-segunda
2-terca
3-quarta
4-quinta
5-sexta
6-sabado
*/

switch (diaSem) {
  case 0:
    console.log("Domingo");
    break;

  case 1:
    console.log("segunda");
    break;

  case 2:
    console.log("terca");
    break;

  case 3:
    console.log("quarta");
    break;

  case 4:
    console.log("quinta");
    break;

  case 5:
    console.log("sexta");
    break;

  case 6:
    console.log("Sabádo");
    break;

  default:
    console.log("[ERROR] Dia inválido");
    break;
}
