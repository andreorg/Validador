function validation(expresion){
const RegExp = /^[A-Z]\d{3}\w{3}[!$"#%&=¿?]{3}/
    if(RegExp.test(expresion)){
        document.getElementById("rest").innerHTML = "CONTRASEÑA VALIDA"
        document.getElementById("rest2").innerHTML = "Contraseña aceptada satisfactoriamente"
    }
    else{
        document.getElementById("rest").innerHTML = "CONTRASEÑA INVALIDA"
        document.getElementById("rest2").innerHTML = "Contraseña incorrecta, intentelo otra vez"
    }
        
}