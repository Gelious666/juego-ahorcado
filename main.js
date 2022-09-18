//se una funcion no nativa para sustituir en la posicion de la palabra
String.prototype.replaceAt=function(index, character) 
{
    return this.substring(0, index) + character + this.substring(index+character.length); 
} 


//generamos palabras a adivinar
const palabras = ["casa", "perro", "jabon", "celular", "monitor", "carro", "laptop", "mesa", "silla"];

/*calculamos un numero aleatorio entre 0 y 1 el cual es exclusivo,
 luego lo multiplicamos con palabras.length por lo cual nos devolvera un numero entre 0 y 9 */

const palabra = palabras[Math.floor(Math.random()*palabras.length)];
//reemplazamos la variable palabra con guiones bajos
let palabraconguiones = palabra.replace(/./g, "_ ");
/*hacemos un contador de fallos iniciando en 0 */
let contadorfallos = 0;

document.querySelector("#salida").innerHTML = palabraconguiones;

//Cuando se haga click en el boton enviar recogemos la letra introducida 


document.querySelector("#calcular").addEventListener("click" , () =>
{
    const letra = document.querySelector("#letra").value;
    
/*creamos una variable booleana con valor true */
    let hafallado = true;
/* creamos un bucle comparando la letra introducida
con la letra de la palabra*/
    for(const i in palabra){
        if (letra == palabra[i]){
/* se reemplaza el guion por la letra que coincide y 
se multiplica por 2 porque cuando se pasa la palabra 
a guiones se hizo con un espacio en blanco*/
        palabraconguiones = palabraconguiones.replaceAt(i*2, letra);
        hafallado = false;
        
        }
    } 
/*si falla aumenta un contador de fallos y cabia la posicion de imagen*/
    if(hafallado){
        contadorfallos++;
        document.querySelector("#ahorcado").style.backgroundPosition = -(200*contadorfallos) + 'px 0';

        if(contadorfallos == 4){
            //mostramos mensaje de perdedor con su palabra correcta
            document.querySelector("#perdedor").style.display = "flex";
            document.querySelector("#tup").innerHTML = palabra;
            
        }
        /*si no quedan guiones se muentra la palabra victoria */
    } else{
        if(palabraconguiones.indexOf("_") <0){
            //cuando ganemos mostramos un texto oculto cambiando el valor display none a flex
            document.querySelector("#ganador").style.display = "flex";
        }
    }

/*se muentran las letras debajo del recuadro */
    document.querySelector("#salida").innerHTML = palabraconguiones;
/* cada vez que se envia una letra se borra el cuadro de texto*/
    document.querySelector("#letra").value = "";
/* el cursor de texto se centra en el cuadro de texto */
    document.querySelector("#letra").focus();
});

