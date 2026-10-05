import { useState } from 'react'

function EnergiaCinetica() {
    const [masa, setMasa] = useState('')
    const [velocidad, setVelocidad] = useState('')
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(false)

    const convertir = (valor) => (valor === '' ? undefined : Number(valor))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setResultado(null)
        setCargando(true)

        try {
            const respuesta = await fetch('http://localhost:5000/fisica/energia-cinetica', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    masa: convertir(masa),
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
            <h3>Calcular Energía Cinética</h3>
            <p className="descripcion">
                Calcula la energía que tiene un objeto por estar en movimiento,
                según su masa y velocidad (Ec = (m × v²) / 2).
            </p>

            <label>Masa (kg): </label>
            <input
                type="number" placeholder='introduzca el valor de masa'
                value={masa}
                onChange={(e) => setMasa(e.target.value)}
            />

            <label>Velocidad (m/s): </label>
            <input
                type="number" placeholder='introduzca el valor de velocidad'
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

export default EnergiaCinetica