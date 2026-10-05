import express from "express";
import cors from "cors";
import fisicaRoutes from "./routes/fisica.routes.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/fisica", fisicaRoutes);

app.use((req, res) => {
    res.status(404).json({
        mensaje: "el endpoint solicitado no existe"
    });
});

app.use((err, req, res, next) => {
    if (err.type === "entity.parse.failed") {
        return res.status(400).json({
            mensaje: "el JSON enviado no tiene un formato válido"
        });
    }
    res.status(500).json({
        mensaje: "error interno del servidor"
    });
});

app.listen(port, () => {
    console.log(`La aplicacion esta corriendo en el puerto ${port}`)
});