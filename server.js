// console.log("Pasos para crear un server:");

//1- Configurar un puerto (para esto sirve express)

//2- Configurar los middlewares (funciones que van entre las solicitudd y la respuesta HTTP)

//3- COnfigurar rutas

import express from "express";
const app = express();
const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Hola Mundo!");
// });
app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.listen(port, () => {
  console.log(`Ejecutando en puerto ${port}`);
});
