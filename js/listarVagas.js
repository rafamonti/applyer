function mostrarVagas(vagas) {

    var listarVagas = document.querySelector("#listarVagas");

    var vagaUl = vagas;

    for (var i = 0; i < vagas.length; i++) {
        var vagaUl = document.createElement("ul");
        var areaLi = document.createElement("li");
        var descricaoLi = document.createElement("li");
        vagaUl.textContent = vagas[i].cargo;
        areaLi.textContent = "ÁREA: " + vagas[i].areaSegmento;
        descricaoLi.textContent = "DESCRIÇÃO DA VAGA: "+ vagas[i].descricao;

        listarVagas.appendChild(vagaUl);
        vagaUl.appendChild(areaLi);
        vagaUl.appendChild(descricaoLi);
    }
}

window.onload = function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://applyer.herokuapp.com/v3/vaga");

    xhr.addEventListener("load", function () {
        var resposta = xhr.response;
        var vagas = JSON.parse(resposta);
        console.log(vagas);

        if (xhr.status == 200) {
            mostrarVagas(vagas);
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();

};