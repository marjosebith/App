/*Bienvenida*/
const bienvenida = document.querySelector('.welcome');
/*Iniciar Juego*/
const btnJugar= document.querySelector('.play');
/*Botones musica y pelicula*/
const btnMusica= document.querySelector('.music');
const btnPeliculas= document.querySelector('.peli');
/*Seccion para elegir entre música y película*/
const elegir = document.querySelector('.musicypeli');
/*Musica*/
const btnMostrarSegundaPregunta = document.querySelector('.first-question .btn--next');
const btnMostrarTerceraPregunta = document.querySelector('.second-question .btn--next');
/*Secciones donde estan las preguntas sobre música*/
const primeraPregunta = document.querySelector('.first-question');
const segundaPregunta = document.querySelector('.second-question');
const terceraPregunta = document.querySelector('.third-question');
const subPrimeraPregunta= document.querySelector('.header__subtitle');
const subSegundaPregunta= document.querySelector('.header__subtitle1');
const subTerceraPregunta= document.querySelector('.header__subtitle2');

const btnVerResultados = document.querySelector('.result')
const btnRegresar= document.querySelector('.regresar');
const btnRegresarInicio= document.querySelector('.regresar__inicio');
/*Preguntas sobre peliculas*/
const peliculaPrimeraPregunta = document.querySelector('.four-question');
const peliculaSegundaPregunta = document.querySelector('.five-question');
const peliculaTerceraPregunta = document.querySelector('.six-question');
/*Botones de pelicula*/
const btnMostrarSegundaPreguntaPelicula = document.querySelector('#btn21');
const btnMostrarTerceraPreguntaPelicula = document.querySelector('#btn22');
const btnVerResultadosPelicula = document.querySelector('#btn23');

const btnRegresarElegir = document.querySelector('#btn21_1');
const btnRegresarPrimeraPreguntaPelicula = document.querySelector('#btn22_1');
const btnRegresarInicioDesdePelicula = document.querySelector('#btn23_1');

const btnRegresarInicioDesdeElegir = document.querySelector('#btn18');
const btnRegresarElegirDesdePriMus = document.querySelector('#btn19');
const btnRegresarUltimaPregMusic= document.querySelector('#btn20');

const btnRegresarUltimaPregPelicula= document.querySelector('#btn23_2');

btnJugar.addEventListener('click', mostrarSaludo);

function mostrarSaludo(){
  const nombre = document.querySelector('input[name="name"]').value;
  alert('Hola '+ nombre);
  bienvenida.classList.add('inactive');
  elegir.classList.remove('inactive');
}

btnRegresarInicioDesdeElegir.addEventListener('click', mostrarBienvenidaDesdeElegir);

function mostrarBienvenidaDesdeElegir(){
  elegir.classList.add('inactive');
  bienvenida.classList.remove('inactive');
}

btnMusica.addEventListener('click', mostrarPrimeraPregunta);

 function mostrarPrimeraPregunta(){
  primeraPregunta.classList.remove('inactive');
  subPrimeraPregunta.classList.remove('inactive');
  elegir.classList.add('inactive');
}

btnRegresarElegirDesdePriMus.addEventListener('click', mostrarElegirDesdePriMus);

 function mostrarElegirDesdePriMus(){
  primeraPregunta.classList.add('inactive');
  subPrimeraPregunta.classList.add('inactive');
  elegir.classList.remove('inactive');
}

btnMostrarSegundaPregunta.addEventListener('click', mostrarSegundaPregunta);

function mostrarSegundaPregunta(){
  primeraPregunta.classList.add('inactive');
  subPrimeraPregunta.classList.add('inactive');
  segundaPregunta.classList.remove('inactive');
  subSegundaPregunta.classList.remove('inactive');
}

btnMostrarTerceraPregunta.addEventListener('click', mostrarTerceraPregunta);

function mostrarTerceraPregunta(){
  segundaPregunta.classList.add('inactive');
  subSegundaPregunta.classList.add('inactive');
  terceraPregunta.classList.remove('inactive');
  subTerceraPregunta.classList.remove('inactive');
}

btnRegresarUltimaPregMusic.addEventListener('click', mostrarSegDesdeTerMusic);

