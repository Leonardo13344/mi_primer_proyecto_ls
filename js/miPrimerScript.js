function ocultarMostrarImg() {
    //display = none, block
    var valorDisplay = document.getElementById('idImagen').style.display;
    if (valorDisplay == 'none') {
        valorDisplay = 'block';
    } else {
        valorDisplay = 'none';
    }
    document.getElementById('idImagen').style.display = valorDisplay;



}

function encender() {
    var ValorSRC = document.getElementById('idFoco').src;
    document.getElementById('idFoco').src = '../img/encendido.png'

}

function apagar() {
    var ValorSRC = document.getElementById('idFoco').src;
    document.getElementById('idFoco').src = '../img/apagado.png'

}

function onOff() {
    var valorSrc = document.getElementById('idFoco');
    if (valorSrc.src.match("apagado.png")) {
        valorSrc = "../img/encendido.png";
    } else {
        valorSrc = "../img/apagado.png";
    }
    document.getElementById('idFoco').src = valorSrc;
}

function cambiarTextos() {
    const elementos = document.getElementsByClassName("nuevo"); //los arreglos se ponene con const
    /*
    elementos[0].innerHTML = "1er texto"
    elementos[1].innerHTML = "2do texto"
    elementos[2].innerHTML = "3er texto"
    */
    for(let valor of elementos){
        //elementos[valor].innerHTML = "A"
        valor.innerHTML = "A";
    }
}

function cambiarTextosElemento() {
    const elemnts = document.getElementsByTagName("h1")
    elemnts[0].innerHTML = "A"
    elemnts[1].innerHTML = "B"
}

/*function mOver(){
    var element = document.getElementById("div1");
    element.innerHTML = "Nuevo Texto";
    element.style.backgroundColor = "red";
    element.style.borderColor = "blue";
    element.style.color = "white";
}

function mOut(){
    var element = document.getElementById("div1");
    element.innerHTML = "Texto para nuevos eventos";
    element.style.backgroundColor = "yellow";
    element.style.borderColor = "blue";
    element.style.color = "black";
    
}*/ //Forma tradicional a un elemento en especifico

function mOver(element){
    element.innerHTML = "Nuevo Texto";
    element.style.backgroundColor = "red";
    element.style.borderColor = "blue";
    element.style.color = "white";
}

function mOut(element){
    element.innerHTML = "Texto para nuevos eventos";
    element.style.backgroundColor = "yellow";
    element.style.borderColor = "blue";
    element.style.color = "black";
}

function imprimirPersona(){
    //Declaracion de arreglos
    const colores = ["rojo", "azul", "morado"];//vector de la manera tradicional
    //Desestructuracion de arreglos
    const [c1,c2,c3] = colores;//desestructurar el vector ya creado
    console.log(c1);
    console.log(c2);
    console.log(c3);

    const[p1,p2,p3] = ["red", "yellow", "blue"];//desestructurar el vector directo
    console.log(p1);
    console.log(p2);
    console.log(p3);

    //Declaracion de objetos
    const persona = {nombre: "Leonardo", lastname: "Suniga",edad:22}

    //Desestructuracion de objetos
    const {nombre,lastname,edad} = persona;
    console.log(nombre);
    console.log(lastname);
    console.log(edad);
    
    const {nombre2, lastname2, edad2} = {nombre2: "Rafael", lastname2: "Garcia", edad2:23}
    console.log(nombre2);
    console.log(lastname2);
    console.log(edad2);
    //Objetos Compuestos
    const persona2 = {nombre: "Leonardo", lastname: "Suniga",edad:22, direccion: { calle: "America", numero:"N12-79"}}
    console.log(persona2);
}