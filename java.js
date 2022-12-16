const trivia = [{
    pregunta : "Como se llama la mascota de Bob Esponja",
    opciones : ["Arenita,Patricio,Calamardo,Gari"],
    respuesta : "Gari",
},
{
    pregunta : "Como se llama el payaso de los Simpsons",
    opciones : ["Homero,Bart,Barny,Krusty"],
    respuesta : "Krusty",
},
{
    pregunta : "Como se llama el personaje verde en Dragon Ball z",
    opciones : ["Goku, Vegueta,Picolo,Gohan"],
    respuesta : "Picolo",
}
] 


class Preguntas {constructor(texto,elecciones,correcta){
    this.texto=texto;
    this.elecciones=elecciones;
    this.corrrecta=correcta;

    function respuestaCorrecta(pregunta) 
    {return opciones === this.correcta} 

}}


const newPreguntas = trivia.map(pregunta => new Preguntas(pregunta.pregunta , pregunta.opciones , pregunta.respuesta))