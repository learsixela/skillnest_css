        /*agregar elementos al DOM appendChild()*/
        let nuevoParrafo = document.createElement('p');//crear el elemento p
        nuevoParrafo.textContent = 'Este es un párrafo agregado dinámicamente.';
        document.body.appendChild(nuevoParrafo);
        let estilo = nuevoParrafo.style.color;

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
        if(nuevoParrafo.style.color ==""){
            nuevoParrafo.setAttribute('style','color: red;');
        }else{
            nuevoParrafo.style.color ="";
        }
        document.body.style.backgroundColor='black';
        
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