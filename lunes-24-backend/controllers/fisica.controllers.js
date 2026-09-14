export const calcularVelocidad = (req, res) => {
    const { distancia, tiempo } = req.body;

    const velocidad = Number((distancia / tiempo).toFixed(2));
    res.status(200).json({
        distancia,
        tiempo,
        velocidad,
        mensaje: `Recorriendo ${distancia} m en ${tiempo} s, la velocidad es de ${velocidad} m/s.`
    });
}

export const calcularAceleracion = (req, res) => {
    const { velocidadInicial, velocidadFinal, tiempo } = req.body;

    const aceleracion = Number(((velocidadFinal - velocidadInicial) / tiempo).toFixed(2));
    res.status(200).json({
        velocidadInicial,
        velocidadFinal,
        tiempo,
        aceleracion,
        mensaje: `Partiendo de ${velocidadInicial} m/s y llegando a ${velocidadFinal} m/s en ${tiempo} s, la aceleración es de ${aceleracion} m/s².`
    });
}

export const calcularFuerza = (req, res) => {
    const { masa, aceleracion } = req.body;

    const fuerza = Number((masa * aceleracion).toFixed(2));
    res.status(200).json({
        masa,
        aceleracion,
        fuerza,
        mensaje: `Con una masa de ${masa} kg y una aceleración de ${aceleracion} m/s², la fuerza resultante es de ${fuerza} N.`
    });
}

export const calcularPeso = (req, res) => {
    const { masa } = req.body;
    const gravedad = 9.8;

    const peso = Number((masa * gravedad).toFixed(2));
    res.status(200).json({
        masa,
        gravedad,
        peso,
        mensaje: `Con una masa de ${masa} kg bajo gravedad terrestre (${gravedad} m/s²), el peso es de ${peso} N.`
    });
}

export const calcularEnergiaCinetica = (req, res) => {
    const { masa, velocidad } = req.body;

    const energiaCinetica = Number(((masa * velocidad ** 2) / 2).toFixed(2));
    res.status(200).json({
        masa,
        velocidad,
        energiaCinetica,
        mensaje: `Con una masa de ${masa} kg moviéndose a ${velocidad} m/s, la energía cinética es de ${energiaCinetica} J.`
    });
}

export const calcularDistancia = (req, res) => {
    const { velocidad, tiempo } = req.body;

    const distancia = Number((velocidad * tiempo).toFixed(2));
    res.status(200).json({
        velocidad,
        tiempo,
        distancia,
        mensaje: `A ${velocidad} m/s durante ${tiempo} s, la distancia recorrida es de ${distancia} m.`
    });
}

export const calcularTiempo = (req, res) => {
    const { distancia, velocidad } = req.body;

    const tiempo = Number((distancia / velocidad).toFixed(2));
    res.status(200).json({
        distancia,
        velocidad,
        tiempo,
        mensaje: `Para recorrer ${distancia} m a ${velocidad} m/s, se requiere un tiempo de ${tiempo} s.`
    });
}

export const calcularDensidad = (req, res) => {
    const { masa, volumen } = req.body;

    const densidad = Number((masa / volumen).toFixed(2));
    res.status(200).json({
        masa,
        volumen,
        densidad,
        mensaje: `Con una masa de ${masa} kg y un volumen de ${volumen} m³, la densidad es de ${densidad} kg/m³.`
    });
}