var botao = document.querySelector("#botaoclicado");
botao.addEventListener("click", function(event){
    event.preventDefault();
    var altura = document.querySelector("#altura");
    var peso = document.querySelector("#peso");
    var nome = document.querySelector("#nome");

    

    //função para validar as informações 
    var erro = validaform(altura.value, peso.value, nome.value);
    
    if (erro){
        console.log("deu ruim");
        limpaTudo (nome, altura, peso);
        var usuario = document.querySelector("#imprimi-nome").innerHTML = "Seja bem vindo";
        var resultado = document.querySelector("#imprimi-imc").innerHTML = "";
        return;
    }   

    //calcular imc
    var imc = calculaImc(altura.value, peso.value);
    
       
    //mudar cor da linha na tabela
    limpaFundo();
    mudaFundo (imc);

    //imprimir informação 
    imprimirRsultado (nome.value, imc)
    

    //limpa os valores na pagina 
    limpaTudo (nome, altura, peso);
    
    
   

})

