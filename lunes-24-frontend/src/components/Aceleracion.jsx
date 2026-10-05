import { useState } from 'react'

function Aceleracion() {
    const [velocidadInicial, setVelocidadInicial] = useState('')
    const [velocidadFinal, setVelocidadFinal] = useState('')
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
            const respuesta = await fetch('http://localhost:5000/fisica/aceleracion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    velocidadInicial: convertir(velocidadInicial),
                    velocidadFinal: convertir(velocidadFinal),
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
            <h3>Calcular Aceleración</h3>
            <p className="descripcion">
                Calcula cuánto cambia la velocidad de un objeto en un intervalo
                de tiempo (a = (vf - v0) / t).
            </p>

            <label>Velocidad inicial (m/s): </label>
            <input
                type="text" inputMode="decimal" placeholder='introduzca velocidad inicial'
                value={velocidadInicial}
                onChange={(e) => setVelocidadInicial(e.target.value)}
            />

            <label>Velocidad final (m/s): </label>
            <input
                type="text" inputMode="decimal" placeholder='introduzca velocidad final'
                value={velocidadFinal}
                onChange={(e) => setVelocidadFinal(e.target.value)}
            />

            <label>Tiempo (s): </label>
            <input
                type="text" inputMode="decimal" placeholder='introduzca el tiempo'
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

export default Aceleracion