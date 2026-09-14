import { Router } from "express";
import { validarVelocidad, validarAceleracion, validarFuerza, validarPeso, validarEnergiaCinetica, validarDistancia, validarTiempo, validarDensidad } from "../middlewares/fisica.middlewares.js";
import { calcularVelocidad, calcularAceleracion, calcularFuerza, calcularPeso, calcularEnergiaCinetica, calcularDistancia, calcularTiempo, calcularDensidad } from "../controllers/fisica.controllers.js";

const router = Router();

router.post("/velocidad", validarVelocidad, calcularVelocidad);
router.post("/aceleracion", validarAceleracion, calcularAceleracion);
router.post("/fuerza", validarFuerza, calcularFuerza);
router.post("/peso", validarPeso, calcularPeso);
router.post("/energia-cinetica", validarEnergiaCinetica, calcularEnergiaCinetica);
router.post("/distancia", validarDistancia, calcularDistancia);
router.post("/tiempo", validarTiempo, calcularTiempo);
router.post("/densidad", validarDensidad, calcularDensidad);

export default router;