function mostrarSegDesdeTerMusic(){
  terceraPregunta.classList.add('inactive');
  subTerceraPregunta.classList.add('inactive');
  segundaPregunta.classList.remove('inactive');
  subSegundaPregunta.classList.remove('inactive');
}

/*function alerta(){
  const respuestaUno = document.querySelector('input[name="pregunta1"]:checked').value;
  alert(respuestaUno);
}

function alerta1(){
   const respuestaDos = document.querySelector('input[name="pregunta2"]:checked').value;
  alert(respuestaDos);
}*/

btnVerResultados.addEventListener('click', resultado); 

function resultado(){
  const usuRptaUno = document.querySelector('input[name="pregunta1"]:checked').value;
  const usuRptaDos = document.querySelector('input[name="pregunta2"]:checked').value;
  const usuRptaTres = document.querySelector('input[name="pregunta3"]:checked').value;
  const respuestaUno = "opcion2";
  const respuestaDos = "opcion4";
  const respuestaTres = "opcion8";  
  const mensajeEsCorrecto = 'La respuesta es correcta';
  const mensajeEsIncorrecto = 'La respuesta es incorrecta';
  const puntajeCorrecto = 5;
  const puntajeIncorrecto = 1;
  let puntajeTotal;
  let resultado;
  
  if(usuRptaUno == respuestaUno){    
    resultado = `1. ${mensajeEsCorrecto} : "Back in Black"  ¡Felicidades!🎉 `;    
    puntajeTotal = puntajeCorrecto;
    
  } else {
    resultado = `1. ${mensajeEsIncorrecto} : Intentalo de nuevo 🙌`;
    puntajeTotal= puntajeIncorrecto;
  }
  
  if(usuRptaDos == respuestaDos){
    resultado = `${resultado} 
    2. ${mensajeEsCorrecto} : Adivinaste la canción  ¡Felicidades!🎉 `;
    
    puntajeTotal = puntajeTotal +  puntajeCorrecto
     
  } else {
    resultado = `${resultado} 
    2. ${mensajeEsIncorrecto} : Intentalo de nuevo 🙌 `;
    
    puntajeTotal = puntajeTotal + puntajeIncorrecto;
  }
  
  if(usuRptaTres == respuestaTres){
    resultado = `${resultado} 
    3. ${mensajeEsCorrecto} : Adivinaste la canción  ¡Felicidades!🎉 `;
    
    puntajeTotal = puntajeTotal +  puntajeCorrecto
    
  } else {
    resultado = `${resultado} 
    3. ${mensajeEsIncorrecto} : Intentalo de nuevo 🙌 `;
    
    puntajeTotal = puntajeTotal + puntajeIncorrecto;
  }
 
 
  alert(`${resultado}
  
 
 Obtuviste un puntaje de : ${puntajeTotal} puntos`);
  
}

btnRegresar.addEventListener('click', atras);

function atras(){
  primeraPregunta.classList.remove('inactive');
  subPrimeraPregunta.classList.remove('inactive');
  segundaPregunta.classList.add('inactive');
  subSegundaPregunta.classList.add('inactive');
}

btnRegresarInicio.addEventListener('click', inicio);

function inicio(){
  terceraPregunta.classList.add('inactive');
  subTerceraPregunta.classList.add('inactive');
  bienvenida.classList.remove('inactive');
  document.querySelector('input[name="pregunta1"]:checked').checked = false;
  document.querySelector('input[name="pregunta2"]:checked').checked = false;
  document.querySelector('input[name="pregunta3"]:checked').checked = false;
}  

/*Seccion peliculas pelicula*/

btnPeliculas.addEventListener('click', mostrarPrimeraPreguntaPelicula);

function mostrarPrimeraPreguntaPelicula(){
  peliculaPrimeraPregunta.classList.remove('inactive');
  subPrimeraPregunta.classList.remove('inactive');
  elegir.classList.add('inactive');
}

btnMostrarSegundaPreguntaPelicula.addEventListener('click', mostrarSegundaPreguntaPelicula);

function mostrarSegundaPreguntaPelicula(){
  peliculaPrimeraPregunta.classList.add('inactive');
  subPrimeraPregunta.classList.add('inactive');
  peliculaSegundaPregunta.classList.remove('inactive');
  subSegundaPregunta.classList.remove('inactive');
}

btnMostrarTerceraPreguntaPelicula.addEventListener('click', mostrarTerceraPreguntaPelicula);

