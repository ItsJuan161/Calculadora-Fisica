import { useState } from 'react'

function Tiempo() {
    const [distancia, setDistancia] = useState('')
    const [velocidad, setVelocidad] = useState('')
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(false)

    const convertir = (valor) => {
        if (valor.trim() === '') return undefined
        if (isNaN(Number(valor))) return valor
        return Number(valor)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setResultado(null)
        setCargando(true)

        try {
            const respuesta = await fetch('http://localhost:5000/fisica/tiempo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    distancia: convertir(distancia),
                    velocidad: convertir(velocidad)
                })
            })

            const datos = await respuesta.json()
            await new Promise(resolve => setTimeout(resolve, 500))
            setCargando(false)

            if (!respuesta.ok) {
                setError(datos.mensaje)
            } else {
                setResultado(datos)
            }
        } catch (err) {
            setCargando(false)
            setError('No se pudo conectar con el servidor')
        }
    }

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <h3>Calcular Tiempo</h3>
            <p className="descripcion">
                Calcula cuánto tarda un objeto en recorrer una distancia a una
                velocidad constante (t = d / v).
            </p>

            <label>Distancia (m): </label>
            <input
                type="text" inputMode="decimal" placeholder='introduzca el valor de distancia'
                value={distancia}
                onChange={(e) => setDistancia(e.target.value)}
            />

            <label>Velocidad (m/s): </label>
            <input
                type="text" inputMode="decimal" placeholder='introduzca el valor de velocidad'
                value={velocidad}
                onChange={(e) => setVelocidad(e.target.value)}
            />

            <button type="submit" disabled={cargando}>
                {cargando ? 'Calculando...' : 'Calcular'}
            </button>

            {resultado && <p className="resultado">{resultado.mensaje}</p>}
            {error && <p className="error">Error: {error}</p>}
        </form>
    )
}

export default Tiempo