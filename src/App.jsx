import './App.css'
import ButtonPrimary from './ButtonPrimary.jsx'
import Counter from './counter.jsx'
import Registerform from './RegisterForm.jsx'

function App() {

  return (
    <>

      <ButtonPrimary url="https://github.com/juankh993/estudiandoReact/commit/dbb50c0724795e1ded58569781d0c4704a06cadb" text="Botón con destructuring"/>

      <Counter />

      <Registerform nameLabel="First Name: "/>
    </>
  )
}

export default App
