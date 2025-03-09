function verificar() {
  var data = new Date();
  var ano = data.getFullYear();

  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("Verifique os dados e tente novamente");
  } else {
    var fsexo = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsexo[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "crianca.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "jovem.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "adulto.jpg");
      } else {
        //idoso
        img.setAttribute("src", "idoso.jpg");
      }
    } else if (fsexo[1].checked) {
      gênero = "Mulher";
      if (idade >= 10 && idade < 10) {
        //criança
      } else if (idade < 21) {
        //jovem
      } else if (idade < 50) {
        //adulto
      } else {
        // idoso
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`;
    res.appendChild(img);
  }
}
