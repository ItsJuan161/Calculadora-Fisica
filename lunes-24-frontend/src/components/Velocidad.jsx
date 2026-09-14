import { useState } from 'react'

function Velocidad() {
    const [distancia, setDistancia] = useState('')
    const [tiempo, setTiempo] = useState('')
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = async () => {
        setError(null)
        setResultado(null)
        setCargando(true)

        try {
        const respuesta = await fetch('http://localhost:5000/fisica/velocidad', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            distancia: Number(distancia),
            tiempo: Number(tiempo)
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
        <div className="formulario">
        <h3>Calcular Velocidad</h3>

        <label>Distancia (m): </label>
        <input
            type="number" placeholder='introduzca el valor de distancia'
            value={distancia}
            onChange={(e) => setDistancia(e.target.value)}
        />
        <br />

        <label>Tiempo (s): </label>
        <input
            type="number" placeholder='introduzca el valor de tiempo'
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
        />
        <br />

        <button onClick={handleSubmit} disabled={cargando}>
            {cargando ? 'Calculando...' : 'Calcular'}
        </button>

        {resultado && <p className="resultado">{resultado.mensaje}</p>}
        {error && <p className="error">Error: {error}</p>}
        </div>
    )
}

export default Velocidad