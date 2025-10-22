import { useState } from "react";

const Registerform = ({ nameLabel }) => {
    const [nameUser, setNameUser] = useState("");

    return (
        <>
        <label htmlFor="">{nameLabel}</label>
        <input value={nameUser} onChange={( e ) =>{
            let inputValue = e.target.value;
            setNameUser(inputValue);
            console.log("el nuevo valor es ",inputValue);
            
        }}></input>
        </>
    )
}

export default Registerform;