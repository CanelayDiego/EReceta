import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
function Ingreso(props) {
  let [datitos, setdatitos] = React.useState({
    nombre: "",
    profesion: "",
    rutprof: "",
    logo: "",
    nombrepac: "",
    rutpac: "",
    fecha: "",
    indicaciones: "",
    diagnostico: "",
    telefono: ""
  });
  let [imagen, setImagen] = React.useState(null);

  function handleImageChange(event) {
    const archivo = event.target.files[0];
    setImagen(archivo); // Llamar a la función aquí para mostrar la imagen de inmediato
    props.reciboimg(archivo);
  }

  /*  function valuedeldatapicker(x) {
    console.log(x);
    alert(x);

    setdatitos((value) => {
      return {
        ...value,
        fecha: x,
      };
    }); 
  } */

  return (
    <div>
      <Card
        raised="true"
        size="lg"
        variant="outlined"
        sx={{ "--Card-radius": "8px" }}
      >
        <form action="">
          <Grid xs={12}>
            <h3>Sobre el Profesional</h3>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                size="small"
                fullWidth="true"
                onChange={(event) => {
                  setdatitos((value) => {
                    return {
                      ...value,
                      nombre: event.target.value
                    };
                  });
                }}
                onKeyUp={() => {
                  props.datos(datitos);
                }}
              >
                {" "}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Profesión"
                variant="outlined"
                size="small"
                fullWidth="true"
                onChange={(event) => {
                  let datos = event.target.value;
                  setdatitos((value) => {
                    return {
                      ...value,
                      profesion: datos
                    };
                  });
                }}
                onKeyUp={() => {
                  props.datos(datitos);
                }}
              >
                {" "}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              {" "}
              <TextField
                id="outlined-basic"
                label="RUT"
                variant="outlined"
                size="small"
                fullWidth="true"
                onChange={(event) => {
                  let datos = event.target.value;
                  setdatitos((value) => {
                    return {
                      ...value,
                      rutprof: datos
                    };
                  });
                }}
                onKeyUp={() => {
                  props.datos(datitos);
                }}
              >
                {" "}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <TextField
                id="outlined-basic"
                label="WhatsApp/Teléfono"
                variant="outlined"
                size="small"
                fullWidth="true"
                onChange={(event) => {
                  let datos = event.target.value;
                  setdatitos((value) => {
                    return {
                      ...value,
                      telefono: datos
                    };
                  });
                }}
                onKeyUp={() => {
                  props.datos(datitos);
                }}
              >
                {" "}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <div>
                <TextField
                  label="Logo"
                  type="file"
                  onChange={handleImageChange}
                  variant="outlined"
                  size="small"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="soft"
                fullWidth="true"
                sx={{ fontSize: "0.8em" }}
                onClick={props.imagencargar}
              >
                Cargar Imagen
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{ padding: "10px" }}></Divider>
          <Grid xs={12}>
            <h3>Sobre el Paciente</h3>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Nombre y apellido"
                variant="outlined"
                size="small"
                fullWidth="true"
                value={datitos.nombrepac}
                onChange={(event) => {
                  let datos = event.target.value;
                  setdatitos((value) => {
                    return {
                      ...value,
                      nombrepac: datos
                    };
                  });
                }}
                onKeyUp={() => {
                  props.datos(datitos);
                }}
              >
                {" "}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="RUT"
                variant="outlined"
                size="small"
                fullWidth="true"
                value={datitos.rutpac}
                onChange={(event) => {
                  let datos = event.target.value;
                  setdatitos((value) => {
                    return {
                      ...value,
                      rutpac: datos
                    };
                  });
                }}
                onKeyUp={() => {
                  props.datos(datitos);
                }}
              >
                {" "}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Diagnóstico"
                variant="outlined"
                size="small"
                fullWidth="true"
                value={datitos.diagnostico}
                onChange={(event) => {
                  let datos = event.target.value;
                  setdatitos((value) => {
                    return {
                      ...value,
                      diagnostico: datos
                    };
                  });
                }}
                onKeyUp={() => {
                  props.datos(datitos);
                }}
              >
                {" "}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              {" "}
              {/* <BasicDatePicker elvalor={valuedeldatapicker} /> */}
            </Grid>
          </Grid>
          <Divider sx={{ padding: "5px" }}></Divider>
          <Grid xs={12}>
            <h3>Indicaciones</h3>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {" "}
              <Textarea
                className="indicaciones"
                minRows={4}
                size="lg"
                value={datitos.indicaciones}
                variant="outlined"
                placeholder="Indicaciones para el Paciente"
                style={{ marginBottom: "10px" }}
                sx={{ fontSize: "0.8em" }}
                onChange={(event) => {
                  let datos = event.target.value;
                  setdatitos((value) => {
                    return {
                      ...value,
                      indicaciones: datos
                    };
                  });
                }}
                onKeyUp={() => {
                  props.datos(datitos);
                }}
              ></Textarea>
              <Button
                variant="soft"
                fullWidth="true"
                sx={{ fontSize: "0.8em" }}
                onClick={() => {
                  setdatitos((value) => {
                    return {
                      ...value,
                      nombrepac: "",
                      rutpac: "",
                      indicaciones: "",
                      diagnostico: ""
                    };
                  });
                }}
              >
                Nuevo Paciente
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  );
}

export default Ingreso;
