const boton3 = document.querySelector('#trabajar');//no existe

console.log(boton3);//null

if(boton3){
    alert("El elemento existe en el DOM");
}else{
    alert("El elemento NO existe en el DOM");
}

/* EVENTOS */
//1.- capturar el elemento
const boton_clickear = document.querySelector('#clickear');
//2.- validar si existe, 

if(boton_clickear){
    //3.- capturar el evento
    boton_clickear.addEventListener('click',function(){
        alert("¡Botón clickeado!");

    });

    boton_clickear.addEventListener('mouseover', function() {
        console.log('El mouse está sobre el botón');
    });
}

let input_nombre = document.querySelector('#nombre');//1

if(input_nombre){//2
    input_nombre.addEventListener('change',function(){//3
        alert("input cambio...");
    });
}