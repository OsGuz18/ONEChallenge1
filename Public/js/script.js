function encriptar () {
    var txt,txt1,txt2
    var codificado
    codificado=""
    var texto = document.getElementById("texto").value
    for(var i=0;i<=texto.length*10;i++){
        txt=texto
         if(txt.charAt(i) == "a" || txt.charAt(i) == "e" || txt.charAt(i) == "i" || txt.charAt(i) == "o" || txt.charAt(i) == "u"){
            txt1=txt.substr(0,i)
            console.log("Iteracion " + i) 
            console.log("Cadena antes de la vocal " +txt1)
            txt2=txt.substr(i+1,texto.lenght)
            console.log("Cadena despues de la vocal " + txt2)
            switch(txt.charAt(i)){
                case "a":
                    txt1=txt1 + "ai"
                    i=-1
                    break;
                case "e":
                    txt1=txt1 + "enter"
                    i=-1
                    break;
                case "i":
                    txt1=txt1 + "imes"
                    i=-1
                    break;
                case "o":
                    txt1=txt1 + "ober"
                    i=-1
                    break;
                case "u":
                    txt1=txt1 + "ufat"
                    i=-1
                    break;
            }
            texto=txt2
            console.log("Nueva longitud " + texto.length)
            codificado = codificado + txt1
            console.log("Cadena a imprimir " +codificado)
        }
    }
    codificado=codificado +txt2
    
    
    

    document.getElementById("img").style.display = "none";
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").style.display = "none";
    document.getElementById("text_result").style.display = "flex";
    document.getElementById("text_result").innerHTML=codificado;
    document.getElementById("copiar").style.display="flex";
}

function desencriptar(){
    var texto = document.getElementById("texto").value
    var decodificado = texto
    var decodificado=decodificado.replace(/ober/gi,"o")
    var decodificado=decodificado.replace(/imes/gi,"i")
    var decodificado=decodificado.replace(/ai/gi,"a")
    var decodificado=decodificado.replace(/ufat/gi,"u")
    var decodificado=decodificado.replace(/enter/gi,"e")

    document.getElementById("img").style.display = "none";
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").style.display = "none";
    document.getElementById("text_result").style.display = "flex";
    document.getElementById("text_result").innerHTML=decodificado;
    document.getElementById("copiar").style.display="flex";
}

function copiar_txt(){
    var txt_copiado=document.querySelector("#text_result")
    txt_copiado.select();
    document.execCommand("copy");
}