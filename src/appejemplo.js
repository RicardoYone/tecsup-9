import './App.css'

import { useState } from 'react';

const Primercomponente=()=>{
    //React tiene una funcion interna llamada useState 
    //El nombre de la funcion debe de empezar siempre con MAYUSCULA
    //Para poder usar useState debemos importarla desde react

    //Al usar useState la forma en la cual creamos una variable cambia
    //Porque debemos definir 2 cosas
    //1.- El nombre de la variable
    //2.- El estado de la funcion

    //Count: es la variable que usaremos para poder mostrar el valor
    //setCount: Funcion que se encarga de asignarle el valor

    const [count, setCount] = useState(0);

    //Esta funcion retorna una vista
    //En react usamos return() para indicaar lo que esta dentro de la parentesis

    const sumar=()=>{
        setCount(count+1);
    }

    const restar=()=>{
        setCount(count-1);
    }

    return(
        <div>
             <h1>HOLA MUNDO <h2>{count}</h2> </h1>
            <h3>GRUPO 8 </h3>
            
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>restar</button>
        </div>
    )


}

export default (Primercomponente);













