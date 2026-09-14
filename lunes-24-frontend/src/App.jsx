import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Velocidad from './components/Velocidad'
import Distancia from './components/Distancia'
import Tiempo from './components/Tiempo'
import Fuerza from './components/Fuerza'
import Peso from './components/Peso'
import EnergiaCinetica from './components/EnergiaCinetica'
import Aceleracion from './components/Aceleracion'
import Densidad from './components/Densidad'
import atomo from './assets/atomo.png'

function App() {
  const [calculoSeleccionado, setCalculoSeleccionado] = useState(null)

  return (
    <div>
      <h1>Calculadora de Física</h1>

      <Menu onSeleccionar={setCalculoSeleccionado} />

      {calculoSeleccionado === null && (
        <div className="inicio">

          <div className="bienvenida">
            <p>
              Toca el ícono del átomo para elegir un cálculo. Esta calculadora
              resuelve operaciones de movimiento, dinámica y energía a partir
              de los datos que ingreses.
            </p>
          </div>

          <div className="chips">
            <span className="chip">Velocidad</span>
            <span className="chip">Distancia</span>
            <span className="chip">Tiempo</span>
            <span className="chip">Fuerza</span>
            <span className="chip">Peso</span>
            <span className="chip">Energía Cinética</span>
            <span className="chip">Aceleración</span>
            <span className="chip">Densidad</span>
          </div>

          <img src={atomo} alt="" className="ilustracion-fondo" />

          <div className="categorias">
            <div className="categoria-card">
              <h4>Movimiento</h4>
              <p>Velocidad, distancia, tiempo y aceleración.</p>
            </div>
            <div className="categoria-card">
              <h4>Dinámica</h4>
              <p>Fuerza, peso y densidad.</p>
            </div>
            <div className="categoria-card">
              <h4>Energía</h4>
              <p>Energía cinética.</p>
            </div>
          </div>

          <footer className="footer">
            Proyecto ADSO — Ficha 3225853 — Calculadora de Física - Juan David Perdomo Valencia
          </footer>

        </div>
      )}

      {calculoSeleccionado !== null && (
        <div>
          <button className="volver" onClick={() => setCalculoSeleccionado(null)}>
            ← Volver al menú
          </button>

          {calculoSeleccionado === 'velocidad' && <Velocidad />}
          {calculoSeleccionado === 'distancia' && <Distancia />}
          {calculoSeleccionado === 'tiempo' && <Tiempo />}
          {calculoSeleccionado === 'fuerza' && <Fuerza />}
          {calculoSeleccionado === 'peso' && <Peso />}
          {calculoSeleccionado === 'energiaCinetica' && <EnergiaCinetica />}
          {calculoSeleccionado === 'aceleracion' && <Aceleracion />}
          {calculoSeleccionado === 'densidad' && <Densidad />}
        </div>
      )}
    </div>
  )
}

export default App