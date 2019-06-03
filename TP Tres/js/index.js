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

// variables globales necesarias 
var match1 = ''; //ficha seleccionada 1
var match2 = '';// ficha seleccionada 2
var contSel = 0; // numero de fichas seleccionadas
var delay = 1200 // variable para que la imagen llegue a verse al darla vuelta (1.2 segundos)
var intentos = 0; // variable para contar la cantidad de intentos
var valueDif = ''; 
var selDificultad = '';
var datosGuardados;
var jugadas;


//Traigo el div del juego, y le apendeo una seccion para el armado del tablero
var memotest = document.getElementById('memotest');
var tablero = document.createElement('section');
tablero.setAttribute('class', 'tablero');
memotest.appendChild(tablero);



function inicio (){
    //Para que el jugador ponga su nombre y se cargue en el tablero
    var nombre = prompt("Nombre del jugador");
    if (nombre != null){
    var respuesta = document.getElementById('nombre');
    respuesta.innerHTML =  nombre
    if (nombre == ''){
        var nombre = 'Anonimo'
        var respuesta = document.getElementById('nombre');
        respuesta.innerHTML =  nombre 
    }
    } else {
        var nombre = 'Anonimo'
        var respuesta = document.getElementById('nombre');
        respuesta.innerHTML =  nombre
    }
}

inicio();

function guardarJugada(){
    if(localStorage.getItem('jugadas')!=null){
        jugadas=JSON.parse(localStorage.getItem("jugadas")).jugadas;
    } 
    else{
        jugadas=[];
    }

    var respuesta = document.getElementById('nombre').innerHTML;
    let jugada={nombre: respuesta, complejidad: selDificultad, intentosUsados: intentos};

    jugadas.push(jugada);   
   
    
   jsonJugadas={
        'jugadas':jugadas,
        'total':jugadas.length
   }

   let data=JSON.stringify(jsonJugadas);
   localStorage.setItem('jugadas',data);
    //localStorage.clear();
    console.log(localStorage.getItem('jugadas'))
}

