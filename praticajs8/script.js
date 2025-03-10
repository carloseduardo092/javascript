function gerarTabuada() {
  let num = document.getElementById("num").value;
  let select = document.getElementById("res");
  if (num === "") {
    window.alert("Por favor digite um número sequelado");
    return;
  }

  select.innerHTML = '<option value = ""> Selecione um número</option>';

  for (let i = 1; i <= 10; i++) {
    let option = document.createElement("option");
    option.value = num * i;
    option.textContent = `${num} x ${i} = ${num * i}`;
    select.appendChild(option);
  }
  select.focus();
  select.size = 10;

  select.addEventListener(
    "blur",
    () => {
      select.size = 1;
    },
    { once: true }
  );
}

document.getElementById("botao").addEventListener("click", gerarTabuada);
