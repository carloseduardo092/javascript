function gerarTabuada () {
    let num = document.getElementeById('num').value
    let select = document.getElementById('res')
    if (num === 0) {
        window.alert("Digite um número por favor!")
        return
    }

    select.innerHTML = '<option value = ""> Selecione um número</option>'

    for (let i = 1; i <= 10; i++) {
        let option = document.createElement('option')
        option.value = i * num
        option.textContent = `${num} x ${i} = ${num * i}`
        select.appendChild(option)
    }

    select.focus()
    select.size = 10

    select.addEventListener("blur", () => {
        select.size = 1
    }, {once: true})
}


document.getElementById('botao').addEventListener('click', gerarTabuada);