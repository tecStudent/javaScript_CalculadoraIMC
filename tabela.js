var pesoMuitoBaixo = document.getElementById("peso-muito-abaixo");
var pesoBaixo = document.getElementById("peso-abaixo");
var pesoNormal = document.getElementById("peso-normal");
var pesoAcima = document.getElementById("peso-acima");
var pesoObesidadeI = document.getElementById("peso-obesidade-1");
var pesoObesidadeII = document.getElementById("peso-obesidade-2");
var pesoObesidadeIII = document.getElementById("peso-obesidade-3");


function mudaFundo (imc){
    if(imc < 17){
        
        pesoMuitoBaixo.style.backgroundColor = "#FFFF00";        
        //teste 1.70 30
    }
    else if (imc > 17 && imc < 18.5){
        
        pesoBaixo.style.backgroundColor = "#FAFAD2";  
        //teste 1.60 45
    }
    else if (imc > 18.4 && imc < 25){
        
        pesoNormal.style.backgroundColor = "#32CD32"; 
        //teste 1.80 75 
    }
    else if (imc >= 25 && imc < 30){
        
        pesoAcima.style.backgroundColor = "#FA8072";
        //teste 1.80 85  
    }
    else if (imc >= 30 && imc < 35){
        
        pesoObesidadeI.style.backgroundColor = "#FF7F50";  
        //teste 1.80 100
    }
    else if (imc >= 35 && imc <= 40){
        
        pesoObesidadeII.style.backgroundColor = "#FF6347";  
        //teste 1.80 120
    }
    else if (imc > 40){
        
        pesoObesidadeIII.style.backgroundColor = "#FF0000";  
        //teste 1.80 140
    }
}

function limpaFundo(){
    pesoMuitoBaixo.style.backgroundColor = "#FFF";
    pesoBaixo.style.backgroundColor = "#FFF";
    pesoNormal.style.backgroundColor = "#FFF";
    pesoAcima.style.backgroundColor = "#FFF";
    pesoObesidadeI.style.backgroundColor = "#FFF";
    pesoObesidadeII.style.backgroundColor = "#FFF";
    pesoObesidadeIII.style.backgroundColor = "#FFF";
}

function validaform (altura, peso, nome){
    if (altura.length == 0 || peso.length == 0 || nome.length == 0){
        var naofoi = true;
    }

    return naofoi;
}

function calculaImc (altura, peso){
    return (peso / (altura * altura)).toFixed(2);
}

function limpaTudo (nome, altura, peso){
    nome.value = '';
    altura.value = '';
    peso.value = '';
    
}

function imprimirRsultado (nome, imc){
    var usuario = document.querySelector("#imprimi-nome").innerHTML = `Oi ${nome}`;
    var resultado = document.querySelector("#imprimi-imc").innerHTML = `Seu imc é ${imc} kg/m2`;

}