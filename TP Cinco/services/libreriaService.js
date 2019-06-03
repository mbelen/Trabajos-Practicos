const service = {}

fav = [];

let libros = [
	{
	titulo:"Caballo de Fuego: Paris",
	autor:"Florencia Bonelli",
	idioma:"Español",
	genero:"Literatura Romantica",
	imagen:"/images/paris.jpg",
	sinopsis:"Eliah Al-Saud es un hombre excéntrico y poderoso, emparentado con la familia reinante de Arabia Saudí. Vive en París y dirige una empresa de seguridad que, en realidad, oculta actividades de defensa y de espionaje ofrecidas al mejor postor. Matilde Martínez es una joven pediatra argentina que sueña con curar a los niños más desfavorecidos y trabajar para una ong en el África. El destino la pondrá en el camino de Eliah, y será en París donde la atracción que se inspiran los unirá. Sin embargo, los secretos que ambos guardan celosamente pondrán en riesgo no sólo su amor, sino sus vidas. En el marco del siempre latente conflicto palestino-israelí y con una amenaza atómica como telón de fondo, Matilde y Eliah vivirán una aventura que los llevará a recorrer el mundo y los enfrentará a los peligros que acechan a quienes se atreven a desafiar a los imperios dominantes.",
	bookmarked: false 
	},
	{
	titulo:"Caballo de Fuego: Congo",
	autor:"Florencia Bonelli",
	idioma:"Español",
	genero:"Literatura Romantica",
	imagen:"/images/congo.jpg",
	sinopsis:"La cirujana pediátrica Matilde Martínez viaja desde París con destino al Congo guiada por una ilusión: aliviar el sufrimiento de los niños castigados por la violencia y el hambre que imperan en ese país africano. Ha dejado atrás una historia de amor difícil, que no consigue olvidar. Por su parte, el soldado profesional Eliah Al-Saud llega al Congo movido por una ambición: hacerse de una mina de coltán, el mineral más codiciado por los fabricantes de teléfonos móviles, que le redituará grandes beneficios económicos. Pero sobre todo llega al Congo para recuperar a Matilde, a quien considera la razón de su vida. Los traumas y secretos que los distanciaron en París siguen latentes y, rodeados por un contexto cruel e injusto, la reconciliación parece imposible. En el marco de la Segunda Guerra del Congo, más conocida como Guerra del Coltán, y amenazados por grupos guerrilleros de mucho poder, Matilde y Eliah intentarán por todos los medios que triunfe el amor sobre la guerra.", 
	bookmarked: false 
	},
	{
	titulo:"Caballo de Fuego: Gaza",
	autor:"Florencia Bonelli",
	idioma:"Español",
	genero:"Literatura Romantica",
	imagen:"/images/gaza.jpg",
	sinopsis:"Matilde y Eliah han vuelto a separarse. En el Congo, sus esperanzas de una vida juntos se desvanecieron al ritmo de los celos, las circunstancias hostiles y las bajezas. Matilde, cirujana pediátrica, se refugia en su pasión: el trabajo humanitario que lleva a cabo para la organización Manos Que Curan. Su nuevo destino es la Franja de Gaza, el territorio más densamente poblado del mundo, donde la consigna diaria es sobrevivir. Eliah Al- Saud se impone olvidar a Matilde y acabar con la obsesión que lo ata a ella. En Bagdad, por su parte, Saddam Hussein da los últimos retoques para alcanzar su sueño: convertir a Irak en una potencia nuclear. Y en esta carrera diabólica, Matilde y Eliah se convertirán en piezas clave, debiendo emplearse a fondo no sólo para evitar una catástrofe mundial sino también para salvar la propia vida. A un ritmo frenético y con giros inesperados, Florencia Bonelli pone fin a su exitosa trilogía Caballo de fuego, una apasionante historia donde el espíritu humano trata de imponerse en un mundo presa de la violencia y el terrorismo, aunque también lleno de bondad y solidaridad.",
	bookmarked: false 
	},
	{
	titulo:"Lo que dicen tus Ojos",
	autor:"Florencia Bonelli",
	idioma:"Español",
	genero:"Literatura Romantica",
	imagen:"/images/dicenOjos.jpg",
	sinopsis:"Apenas iniciada una brillante carrera en el diario que dirige su padrino y mentor, la joven periodista Francesca de Gecco sufre un terrible desengaño amoroso. Sólo el tiempo y la distancia podrán curar una herida tan profunda, y por eso la muchacha acepta un puesto en la embajada de su país en Ginebra. Sin embargo, esa ciudad sólo será la primera etapa de un viaje mucho más largo. Al otro lado del mundo, en los palacios más deslumbrantes del desierto de Arabia, Francesca encontrará una segunda oportunidad para ser feliz.",
	bookmarked: false 
	},
	{
	titulo:"La Templanza",
	autor:"Maria Dueñas",
	idioma:"Español",
	genero:"Literatura Romantica",
	imagen:"/images/templanza.jpg",
	sinopsis:"Nada hacía suponer a Mauro Larrea que la fortuna que había levantado tras años de tesón y arrojo se le derrumbaría con un estrepitoso revés. Ahogado por las deudas y la incertidumbre, apuesta sus últimos recursos en una temeraria jugada que abre ante él la oportunidad de resurgir. Hasta que la perturbadora Soledad Montalvo, esposa de un marchante de vinos londinense, entra en su vida envuelta en claroscuros para arrastrarle a un porvenir que jamás sospechó. De la joven república mexicana a la radiante Habana colonial; de las Antillas al Jerez de la segunda mitad del XIX, cuando el comercio de vinos con Inglaterra convirtió la ciudad andaluza en un enclave cosmopolita y legendario. Por todos estos escenarios transita La Templanza, una novela que habla de glorias y derrotas, de minas de plata, intrigas de familia, viñas, bodegas y ciudades soberbias cuyo esplendor se desvaneció en el tiempo. Una historia de coraje ante las adversidades y de un destino alterado para siempre por la fuerza de una pasión.",
	bookmarked: false 
	},
	{
	titulo:"Tiempo entre Costuras",
	autor:"Maria Dueñas",
	idioma:"Español",
	genero:"Literatura Romantica",
	imagen:"/images/tiempoCosturas.jpg",
	sinopsis:"La joven modista Sira Quiroga abandona Madrid en los meses previos a la Guerra Civil Española, arrastrada por el amor desbocado hacia un hombre a quien apenas conoce. Juntos se instalan en Tánger, una ciudad mundana, exótica y vibrante donde todo lo impensable puede hacerse realidad. Incluso, la traición y el abandono. Sola y acuciada por deudas ajenas, Sira se traslada a Tetuán, la capital del Protectorado Español en Marruecos. Con argucias inconfesables y ayudada por amistades de reputación dudosa, forja una nueva identidad y logra poner en marcha un selecto atelier en el que atiende a clientas de orígenes remotos y presentes insospechados. A partir de entonces, con la contienda española recién terminada y la Segunda Guerra Mundial a punto de comenzar, el destino de la protagonista queda ligado a un puñado de personajes históricos entre los que destacan Juan Luis Beigbeder ¿el enigmático y escasamente conocido ministro de Asuntos Exteriores del primer franquismo, su amante, la excéntrica Rosalinda Fox, y el agregado naval Alan Hillgar th, jefe de la inteligencia británica en España durante la guerra. Entre todos la empujarán hacia un arriesgado compromiso en el que las telas, las puntadas y los patrones de su oficio se convertirán en la fachada visible de algo mucho más turbio y peligroso. Escrita en una prosa espléndida, El tiempo entre costuras avanza con ritmo imparable por los mapas, la memoria y la nostalgia, y transportan al lector hasta los legendarios enclaves coloniales del norte de África, al Madrid proalemán de la inmediata posguerra y a una Lisboa cosmopolita repleta de espías, oportunistas y refugiados sin rumbo. El tiempo entre costuras es una aventura apasionante en la que los talleres de alta costura, el glamour de los grandes hoteles, las conspiraciones políticas y las oscuras misiones de los servicios secretos se funden con la lealtad a los seres queridos y con el poder irrefrenable del amor.",
	bookmarked: false 
	},
	{
	titulo:"Las Hijas del Capitan",
	autor:"Maria Dueñas",
	idioma:"Español",
	genero:"Literatura Romantica",
	imagen:"/images/hijasCapitan.jpg",
	sinopsis:"Nueva York, 1936. La pequeña casa de comidas El Capitán arranca su andadura en la calle Catorce, uno de los enclaves de la colonia española que por entonces reside en la ciudad. La muerte accidental de su dueño, el tarambana Emilio Arenas, obliga a sus indomables hijas veinteañeras a tomar las riendas del negocio mientras en los tribunales se resuelve el cobro de una prometedora indemnización. Abatidas y acosadas por la urgente necesidad de sobrevivir, las temperamentales Victoria, Mona y Luz Arenas se abrirán paso entre rascacielos, compatriotas, adversidades y amores, decididas a convertir un sueño en realidad. De lectura tan ágil y envolvente como conmovedora, Las hijas del Capitán despliega la historia de tres jóvenes españolas que se vieron obligadas a cruzar un océano, se asentaron en una urbe deslumbrante y lucharon con arrojo para encontrar su camino. Un tributo a las mujeres que resisten cuando los vientos soplan en contra y un homenaje a todos aquellos valientes que vivieron -y viven- la aventura, a menudo épica y casi siempre incierta, de la emigración.",
	bookmarked: false 
	},
	{
	titulo:"Mision Olvido",	
	autor:"Maria Dueñas",
	idioma:"Español",
	genero:"Literatura Romantica",
	imagen:"/images/misionOlvido.jpg",
	sinopsis:"Misión Olvido cruza fronteras y tiempos para hablarnos de pérdidas, coraje, segundas oportunidades y reconstrucción. Una historia luminosa a caballo entre los años cincuenta y el fin del siglo XX que transita por España y California desplegando intrigas imprevistas, amores entrecruzados y personajes cargados de pasión y humanidad. Tres años después de la publicación de El tiempo entre costuras, vuelvo a llamar a las puertas de los lectores con la historia y la voz de una mujer. Una mujer contemporánea cuya estabilidad aparentemente invulnerable ha saltado de pronto por los aires. Se llama Blanca Perea y ha decidido huir.",
	bookmarked: false 
	},
	{
	titulo:"Pride and Prejudice",
	autor:"Jane Austen",
	idioma:"Ingles",
	genero:"Literatura Romantica",
	imagen:"/images/pridePrejudice.png",
	sinopsis:"«Es una verdad universalmente aceptada que todo soltero en posesión de una gran fortuna necesita una esposa.» Así empieza Orgullo y prejuicio, una de las primeras comedias románticas de la historia de la novela, publicada, por primera vez, el 28 de enero de 1813. El señor y la señora Bennett tienen cinco hijas, y el único objetivo de la madre es conseguir una buena boda para todas. Dos jóvenes ricos, el señor Bingley y el señor Darcy, aparecen en ese ambiente e inmediatamente se ven señalados como posibles maridos",
	bookmarked: false 
	},
	{
	titulo:"Sense and Sensibility",
	autor:"Jane Austen",
	idioma:"Ingles",
	genero:"Literatura Romantica",
	imagen:"/images/senseSensibility.png",
	sinopsis:"En Sentido y sensibilidad Jane Austen explora con sutileza e ironía las opciones de la mujer en una sociedad rígida, donde el éxito o el fracaso dependen de la elección del marido. La historia se centra en dos hermanas, Elinor y Marianne, cuyas personalidades antagónicas ejemplifican las dos posibles respuestas femeninas ante la hipocresía dominante: el «sentido común» y la «sensibilidad». Sin embargo, tanto un camino como el otro entrañan sus peligros.",
	bookmarked: false 
	},
	{
	titulo:"Emma",
	autor:"Jane Austen",
	idioma:"Ingles",
	genero:"Literatura Romantica",
	imagen:"/images/emma.png",
	sinopsis:"Emma cuenta la historia de una inteligente y la¬boriosa joven empeñada en hacer de Celestina de todas sus amistades. Cuando su institutriz, amiga y confidente decide contraer matrimonio, Emma Woodhouse se queda sola y se enfrenta al vacío de su vida y a la peno¬sa tarea de intentar que los demás lleven una vida perfecta. Todos sus trabajos de manipulación sentimental crean a su alrededor una telaraña de enredos, malentendidos y confusiones que terminan poniendo a prueba su confianza en sí misma.",
	bookmarked: false
	},
	{
	titulo:"Mansfield Park",
	autor:"Jane Austen",
	idioma:"Ingles",
	genero:"Literatura Romantica",
	imagen:"/images/mansfieldPark.png",
	sinopsis:"Fanny Price es aún una niña cuando sus tíos la acogen en su mansión de Mansfield Park y la rescatan de una vida de estrecheces y necesidades. Allí conocerá un mundo de ocio y de refinamiento en el que las inocentes diversiones alimentarán maquinaciones y estrategias de seducción. Ese mundo oculta una verdad peligrosa, y sólo Fanny, desde su sumiso silencio, será capaz de atisbar sus consecuencias y amenazas.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter y la Piedra Filosofal",
	autor:"J. K. Rowling",
	idioma:"Español",
	genero:"Ficcion",
	imagen:"/images/hp1.png",
	sinopsis:"Harry vive con sus horribles tios y el insoportable primo Dudley, hasta que su ingreso en el Colegio Hogwarts de Magia y Hechiceria cambia su vida para siempre. Alli aprendera trucos y encantamientos fabulosos, y hara un punado de buenos amigos... aunque tambien algunos temibles enemigos. Y, sobre todo, conocera los secretos que lo ayudaran a cumplir con su destino.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter y la Camara de los Secretos",
	autor:"J. K. Rowling",
	idioma:"Español",
	genero:"Ficcion",
	imagen:"/images/hp2.jpg",
	sinopsis:"Mientras Harry espera impaciente en casa de sus insoportables tios el inicio del segundo curso del Colegio Hogwarts de Magia y Hechiceria, un elfo aparece en su habitacion y le advierte de que una amenaza mortal se cierne sobre la escuela. Harry no se lo piensa dos veces y, acompanado de Ron, se dirige a Hogwarts en un coche volador. Alli, Harry oye extranos susurros en los pasillos desiertos y, de pronto... los ataques comienzan. La siniestra prediccion del elfo parece hacerse realidad.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter y el Prisionero de Azkaban",
	autor:"J. K. Rowling",
	idioma:"Español",
	genero:"Ficcion",
	imagen:"/images/hp3.jpg",
	sinopsis:"De la prision de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie que fue complice de lord Voldemort y que, dicen los rumores, quiere vengarse de Harry por haber destruido a su maestro. Por si esto fuera poco, entran en accion los dementores, unos seres abominables capaces de robarles la felicidad a los magos y de eliminar todo recuerdo hermoso de aquellos que se atreven a acercarseles. El desafio es enorme, pero Harry, Ron y Hermione son capaces de enfrentarse a todo esto y mucho mas.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter y el Caliz de Fuego",
	autor:"J. K. Rowling",
	idioma:"Español",
	genero:"Ficcion",
	imagen:"/images/hp4.jpg",
	sinopsis:"Otro deplorable verano con los Dursley llega a su fin y Harry esta impaciente por regresar a Hogwarts. A sus catorce anos, solo desea ser un joven mago como los demas y dedicarse a aprender nuevos sortilegios y asistir a los Mundiales de quidditch. Sin embargo, en Hogwarts le espera un desafio de grandes proporciones, por lo que tendra que demostrar que ya no es un nino y que esta preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter y la Orden del Fenix",
	autor:"J. K. Rowling",
	idioma:"Español",
	genero:"Ficcion",
	imagen:"/images/hp5.jpg",
	sinopsis:"Las vacaciones de verano aun no han acabado y Harry se encuentra mas inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extrano esta sucediendo en Hogwarts. No bien empieza el nuevo curso, sus temores se vuelven realidad: el Ministerio de Magia ha iniciado una campana de desprestigio contra el y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar sus movimientos. Y por si fuera poco, Harry sospecha que Voldemort es capaz de adivinar sus pensamientos con el fin de apoderarse de un objeto secreto que le permitiria recuperar su poder destructivo.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter y el Misterio del Principe",
	autor:"J. K. Rowling",
	idioma:"Español",
	genero:"Ficcion",
	imagen:"/images/hp6.jpg",
	sinopsis:"En medio de graves acontecimientos que asolan el pais, Harry inicia su sexto curso en Hogwarts. El equipo de quidditch, los examenes y las chicas lo mantienen ocupado, pero la tranquilidad dura poco. A pesar de los ferreos controles de seguridad, dos alumnos son brutalmente atacados. Dumbledore sabe que, tal como se anunciaba en la Profecia, Harry y Voldemort han de enfrentarse a muerte. Asi pues, para intentar debilitar al enemigo, el anciano director y el joven mago emprenderan juntos un peligroso viaje con la ayuda de un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar Principe Mestizo.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter y las Reliquias de la Muerte",
	autor:"J. K. Rowling",
	idioma:"Español",
	genero:"Ficcion",
	imagen:"/images/hp7.jpg",
	sinopsis:"La fecha crucial se acerca. Cuando cumpla los diecisiete, Harry perdera el encantamiento protector que lo mantiene a salvo. El anunciado combate a muerte con Voldemort es inminente, y la casi imposible mision de encontrar y destruir los Horrocruxes restantes es mas urgente que nunca. Ha llegado el momento de tomar las decisiones mas dificiles. Harry debe abandonar la calidez y seguridad de La Madriguera para emprender sin miedo ni vacilaciones el inexorable sendero trazado para el. Consciente de lo mucho que esta en juego, solo dentro de si mismo encontrara la fuerza que lo impulsara en la vertiginosa carrera hacia un destino desconocido.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter and the Philosopher´s Stone",
	autor:"J. K. Rowling",
	idioma:"Ingles",
	genero:"Ficcion",
	imagen:"/images/hp1.jpeg",
	sinopsis:"Harry vive con sus horribles tios y el insoportable primo Dudley, hasta que su ingreso en el Colegio Hogwarts de Magia y Hechiceria cambia su vida para siempre. Alli aprendera trucos y encantamientos fabulosos, y hara un punado de buenos amigos... aunque tambien algunos temibles enemigos. Y, sobre todo, conocera los secretos que lo ayudaran a cumplir con su destino.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter and the Chamber of Secrets",
	autor:"J. K. Rowling",
	idioma:"Ingles",
	genero:"Ficcion",
	imagen:"/images/hp2.jpeg",
	sinopsis:"Mientras Harry espera impaciente en casa de sus insoportables tios el inicio del segundo curso del Colegio Hogwarts de Magia y Hechiceria, un elfo aparece en su habitacion y le advierte de que una amenaza mortal se cierne sobre la escuela. Harry no se lo piensa dos veces y, acompanado de Ron, se dirige a Hogwarts en un coche volador. Alli, Harry oye extranos susurros en los pasillos desiertos y, de pronto... los ataques comienzan. La siniestra prediccion del elfo parece hacerse realidad.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter and the Prisoner of Azkaban",
	autor:"J. K. Rowling",
	idioma:"Ingles",
	genero:"Ficcion",
	imagen:"/images/hp3.jpeg",
	sinopsis:"De la prision de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie que fue complice de lord Voldemort y que, dicen los rumores, quiere vengarse de Harry por haber destruido a su maestro. Por si esto fuera poco, entran en accion los dementores, unos seres abominables capaces de robarles la felicidad a los magos y de eliminar todo recuerdo hermoso de aquellos que se atreven a acercarseles. El desafio es enorme, pero Harry, Ron y Hermione son capaces de enfrentarse a todo esto y mucho mas.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter and the Goblet of Fire",
	autor:"J. K. Rowling",
	idioma:"Ingles",
	genero:"Ficcion",
	imagen:"/images/hp4.jpeg",
	sinopsis:"Otro deplorable verano con los Dursley llega a su fin y Harry esta impaciente por regresar a Hogwarts. A sus catorce anos, solo desea ser un joven mago como los demas y dedicarse a aprender nuevos sortilegios y asistir a los Mundiales de quidditch. Sin embargo, en Hogwarts le espera un desafio de grandes proporciones, por lo que tendra que demostrar que ya no es un nino y que esta preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter and the Order of the Phoenix",
	autor:"J. K. Rowling",
	idioma:"Ingles",
	genero:"Ficcion",
	imagen:"/images/hp5.jpeg",
	sinopsis:"Las vacaciones de verano aun no han acabado y Harry se encuentra mas inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extrano esta sucediendo en Hogwarts. No bien empieza el nuevo curso, sus temores se vuelven realidad: el Ministerio de Magia ha iniciado una campana de desprestigio contra el y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar sus movimientos. Y por si fuera poco, Harry sospecha que Voldemort es capaz de adivinar sus pensamientos con el fin de apoderarse de un objeto secreto que le permitiria recuperar su poder destructivo.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter and the Half-Blood Prince",
	autor:"J. K. Rowling",
	idioma:"Ingles",
	genero:"Ficcion",
	imagen:"/images/hp6.jpeg",
	sinopsis:"En medio de graves acontecimientos que asolan el pais, Harry inicia su sexto curso en Hogwarts. El equipo de quidditch, los examenes y las chicas lo mantienen ocupado, pero la tranquilidad dura poco. A pesar de los ferreos controles de seguridad, dos alumnos son brutalmente atacados. Dumbledore sabe que, tal como se anunciaba en la Profecia, Harry y Voldemort han de enfrentarse a muerte. Asi pues, para intentar debilitar al enemigo, el anciano director y el joven mago emprenderan juntos un peligroso viaje con la ayuda de un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar Principe Mestizo.",
	bookmarked: false 
	},
	{
	titulo:"Harry Potter and the Deathly Hallows",
	autor:"J. K. Rowling",
	idioma:"Ingles",
	genero:"Ficcion",
	imagen:"/images/hp7.jpeg",
	sinopsis:"La fecha crucial se acerca. Cuando cumpla los diecisiete, Harry perdera el encantamiento protector que lo mantiene a salvo. El anunciado combate a muerte con Voldemort es inminente, y la casi imposible mision de encontrar y destruir los Horrocruxes restantes es mas urgente que nunca. Ha llegado el momento de tomar las decisiones mas dificiles. Harry debe abandonar la calidez y seguridad de La Madriguera para emprender sin miedo ni vacilaciones el inexorable sendero trazado para el. Consciente de lo mucho que esta en juego, solo dentro de si mismo encontrara la fuerza que lo impulsara en la vertiginosa carrera hacia un destino desconocido.",
	bookmarked: false 
	}
	];


service.libros = function(){
	return libros
}

service.fav = function(){
	return fav
}

service.crearfav = function(bookmarked){
	var repetido = fav.indexOf(bookmarked);
	if(repetido >= 0){
        fav.splice(repetido, 1);
 	}else{
       	fav.push(bookmarked);
	}
	for(i=0;i<libros.length;i++){
		libros[i].bookmarked=false;
	}
	
	for(i=0;i<fav.length;i++){
		for(j=0;j<libros.length;j++){
			if(libros[j].titulo===fav[i]){
	 			libros[j].bookmarked=true;
 			}
	 	}
	}
}

service.buscar = function(item){
	for(i=0;i<libros.length;i++){
		if(item===libros[i].titulo){
			var libro=libros[i];
		}
	}return libro
}

module.exports = service;