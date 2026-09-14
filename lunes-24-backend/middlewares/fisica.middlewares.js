export const validarVelocidad = (req, res, next) => {

    const { distancia, tiempo } = req.body;

    if (distancia === undefined || tiempo === undefined) {
        return res.status(400).json({
            mensaje: "la distancia y el tiempo son datos obligatorios"
        });
    }

    if (typeof distancia !== "number" || typeof tiempo !== "number") {
        return res.status(400).json({
            mensaje: "distancia y tiempo deben ser numeros"
        });
    }

    if (distancia <= 0 || tiempo < 0) {
        return res.status(400).json({
            mensaje: "la distancia debe ser mayor que 0 y el tiempo no puede ser negativo"
        });
    }

    if (tiempo === 0) {
        return res.status(400).json({
            mensaje: "el tiempo no puede ser 0"
        });
    }

    next();
}   

export const validarAceleracion = (req, res, next) => {   

    const { velocidadInicial, velocidadFinal, tiempo } = req.body;

    if (velocidadInicial === undefined || velocidadFinal === undefined || tiempo === undefined) {
        return res.status(400).json({
            mensaje: "la velocidad inicial, la velocidad final y el tiempo son datos obligatorios"
        });
    }

    if (typeof velocidadInicial !== "number" || typeof velocidadFinal !== "number" || typeof tiempo !== "number") {
        return res.status(400).json({
            mensaje: "velocidad inicial, velocidad final y tiempo deben ser numeros"
        });
    }

    if (tiempo <= 0) {
        return res.status(400).json({
            mensaje: "el tiempo debe ser mayor que 0"
        });
    }

    next();
}   


export const validarFuerza = (req, res, next) => {

    const { masa, aceleracion } = req.body;

    if (masa === undefined || aceleracion === undefined) {
        return res.status(400).json({
            mensaje: "la masa y la aceleracion son datos obligatorios"
        });
    }

    if (typeof masa !== "number" || typeof aceleracion !== "number") {
        return res.status(400).json({
            mensaje: "masa y aceleracion deben ser numeros"
        });
    }

    if (masa <= 0) {
        return res.status(400).json({
            mensaje: "la masa debe ser mayor que 0"
        });
    }

    next();
}

export const validarPeso = (req, res, next) => {

    const { masa } = req.body;

    if (masa === undefined) {
        return res.status(400).json({
            mensaje: "la masa es un dato obligatorio"
        });
    }

    if (typeof masa !== "number") {
        return res.status(400).json({
            mensaje: "la masa debe ser un numero"
        });
    }

    if (masa <= 0) {
        return res.status(400).json({
            mensaje: "la masa debe ser mayor que 0"
        });
    }

    next();
}

export const validarEnergiaCinetica = (req, res, next) => {

    const { masa, velocidad } = req.body;

    if (masa === undefined || velocidad === undefined) {
        return res.status(400).json({
            mensaje: "la masa y la velocidad son datos obligatorios"
        });
    }

    if (typeof masa !== "number" || typeof velocidad !== "number") {
        return res.status(400).json({
            mensaje: "masa y velocidad deben ser numeros"
        });
    }

    if (masa <= 0) {
        return res.status(400).json({
            mensaje: "la masa debe ser mayor que 0"
        });
    }

    if (velocidad < 0) {
        return res.status(400).json({
            mensaje: "la velocidad no puede ser negativa"
        });
    }

    next();
}


export const validarDistancia = (req, res, next) => {

    const { velocidad, tiempo } = req.body;

    if (velocidad === undefined || tiempo === undefined) {
        return res.status(400).json({
            mensaje: "la velocidad y el tiempo son datos obligatorios"
        });
    }

    if (typeof velocidad !== "number" || typeof tiempo !== "number") {
        return res.status(400).json({
            mensaje: "velocidad y tiempo deben ser numeros"
        });
    }

    if (velocidad < 0 || tiempo < 0) {
        return res.status(400).json({
            mensaje: "la velocidad y el tiempo no pueden ser negativos"
        });
    }

    next();
}


export const validarTiempo = (req, res, next) => {

    const { distancia, velocidad } = req.body;

    if (distancia === undefined || velocidad === undefined) {
        return res.status(400).json({
            mensaje: "la distancia y la velocidad son datos obligatorios"
        });
    }

    if (typeof distancia !== "number" || typeof velocidad !== "number") {
        return res.status(400).json({
            mensaje: "distancia y velocidad deben ser numeros"
        });
    }

    if (distancia < 0 || velocidad < 0) {
        return res.status(400).json({
            mensaje: "la distancia y la velocidad no pueden ser negativas"
        });
    }

    if (velocidad === 0) {
        return res.status(400).json({
            mensaje: "la velocidad no puede ser 0"
        });
    }

    next();
}

export const validarDensidad = (req, res, next) => {

    const { masa, volumen } = req.body;

    if (masa === undefined || volumen === undefined) {
        return res.status(400).json({
            mensaje: "la masa y el volumen son datos obligatorios"
        });
    }

    if (typeof masa !== "number" || typeof volumen !== "number") {
        return res.status(400).json({
            mensaje: "masa y volumen deben ser numeros"
        });
    }

    if (masa < 0 || volumen < 0) {
        return res.status(400).json({
            mensaje: "la masa y el volumen no pueden ser negativos"
        });
    }

    if (volumen === 0) {
        return res.status(400).json({
            mensaje: "el volumen no puede ser 0"
        });
    }

    next();
}