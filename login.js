function loggear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="Juan" && pass=="1234"){
        window.location="Bienvenido.html";
    }else{
        alert("Datos incorrectos");
    }
}