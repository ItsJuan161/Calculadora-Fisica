import { useState } from 'react'

function Peso() {
    const [masa, setMasa] = useState('')
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = async () => {
        setError(null)
        setResultado(null)
        setCargando(true)

        try {
        const respuesta = await fetch('http://localhost:5000/fisica/peso', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            masa: Number(masa)
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
        <h3>Calcular Peso</h3>

        <label>Masa (kg): </label>
        <input 
        type="number" placeholder='introduzca el valor de masa'
        value={masa} 
        onChange={(e) => setMasa(e.target.value)} />

        <button onClick={handleSubmit} disabled={cargando}>
            {cargando ? 'Calculando...' : 'Calcular'}
        </button>

        {resultado && <p className="resultado">{resultado.mensaje}</p>}
        {error && <p className="error">Error: {error}</p>}
    </div>
    )
}

export default Peso