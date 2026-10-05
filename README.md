# Calculadora de Física

Proyecto formativo del programa de Análisis y Desarrollo de Software (ADSO) — SENA, Ficha 3225853.

Aplicación full-stack que permite calcular operaciones físicas básicas (movimiento, dinámica y energía) a partir de datos ingresados por el usuario. El backend valida los datos y realiza los cálculos; el frontend permite ingresarlos y visualizar el resultado.

## Estructura del proyecto

- **lunes-24-backend/** → API REST (Node.js + Express)
  - `routes/` → definición de los endpoints
  - `middlewares/` → validación de los datos recibidos
  - `controllers/` → lógica de cálculo y respuesta
  - `CalculadoraFisica/` → colección de Bruno con las peticiones de prueba
- **lunes-24-frontend/** → Interfaz de usuario (React + Vite)
  - `src/components/` → un componente por cada cálculo y el menú

## Cálculos disponibles

| Cálculo | Fórmula | Endpoint | Datos (body) | Unidad |
|---|---|---|---|---|
| Velocidad | v = d / t | `POST /fisica/velocidad` | `distancia`, `tiempo` | m/s |
| Distancia | d = v × t | `POST /fisica/distancia` | `velocidad`, `tiempo` | m |
| Tiempo | t = d / v | `POST /fisica/tiempo` | `distancia`, `velocidad` | s |
| Aceleración | a = (vf - v0) / t | `POST /fisica/aceleracion` | `velocidadInicial`, `velocidadFinal`, `tiempo` | m/s² |
| Fuerza | F = m × a | `POST /fisica/fuerza` | `masa`, `aceleracion` | N |
| Peso | P = m × g | `POST /fisica/peso` | `masa` | N |
| Energía Cinética | Ec = (m × v²) / 2 | `POST /fisica/energia-cinetica` | `masa`, `velocidad` | J |
| Densidad | ρ = m / V | `POST /fisica/densidad` | `masa`, `volumen` | kg/m³ |

## Ejemplo de petición y respuesta

**Petición** → `POST http://localhost:5000/fisica/velocidad`

```json
{
  "distancia": 120,
  "tiempo": 2
}
```

**Respuesta exitosa** → `200 OK`

```json
{
  "operacion": "velocidad",
  "distancia": 120,
  "tiempo": 2,
  "resultado": 60,
  "unidad": "m/s",
  "mensaje": "Recorriendo 120 m en 2 s, la velocidad es de 60 m/s."
}
```

**Respuesta con error** → `400 Bad Request`

```json
{
  "mensaje": "el tiempo no puede ser 0"
}
```

## Cómo correr el proyecto

Necesitas **dos terminales abiertas al mismo tiempo** (backend y frontend corren por separado).

### 1. Backend (puerto 5000)

```bash
cd lunes-24-backend
npm install
npm run dev
```

### 2. Frontend (puerto 5173)

```bash
cd lunes-24-frontend
npm install
npm run dev
```

Con ambos corriendo, abre el navegador en `http://localhost:5173/`.

## Validaciones implementadas

Cada endpoint valida antes de calcular:
- Que los datos obligatorios estén presentes
- Que sean de tipo numérico
- Que no existan valores negativos (donde físicamente no corresponde)
- Que no se produzcan divisiones entre cero

Si una validación falla, la API responde con código `400` y un mensaje descriptivo. Si el endpoint no existe, responde con `404`.

## Pruebas

### Backend (Bruno)
La carpeta `lunes-24-backend/CalculadoraFisica/` contiene la colección de Bruno con las 8 peticiones. Para usarla: en Bruno, **Open Collection** → seleccionar esa carpeta.

Casos probados: datos correctos (200), campo obligatorio vacío (400), valor negativo (400), división entre cero (400), tipo de dato incorrecto (400) y endpoint inexistente (404).

### Frontend (navegador)
Casos probados: datos correctos, campo vacío, valor negativo, división entre cero y error de conexión (con el backend detenido).

## Tecnologías utilizadas

**Backend:** Node.js, Express, CORS, Nodemon
**Frontend:** React, Vite, JavaScript, CSS, Fetch API
**Pruebas:** Bruno

## Autor

Juan David Perdomo Valencia