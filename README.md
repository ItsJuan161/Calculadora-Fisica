# Calculadora de Física

Proyecto formativo del programa de Análisis y Desarrollo de Software (ADSO) — SENA, Ficha 3225853.

Aplicación full-stack que permite calcular operaciones físicas básicas (movimiento, dinámica y energía) a partir de datos ingresados por el usuario. El backend valida los datos y realiza los cálculos; el frontend permite ingresarlos y visualizar el resultado.

## Estructura del proyecto

- **lunes-24-backend/** → API REST (Node.js + Express)
- **lunes-24-frontend/** → Interfaz de usuario (React + Vite)

## Cálculos disponibles

| Cálculo | Fórmula | Endpoint |
|---|---|---|
| Velocidad | v = d / t | `/fisica/velocidad` |
| Distancia | d = v × t | `/fisica/distancia` |
| Tiempo | t = d / v | `/fisica/tiempo` |
| Aceleración | a = (vf - v0) / t | `/fisica/aceleracion` |
| Fuerza | F = m × a | `/fisica/fuerza` |
| Peso | P = m × g | `/fisica/peso` |
| Energía Cinética | Ec = (m × v²) / 2 | `/fisica/energia-cinetica` |
| Densidad | ρ = m / V | `/fisica/densidad` |

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

## Tecnologías utilizadas

**Backend:** Node.js, Express, CORS
**Frontend:** React, Vite

## Validaciones implementadas

Cada endpoint valida:
- Que los datos obligatorios estén presentes
- Que sean de tipo numérico
- Que no existan valores negativos (donde físicamente no corresponde)
- Que no se produzcan divisiones entre cero

## Autor

Juan David Perdomo Valencia