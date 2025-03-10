function contar() {
  let i = parseInt(document.getElementById("inicio").value);
  let f = parseInt(document.getElementById("fim").value);
  let p = parseInt(document.getElementById("passo").value);
  let res = document.getElementById("res");

  res.innerHTML = "";

  if (isNaN(i) || isNaN(f) || isNaN(p)) {
    window.alert("Por favor digite valores válidos");
    return;
  }

  if (p === 0) {
    window.alert("Passo não pode ser 0! Começar a contagem pelo Passo 1");
    p = 1;
  }

  res.innerHTML = "👉"
  let first = true;

  if (i === f) {
    window.alert("Deixa de ser tonto raparigo");
    document.getElementById("inicio").value = "";
    document.getElementById("fim").value = "";
    document.getElementById("passo").value = "";
    return;
  }

  // contagem crescente
  if (i < f) {
    while (i <= f) {
      if (!first) {
        res.innerHTML += i + "👉";
      }
      res.innerHTML += i;

      if (i + p > f) {
        res.innerHTML += "🏁";
        break;
      }
      first = false;
      i += p;
    }
  } else {
    while (i >= f) {
      if (!first) {
        res.innerHTML += i + "👉";
      }
      res.innerHTML += i;

      if (i - p < f) {
        res.innerHTML += "🏁";
        break;
      }

      first = false;
      i -= p;
    }
  }
}

document.getElementById("contar").addEventListener("click", contar);
