function converte(){
    let valorDeciamal = 0;
    let valorBinario = document.getElementById('valor-binario').value;

    if(valorBinario === ''){
        alert("Insira um valor binário.");
    }
    
    valorDeciamal = parseInt(valorBinario, 2);
    document.getElementById('resultado').value = valorDeciamal;

    return true;
}

