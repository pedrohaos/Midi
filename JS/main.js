function tocaSom (seletorDeAusdioPelaId) {
    const elemento = document.querySelector(seletorDeAusdioPelaId);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log("Elemento não encontrado");
    }
}

const listaTeclado = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaTeclado.length; contador++){
    const tecla = listaTeclado[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){tocaSom(idAudio)}

    tecla.onkeydown = function (event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){tecla.classList.remove('ativa')}
}
