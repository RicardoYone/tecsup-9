import { useState } from "react";


//Esto sera un componente el cual nos va a renderizr un formulario de registro
const FormRegister=()=>{
    //En react para obtener el varlor de input es usando 
    //el onChange este evento me va a permitir capturar el valor de los inputs y guardarlos en una variable.
    
    const[nombre,setNombre] = useState("");
    const[apellido,setApellido] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[enviar,setEnviar] = useState("");

    //Recordemos que con event podemos obtener el valor del input
    // event = event.target.value
    // vamos hacer una funcion cual cada veez que se ejecute el onChange se llame y modifique el valor de la variale "nombre"

    //Recordemo que event es spñp im mp,bre qeste puede ser cambiado por e,evento,cambio,estado,etc.

    const handleInputName=(e)=>{
        //Que debemos hacer para poder darle el valor nombre ?
        //Recordemos que el valor va dentro de los ();
        setNombre(e.target.value);
        console.log(nombre);
    }

    const handleInputLastName=(e)=>{
        setApellido(e.target.value);
        console.log(apellido);
    }

    const handleInputEmail=(e)=>{
        setEmail(e.target.value);
        console.log(email);
    }

    const handleInputPassword=(e)=>{
        setPassword(e.target.value);
        console.log(password);
    }

    const handleInputEnviar=(e)=>{
        setEnviar(e.target.value);
        console.log(enviar);
    }

    return(
        <div>
            <form>
                <h4>Formulario de Registro</h4>
                <h4>Nombre {nombre}</h4>
                <div>
                    <input type={"text"} 
                    onChange={handleInputName} 
                    placeholder={"Ingrese su nombre"}></input>
                </div>
                <h4>Apellido {apellido}</h4>
                <div>
                    <input type={"text"} 
                    onChange={handleInputLastName} 
                    placeholder={"Ingrese su Apellido"}></input>
                </div>
                <h4>Email {email}</h4>  
                <div>
                    <input type={"email"} 
                    onChange={handleInputEmail} 
                    placeholder={"Ingrese su Email"}></input>
                </div>   
                <h4>Password{password}</h4>  
                <div>
                    <input type={"password"} 
                    onChange={handleInputPassword} 
                    placeholder={"Ingrese su Password"}></input>
                </div>   
                <button type="submit" onChange={handleInputEnviar}>Enviar</button>
            </form>
        </div>
    )
}


export default FormRegister;















