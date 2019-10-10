
var cargo = document.querySelector("#cargo");
var area = document.querySelector("#area");
var descricao = document.querySelector("#descricao");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let dados = {
        cargo: cargo.value,
        areaSegmento: area.value,
        descricao: descricao.value,
    }

    fetch("https://applyer.herokuapp.com/v3/vaga", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }).then(function (response) {
        if (response.status == 200) {
            var p = document.querySelector("#resposta");
            p.innerHTML = "Vaga cadastrada com sucesso!";
            form.reset();
        } else {
            var p = document.querySelector("#resposta");
            p.innerHTML = "Ops, ocorreu um erro ao cadastrar a vaga!";
            console.log(response.status);
        }
    })
});