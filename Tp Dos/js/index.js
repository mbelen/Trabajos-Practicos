//creo un array de objetos, cada objeto tiene un nombre de personaje y parte de la ruta de cada archivo

var piezas = [{
    'personaje': 'steven',
    'img': 'img/steven.png'
},{
    'personaje': 'perla',
    'img': 'img/perla.png'
},{
    'personaje': 'amatista',
    'img': 'img/amatista.png'
},{
    'personaje': 'garnet',
    'img': 'img/garnet.png'
},{
    'personaje': 'connie',
    'img': 'img/connie.png'
},{
    'personaje': 'dad',
    'img': 'img/dad.png'
}]

//duplicar el array para tener dos piezas de cada uno y hacer random de ubicaciones
var tableroArmado = piezas.concat(piezas).sort(function(){
    return 0.5 - Math.random();
});

var match1 = ''; //ficha seleccionada 1
var match2 = '';// ficha seleccionada 2
var contSel = 0; // numero de fichas seleccionadas
var previousTarget = null // creo una variable para no poder seleccionar dos veces la misma ficha
var delay = 1200 // variable para que la imagen llegue a verse al darla vuelta (1 segundo)
var macheadas = 0;
var intentos = 0;
//traigo el div del juego, y le apendeo una seccion para el armado del tablero

var memotest = document.getElementById('memotest');
var tablero = document.createElement('section');
tablero.setAttribute('class', 'tablero');
memotest.appendChild(tablero);

// por cada objeto creo una ficha y las apendeo al tablero 

tableroArmado.forEach(function (item){
    var personaje = item.personaje,
        img = item.img;


    var pieza = document.createElement('div');
    pieza.classList.add('pieza');
    pieza.dataset.personaje = personaje;

    var front = document.createElement('div');
    front.classList.add('front');

    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';

    tablero.appendChild(pieza);
    pieza.appendChild(front);
    pieza.appendChild(back);

});

// Funcion para modificar la clase a macheada y que desaparezca la imagen 
var match = function match() {
    var marcada = document.querySelectorAll('.marcada');
    marcada.forEach(function (pieza) {
      pieza.classList.add('match');
    });
  };

//Funcion para poder seguir seleccionando fichas y que no quede trabada despues de la primera seleccion
var resetMacheo = function resetMacheo(){
    match1 = '';
    match2 = '';
    contSel = 0;
    arregloHack = null;
    

    var marcada = document.querySelectorAll('.marcada');
    marcada.forEach(function (pieza) {
    pieza.classList.remove('marcada');
  }); // remueve la clase si no coinciden 
};

/*

// We’ll add an event listener to the entire grid. Anytime an element is clicked, the selected class will be applied to it
tablero.addEventListener('click', function (event){

    var clicked = event.target;

      // Do not allow the grid section itself to be selected; only select divs inside the grid
    if (clicked.nodeName === 'SECTION'|| clicked === previousTarget || clicked.parentNode.classList.contains('marcada') || clicked.parentNode.classList.contains('match')) {para que no se peuda hacer doble click sobre una misma imagen
        return; 
    }
  
    // si el contador es menor a dos se puede seleccionar, sino no.
    if (contSel <2) {
        contSel ++; 
        if (contSel === 1) {
            // primer macheo, le pongo la clase marcada
            match1 = clicked.parentNode.dataset.personaje;
            clicked.classList.add('marcada');
          } else {
            // se la aplico tambien a la segunda 
            match2 = clicked.parentNode.dataset.personaje;
            clicked.classList.add('marcada');
          }
          // Si ninguna opcion esta vacia, y son iguales
          if (match1 && match2) {
             if (match1 === match2) {
                 setTimeout(match, delay); // llama a la funcion y le aplica un delay 
                 //setTimeout(resetMacheo, delay);
            } else {
                setTimeout(resetMacheo, delay); // llama a la funcion con un efecto delay
            }
          } 
          arregloHack = clicked;
        }
      });
*/

//Que el jugador ponga su nombre y se cargue en el tablero
var nombre = prompt("Nombre del jugador");
var respuesta = document.getElementById('nombre');
respuesta.innerHTML = 'Nombre de jugador: ' + nombre 
 
//
tablero.addEventListener('click', function (event) {

    var clicked = event.target;
  
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('marcada') || clicked.parentNode.classList.contains('match')) {
      return;
    }
  
    if (contSel < 2) {
      contSel++;
      if (contSel === 1) {
        match1 = clicked.parentNode.dataset.personaje;
        //console.log(match1);
        clicked.parentNode.classList.add('marcada');
      } else {
        match2 = clicked.parentNode.dataset.personaje;
       // console.log(match2);
        clicked.parentNode.classList.add('marcada');
      }
  
      if (match1 && match2) {
        if (match1 === match2) {
          setTimeout(match, delay);
        }
        setTimeout(resetMacheo, delay);
      }
      previousTarget = clicked;
    }

    
  
// contador de intentos cada dos fichas dadas vuelta

    if (contSel>1){
        intentos++
        console.log(intentos);
        var mostrarIntento = document.getElementById('intentos');
        mostrarIntento.innerHTML = 'Cantidad de intentos: ' + (24 - intentos);
    }
    
    //Si se hacen todo los match, sale mensaje de ganaste
    if (match1===match2){
        macheadas ++
        console.log (macheadas);
        
            if (macheadas == 6) {
                setTimeout (function(){ alert("Felicidades!!! Ganaste!!!"); }, 2000)
            }
    
}

  // Si los intentos son mayores a 24, te avisa que perdiste y se resetea el tablero
    if (intentos > 23 && macheadas != 6){
        setTimeout (function(){ alert("Perdiste! Podes volver a intentar!"); }, 1000)
        setTimeout (function() {location.reload(); }, 1500);
    }
    
});
  
