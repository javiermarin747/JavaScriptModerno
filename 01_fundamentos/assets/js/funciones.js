

function saludar( nombre ){
    console.log('Hola '+ nombre);
}

const saludar2= function(){
    console.log('Hola2');
}

const saludar3 = (nombre) => {
    console.log('Hola Flecha '+ nombre);
}

saludar();
saludar2();

saludar('Javi');
saludar3('Juan');