import { useState } from 'react'

function Peso() {
    const [masa, setMasa] = useState('')
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
            const respuesta = await fetch('http://localhost:5000/fisica/peso', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    masa: convertir(masa)
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
            <h3>Calcular Peso</h3>
            <p className="descripcion">
                Calcula la fuerza con la que la gravedad terrestre atrae a un
                objeto según su masa (P = m × g, con g = 9.8 m/s²).
            </p>

            <label>Masa (kg): </label>
            <input
                type="text" inputMode="decimal" placeholder='introduzca el valor de masa'
                value={masa}
                onChange={(e) => setMasa(e.target.value)}
            />

            <button type="submit" disabled={cargando}>
                {cargando ? 'Calculando...' : 'Calcular'}
            </button>

            {resultado && <p className="resultado">{resultado.mensaje}</p>}
            {error && <p className="error">Error: {error}</p>}
        </form>
    )
}

export default Peso