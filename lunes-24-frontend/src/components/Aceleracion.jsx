import { useState } from 'react'

function Aceleracion() {
    const [velocidadInicial, setVelocidadInicial] = useState('')
    const [velocidadFinal, setVelocidadFinal] = useState('')
    const [tiempo, setTiempo] = useState('')
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = async () => {
        setError(null)
        setResultado(null)
        setCargando(true)

        try {
        const respuesta = await fetch('http://localhost:5000/fisica/aceleracion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            velocidadInicial: Number(velocidadInicial),
            velocidadFinal: Number(velocidadFinal),
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
        <h3>Calcular Aceleración</h3>

        <label>Velocidad inicial (m/s): </label>
        <input 
        type="number" placeholder='introduzca velocidad inicial'
        value={velocidadInicial} 
        onChange={(e) => setVelocidadInicial(e.target.value)} />

        <label>Velocidad final (m/s): </label>
        <input 
        type="number" placeholder='introduzca velocidad final'
        value={velocidadFinal} 
        onChange={(e) => setVelocidadFinal(e.target.value)} />

        <label>Tiempo (s): </label>
        <input 
        type="number" placeholder='introduzca el tiempo'
        value={tiempo} 
        onChange={(e) => setTiempo(e.target.value)} />

        <button onClick={handleSubmit} disabled={cargando}>
            {cargando ? 'Calculando...' : 'Calcular'}
        </button>

        {resultado && <p className="resultado">{resultado.mensaje}</p>}
        {error && <p className="error">Error: {error}</p>}
    </div>
    )
}

export default Aceleracion