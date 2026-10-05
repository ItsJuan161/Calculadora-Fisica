import { useState } from 'react'

function Distancia() {
    const [velocidad, setVelocidad] = useState('')
    const [tiempo, setTiempo] = useState('')
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
            const respuesta = await fetch('http://localhost:5000/fisica/distancia', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    velocidad: convertir(velocidad),
                    tiempo: convertir(tiempo)
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
            <h3>Calcular Distancia</h3>
            <p className="descripcion">
                Calcula cuánto recorre un objeto a partir de su velocidad y el
                tiempo que se mueve (d = v × t).
            </p>

            <label>Velocidad (m/s): </label>
            <input
                type="text" inputMode="decimal" placeholder='introduzca el valor de velocidad'
                value={velocidad}
                onChange={(e) => setVelocidad(e.target.value)}
            />

            <label>Tiempo (s): </label>
            <input
                type="text" inputMode="decimal" placeholder='introduzca el valor de tiempo'
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
            />

            <button type="submit" disabled={cargando}>
                {cargando ? 'Calculando...' : 'Calcular'}
            </button>

            {resultado && <p className="resultado">{resultado.mensaje}</p>}
            {error && <p className="error">Error: {error}</p>}
        </form>
    )
}

export default Distancia