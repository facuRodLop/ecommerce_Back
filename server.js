require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
routes(app);

// dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`),
);
