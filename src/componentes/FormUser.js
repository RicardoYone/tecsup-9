import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"


const FormUser=()=>{
    //La otra forma en la cual podemos guardar los datos de los inputs es un objeto para ello necesitamos que los inputs tengan un name para los name me sirvan como un key el valor sea lo que se obtengade los inputs

    //Ahora debemos crear una variable que tanga por defaul un objeto con los keys(name).
    //Pero que los values esten vacios.

    const [valorDeInputs,setValorInputs] = useState({
        nombre:"",
        apellido:"",
        email:"",
        contraseña:"",
    });

    //Ahora debemos contruir una funcion que se encargue de almacenar los valores de los inputs en el objeto.

    const handleInputValue=(e)=>{
        //debemos extraer 2 event
        //1 el name de cada input
        //2 el value de cada input
        //name = e.target.name
        //value = e.target.value

        const {name,value} = e.target;

        //valor inputs ; es para hacer una copia del objeto actual y ademas agregarlo
        //el nuevo key y avlue que recibimos
        //[name] recuerden que name es uan variable por ende para poder usarla como key debemos colocarla entre []
        //value: el valor que estamos recibiendo de nuestro input

        setValorInputs({
            valorDeInputs,
            [name]:value
        })

    }

    return(
        <div class="container">
            <form>
                <h4>FORMULARIO DE USUARIO{handleInputValue}</h4>
                <h5>Nombre {valorDeInputs.nombre}</h5>
                <h5>Apellido {valorDeInputs.apellido}</h5>
                <h5>correo {valorDeInputs.email}</h5>
                <h5>password {valorDeInputs.contraseña}</h5>
                
                <div>
                    
                </div>
            </form>
        </div>
    )
}

export default FormUser;
















