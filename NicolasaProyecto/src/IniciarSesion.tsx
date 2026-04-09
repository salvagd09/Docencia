import { useState } from 'react'
import './App.css'
import LoginInicio from './assets/Login_Inicio.png'
function App() {
    localStorage.setItem("salvagd09","Cell28")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const submit=(e)=>{
      e.preventDefault()
      localStorage.setItem("salvagd09","Cell28")
      const recordPassword=localStorage.getItem("salvagd09")
      if (username === "salvagd09" && password === recordPassword) {
        alert("Inicio de sesión exitoso")
        setUsername("")
        setPassword("")
      } else {
        alert("Inicio de sesión fallido")
        setUsername("")
        setPassword("")
      }
    }
  return (
    <>
      <section id="center">
        <h1 className="titulo">Iniciar Sesión</h1>
        <div className="loginImagen">
          <img src={LoginInicio} className="base" width="170" height="170" alt="Imagen de inicio de sesión" />
        </div>
        <form onSubmit={submit} className="formulario">
            <label htmlFor="username" className="loginL">Username:</label>
            <input type="text" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} className="inputs"/>
            <label htmlFor="password" className="loginL">Contraseña:</label>
            <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="inputs"/>
            <button type="submit">Ingresar</button>
        </form>
      </section>
    </>
  )
}

export default App