function empezarJuego() {
            
    //console.log (selDificultad)
    //.one -- desabilitar button
    $(':radio:not(:checked)').attr('disabled', true);

    //Duplicar el array dentro de una variable para tener dos piezas de cada uno y hacer random de ubicaciones
    var tableroArmado = piezas.concat(piezas).sort(function(){
        return 0.5 - Math.random();
    });
    
    //Por cada objeto creo una pieza y las apendeo al tablero 
    tableroArmado.forEach(function (e){
        var personaje = e.personaje,
            img = e.img;
    
        var pieza = document.createElement('div');
        pieza.classList.add('pieza');
        pieza.dataset.personaje = personaje;
    
        //a cada pieza le agrego las clases para dar vuelta
        var front = document.createElement('div');
        front.classList.add('front');
    
        var back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = 'url(' + img + ')'; 
    
        tablero.appendChild(pieza);
        pieza.appendChild(front);
        pieza.appendChild(back);
        
    });
    
    // Funcion para modificar la clase a macheada y que aparezca la imagen de steven
    var match = function match() {
        var marcada = document.querySelectorAll('.marcada');
        marcada.forEach(function (pieza) {
            pieza.classList.add('animated');
            pieza.classList.add('pulse');
            pieza.classList.add('match');
        });
      };
    
    //Funcion para poder seguir seleccionando fichas y que no quede trabada despues de la primera seleccion
    var resetMacheo = function resetMacheo(){
        match1 = '';
        match2 = '';
        contSel = 0;
        
        var marcada = document.querySelectorAll('.marcada');
        marcada.forEach(function (pieza) {
            pieza.classList.remove('marcada');
        }); // remueve la clase si no coinciden 
        
    };


    // Aplico un listener al tablero para que al seleccionar un elemento, se aplique la clase
    tablero.addEventListener('click', function (event) {

        var clicked = event.target;
        
        // este if hace que se especifique que elemento se selecciona y que no seleccione el tablero en si. 
        if (clicked.nodeName === 'SECTION' || clicked.parentNode.classList.contains('marcada') || clicked.parentNode.classList.contains('match')) {
        return;
        }
        // si el contador es menor a dos se puede seleccionar, sino no.
        if (contSel < 2) {
        contSel++;
        if (contSel === 1) {
            match1 = clicked.parentNode.dataset.personaje;  // primer macheo, le pongo la clase marcada
            //console.log(match1);
            clicked.parentNode.classList.add('marcada');
        } else {
            match2 = clicked.parentNode.dataset.personaje; // se la aplico tambien a la segunda 
        // console.log(match2);
            clicked.parentNode.classList.add('marcada');
        }
    
        // Si ambas fichas tienen datos guardados, y son iguales se machea y se resetea para seguir
        if (match1 && match2) {
            if (match1 === match2) {
            setTimeout(match, delay);// llama a la funcion y le aplica un delay 
            }
            setTimeout(resetMacheo, delay); // llama a la funcion con un efecto delay
        }
        // contador de intentos cada dos fichas dadas vuelta
            if (contSel==2){
                intentos++
               console.log("cantidad de intentos " + intentos);
                var mostrarIntento = document.getElementById('intentos');
                mostrarIntento.innerHTML = 'Cantidad de intentos: ' + (intentos);
            }
        }

        switch (selDificultad) {
            case 'Facil':
           var intentosPos = 17
                
                break;
            case 'Intermedio':
            var intentosPos = 11
                
                break;
            case 'Experto':
            var intentosPos = 7
                break;
        
            default:
            var intentosPos = 0
                break;
        }
        console.log('intentos posibles: ' + intentosPos);
        
        if (intentos < intentosPos) {
            //Si se hacen todo los match, sale mensaje de ganaste
            if (match1===match2){
                var macheadas = document.getElementsByClassName('match');
                console.log ('macheadas:' + macheadas);
                console.log('lengh:' + macheadas.length)
                if (macheadas.length == 10) {
                    var snd = new Audio('audio/audio.mp3');
                    snd.play(); // reproduce cancion al ganar
                    setTimeout (function(){
                        alert("Felicidades!!! Ganaste!!!"); }, 2000);
                        guardarJugada()
                        setTimeout (function() {window. location.reload(); }, 2000);
                    //setTimeout (function() {location.reload(); }, 4000); //resetea el juego para jugar de nuevo
            } 
        }
        }
        if (intentos > intentosPos){
            var macheadas = document.getElementsByClassName('match');
                if (macheadas.length != 10){
                setTimeout (function(){ alert("Perdiste! Podes volver a intentar!"); }, 1000)
                setTimeout (function() {window. location.reload(); }, 1500);
                 //resetea el juego pra jugar de nuevo
                } else {var snd = new Audio('audio/audio.mp3');
                snd.play(); // reproduce cancion al ganar
                setTimeout (function(){
                    alert("Felicidades!!! Ganaste!!!"); }, 2000);}
                    guardarJugada()
                    setTimeout (function() {window. location.reload(); }, 2000);
            }
                // Si los intentos son mayores a 24, te avisa que perdiste y se resetea el tablero
                
            });
}
    $("#btn").on("click", function chequeo () {
        selDificultad = $('input:radio[name=dificultad]:checked').val()

        switch (selDificultad) {
            case 'Facil':
            $('#btn').attr("disabled", true); // deshabilita el boton al iniciar el juego
            $('#btn').addClass('hide'); // desaparece el boton al comenzar el juego
            var intentosPos = 18;
           empezarJuego ()
                
                break;
            case 'Intermedio':
            $('#btn').attr("disabled", true);
            $('#btn').addClass('hide');
            var intentosPos = 12;
    
            empezarJuego ()
            
                
                break;
            case 'Experto':
            $('#btn').attr("disabled", true);
            $('#btn').addClass('hide');
            var intentosPos = 8;
        
            empezarJuego ()

                break;
        
            default:
            alert('Seleccionar dificultad')
                break;
        }
    }  
);   

