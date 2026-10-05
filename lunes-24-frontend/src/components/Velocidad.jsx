import { useState } from 'react'

function Velocidad() {
    const [distancia, setDistancia] = useState('')
    const [tiempo, setTiempo] = useState('')
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
            const respuesta = await fetch('http://localhost:5000/fisica/velocidad', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    distancia: convertir(distancia),
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
            <h3>Calcular Velocidad</h3>
            <p className="descripcion">
                Calcula qué tan rápido se mueve un objeto a partir de la distancia
                recorrida y el tiempo empleado (v = d / t).
            </p>

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

            <button type="submit" disabled={cargando}>
                {cargando ? 'Calculando...' : 'Calcular'}
            </button>

            {resultado && <p className="resultado">{resultado.mensaje}</p>}
            {error && <p className="error">Error: {error}</p>}
        </form>
    )
}

export default Velocidad