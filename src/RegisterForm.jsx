import { useState } from "react";

const Registerform = ({ nameLabel , onNameNew}) => {
    const [nameUser, setNameUser] = useState("");

    return (
        <>
            <h1>Formulario</h1>
        <label htmlFor="">{nameLabel}</label>
        <input value={nameUser} onChange={( e ) =>{
            let inputValue = e.target.value;
            setNameUser(inputValue);            
            onNameNew(inputValue);
        }}></input>
        <button className="" disabled={nameUser === "" ? true : false}>Enviar</button>
        </>
    )
}

export default Registerform;