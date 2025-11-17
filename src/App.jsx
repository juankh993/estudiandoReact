import './App.css'
import ButtonPrimary from './ButtonPrimary.jsx'
import Counter from './counter.jsx'
import Registerform from './RegisterForm.jsx'
import { useState } from 'react'

function App() {
  const [nameUser, setNameUser] = useState("");
  
  const handleNameChange = ( onNameNew) => {
    setNameUser(onNameNew);
  }

  return (
    <>

      <ButtonPrimary url="https://github.com/juankh993/estudiandoReact/commit/dbb50c0724795e1ded58569781d0c4704a06cadb" text="Botón con destructuring"/>

      <Counter />

    {/* prop onNameChange que llama a la funcion para pasar prop de padre a hijo */}
    <Registerform nameLabel="First Name: " onNameNew={handleNameChange}/>
    <h2>{nameUser}</h2>
    </>
  )
}

export default App