function mostrarTerceraPreguntaPelicula(){
  peliculaSegundaPregunta.classList.add('inactive');
  subSegundaPregunta.classList.add('inactive');
  peliculaTerceraPregunta.classList.remove('inactive');
  subTerceraPregunta.classList.remove('inactive');
}

btnRegresarElegir.addEventListener('click', regresarElegir); 

function regresarElegir(){
  peliculaPrimeraPregunta.classList.add('inactive');
  subPrimeraPregunta.classList.add('inactive');
  elegir.classList.remove('inactive');
}

btnRegresarPrimeraPreguntaPelicula.addEventListener('click', regresarPrimeraPreguntaPelicula);

function regresarPrimeraPreguntaPelicula(){
  peliculaPrimeraPregunta.classList.remove('inactive');
  subPrimeraPregunta.classList.remove('inactive');
  peliculaSegundaPregunta.classList.add('inactive');
  subSegundaPregunta.classList.add('inactive');
}


btnRegresarUltimaPregPelicula.addEventListener('click', regresarSegundaPreguntaPelicula);

function regresarSegundaPreguntaPelicula(){
  peliculaTerceraPregunta.classList.add('inactive');
  subTerceraPregunta.classList.add('inactive');
  peliculaSegundaPregunta.classList.remove('inactive');
  subSegundaPregunta.classList.remove('inactive');
}

btnRegresarInicioDesdePelicula.addEventListener('click', regresarInicioDesdePelicula);

function regresarInicioDesdePelicula(){
  peliculaTerceraPregunta.classList.add('inactive');
  subTerceraPregunta.classList.add('inactive');
  bienvenida.classList.remove('inactive');
  document.querySelector('input[name="pregunta4"]:checked').checked = false;
  document.querySelector('input[name="pregunta5"]:checked').checked = false;
  document.querySelector('input[name="pregunta6"]:checked').checked = false;
}


btnVerResultadosPelicula.addEventListener('click', resultadoPeliculas); 

function resultadoPeliculas(){
  const usuRptaUno = document.querySelector('input[name="pregunta4"]:checked').value;
  const usuRptaDos = document.querySelector('input[name="pregunta5"]:checked').value;
  const usuRptaTres = document.querySelector('input[name="pregunta6"]:checked').value;
  const respuestaUno = "opcion10";
  const respuestaDos = "opcion15";
  const respuestaTres = "opcion16";  
  const mensajeEsCorrecto = 'La respuesta es correcta';
  const mensajeEsIncorrecto = 'La respuesta es incorrecta';
  const puntajeCorrecto = 5;
  const puntajeIncorrecto = 1;
  let puntajeTotal;
  let resultado;
  
  if(usuRptaUno == respuestaUno){    
    resultado = `1. ${mensajeEsCorrecto} : "Es una vida maravillosa"  ¡Felicidades!🎉 `;    
    puntajeTotal = puntajeCorrecto;
    
  } else {
    resultado = `1. ${mensajeEsIncorrecto} : Intentalo de nuevo 🙌`;
    puntajeTotal= puntajeIncorrecto;
  }
  
  if(usuRptaDos == respuestaDos){
    resultado = `${resultado} 
    2. ${mensajeEsCorrecto} : "A Nightmare on Elm Street"  ¡Felicidades!🎉 `;
    
    puntajeTotal = puntajeTotal +  puntajeCorrecto
     
  } else {
    resultado = `${resultado} 
    2. ${mensajeEsIncorrecto} : Intentalo de nuevo 🙌 `;
    
    puntajeTotal = puntajeTotal + puntajeIncorrecto;
  }
  
  if(usuRptaTres == respuestaTres){
    resultado = `${resultado} 
    3. ${mensajeEsCorrecto} : Blanca Nieves y los Siete Enanos  ¡Felicidades!🎉 `;
    
    puntajeTotal = puntajeTotal +  puntajeCorrecto
    
  } else {
    resultado = `${resultado} 
    3. ${mensajeEsIncorrecto} : Intentalo de nuevo 🙌 `;
    
    puntajeTotal = puntajeTotal + puntajeIncorrecto;
  }
 
 
  alert(`${resultado}
  
 
 Obtuviste un puntaje de : ${puntajeTotal} puntos`);
  
}