const express = require("express");
const app = express();
const productRoutes = require("./Routes/productRoutes.js");

// Configuración del puerto
const port = 3000;

// Middleware para habilitar CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Reemplaza con el origen adecuado
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Rutas
app.use("/", productRoutes);

// Ruta de inicio
app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API de productos!");
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
