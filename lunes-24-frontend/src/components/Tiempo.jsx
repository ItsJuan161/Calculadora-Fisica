import { useState } from 'react'

function Tiempo() {
    const [distancia, setDistancia] = useState('')
    const [velocidad, setVelocidad] = useState('')
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = async () => {
        setError(null)
        setResultado(null)
        setCargando(true)

        try {
        const respuesta = await fetch('http://localhost:5000/fisica/tiempo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            distancia: Number(distancia),
            velocidad: Number(velocidad)
            })
        })

        const datos = await respuesta.json()

        if (!respuesta.ok) {
            setError(datos.mensaje)
        } else {
            setResultado(datos)
        }
        } catch (err) {
        setError('No se pudo conectar con el servidor')
        } finally {
        setCargando(false)
        }
    }

        return (
        <div className="formulario">
        <h3>Calcular Tiempo</h3>

        <label>Distancia (m): </label>
        <input 
        type="number" placeholder='introduzca el valor de distancia'
        value={distancia} 
        onChange={(e) => setDistancia(e.target.value)} />

        <label>Velocidad (m/s): </label>
        <input 
        type="number" placeholder='introduzca el valor de velocidad'
        value={velocidad} 
        onChange={(e) => setVelocidad(e.target.value)} />

        <button onClick={handleSubmit} disabled={cargando}>
            {cargando ? 'Calculando...' : 'Calcular'}
        </button>

        {resultado && <p className="resultado">{resultado.mensaje}</p>}
        {error && <p className="error">Error: {error}</p>}
    </div>
    )
}

export default Tiempo