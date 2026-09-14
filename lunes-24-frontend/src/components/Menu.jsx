import { useState } from 'react'
import atomo from '../assets/atomo.png'

function Menu({ onSeleccionar }) {
    const [abierto, setAbierto] = useState(false)

    const seleccionar = (calculo) => {
        onSeleccionar(calculo)
        setAbierto(false)
    }

    return (
        <div>
        <button className="hamburguesa" onClick={() => setAbierto(true)}>
            <img src={atomo} alt="Menú" className="icono-menu" />
        </button>

        <h2>Elige qué quieres calcular</h2>

        {abierto && (
            <div className="overlay" onClick={() => setAbierto(false)}>
            <div className="panel-menu" onClick={(e) => e.stopPropagation()}>
                <div className="panel-header">
                <span>Selecciona un cálculo</span>
                <button className="cerrar" onClick={() => setAbierto(false)}>✕</button>
            </div>

            <button onClick={() => seleccionar("velocidad")}>Velocidad</button>
            <button onClick={() => seleccionar("distancia")}>Distancia</button>
            <button onClick={() => seleccionar("tiempo")}>Tiempo</button>
            <button onClick={() => seleccionar("fuerza")}>Fuerza</button>
            <button onClick={() => seleccionar("peso")}>Peso</button>
            <button onClick={() => seleccionar("energiaCinetica")}>Energía Cinética</button>
            <button onClick={() => seleccionar("aceleracion")}>Aceleración</button>
            <button onClick={() => seleccionar("densidad")}>Densidad</button>
            </div>
            </div>
        )}
        </div>
    )
}

export default Menu