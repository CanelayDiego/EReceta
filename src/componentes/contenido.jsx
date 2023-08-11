import React from "react";
import Grid from "@mui/material/Grid";
import Diseno from "./diseno.jsx";
import Ingreso from "./compositor.jsx";

function Contenido() {
  let [datos, setdatos] = React.useState({
    nombre: "",
    profesion: "",
    rutprof: "",
    logo: "",
    nombrepac: "",
    rutpac: "",
    fecha: "",
    indicaciones: "",
    diagnostico: ""
  });

  /* IMAGEN */
  let [imagen, setImagensita] = React.useState(null);

  function mostrarImagen() {
    if (imagen) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const previewImage = document.getElementById("previewImage");
        previewImage.src = e.target.result;
      };

      reader.readAsDataURL(imagen);
    } else {
      alert("Por favor, selecciona una imagen primero.");
    }
  }

  function reciboimagen(x) {
    setImagensita(x);
    console.log("imagen guardada" + x);
  }

  /* IMAGEN */

  let fecha = new Date();
  let año = fecha.getFullYear();
  let mes = fecha.getMonth();
  let dia = fecha.getDate();
  let fechaactual = dia + "/" + mes + "/" + año;

  function datosdelcompositor(x) {
    console.log("hola, esto recibo" + x.fecha);
    console.log(dia);
    setdatos({
      nombre: x.nombre,
      profesion: x.profesion,
      rutprof: x.rutprof,
      nombrepac: x.nombrepac,
      rutpac: x.rutpac,
      fecha: x.fecha,
      indicaciones: x.indicaciones,
      diagnostico: x.diagnostico
    });
  }

  return (
    <div>
      <Grid container spacing={20}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Grid container spacing={20}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Diseno
                nombre={datos.nombre}
                profesion={datos.profesion}
                rutprof={datos.rutprof}
                nombrepaciente={datos.nombrepac}
                rutpaciente={datos.rutpac}
                fecha={fechaactual}
                indicaciones={datos.indicaciones}
                diagnostico={datos.diagnostico}
              />
            </Grid>
            <Grid item xs={5}>
              <Ingreso
                datos={datosdelcompositor}
                imagencargar={mostrarImagen}
                reciboimg={reciboimagen}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>{" "}
    </div>
  );
}

export default Contenido;
