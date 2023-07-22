function copiarTexto(id){
    var textoCopiado = document.getElementById(id);/* Selecionamos por ID */
    textoCopiado.select(); /* Deixamos o texto selecionado (em azul) */
    textoCopiado.setSelectionRange(0, 99999); /* Para mobile */
    document.execCommand("copy");
    document.getElementById(id).value = "";
}


    