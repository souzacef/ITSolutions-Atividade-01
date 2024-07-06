window.onload=function(){
    document.getElementById("altura").addEventListener("focusout",function(){
       peso = document.getElementById("peso").value;
       altura = document.getElementById("altura").value;

       resultado = (parseFloat(peso) 
       / ((parseFloat(altura) / 100) * (parseFloat(altura) / 100)))
       .toFixed(2);

       document.getElementById("resultado").value = resultado;

       if(resultado < 18.5) {
        document.getElementById("classificacao").value = "Abaixo do peso";
       }else if(resultado >= 18.5 && resultado < 24.9) {
        document.getElementById("classificacao").value="Peso normal";
       }else if(resultado >= 25 && resultado < 29.9) {
        document.getElementById("classificacao").value="Sobrepeso";
       }else{
        document.getElementById("classificacao").value="Obesidade";
       }     

    })
}

document.getElementById("limpar").addEventListener("click", function(){
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("classificacao").value = "";
})