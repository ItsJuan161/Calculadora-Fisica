import { useState } from 'react'

function Densidad() {
    const [masa, setMasa] = useState('')
    const [volumen, setVolumen] = useState('')
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = async () => {
        setError(null)
        setResultado(null)
        setCargando(true)

        try {
        const respuesta = await fetch('http://localhost:5000/fisica/densidad', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            masa: Number(masa),
            volumen: Number(volumen)
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
        <h3>Calcular Densidad</h3>

        <label>Masa (kg): </label>
        <input type="number" value={masa} onChange={(e) => setMasa(e.target.value)} />

        <label>Volumen (m³): </label>
        <input type="number" value={volumen} onChange={(e) => setVolumen(e.target.value)} />

        <button onClick={handleSubmit} disabled={cargando}>
            {cargando ? 'Calculando...' : 'Calcular'}
        </button>

        {resultado && <p className="resultado">{resultado.mensaje}</p>}
        {error && <p className="error">Error: {error}</p>}
    </div>
    )
}

export default Densidad