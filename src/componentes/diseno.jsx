import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ReactToPrint from "react-to-print";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";

function Diseno(props) {
  /* SOBRE  EL PLUGIN DE PRINT  */
  const componentRef = React.useRef();

  /* SOBRE  EL PLUGIN DE PRINT  */
  return (
    <div>
      {/*<ReactToPrint
        trigger={() => (
          <Button
            variant="soft"
            fullWidth="true"
            sx={{ fontSize: "0.8em", marginBottom: "10px" }}
          >
            Imprimir
          </Button>
        )}
        content={() => componentRef.current}
        />*/}
      <div>
        <Card sx={{ boxShadow: "lg", backgroundColor: "#fbfcfd" }}>
          <div>
            <ReactToPrint
              trigger={() => (
                <Button
                  variant="plain"
                  fullWidth="true"
                  sx={{ fontSize: "0.8em", marginBottom: "10px" }}
                  color="primary"
                >
                  Imprimir
                </Button>
              )}
              content={() => componentRef.current}
            />{" "}
            <div ref={componentRef}>
              <div style={{ padding: "50px" }}>
                <Grid container spacing={2}>
                  <Grid item xs="3">
                    <img
                      id="previewImage"
                      alt="Preview"
                      style={{ maxWidth: "100px" }}
                    />
                  </Grid>
                  <Grid item xs="5"></Grid>
                  <Grid item xs="4">
                    <h4 className="nunito" style={{ margin: "5px" }}>
                      {props.nombre}
                    </h4>
                    <p style={{ fontSize: "0.7em", margin: "5px" }}>
                      {props.profesion}
                    </p>
                    <p style={{ fontSize: "0.7em", margin: "5px" }}>
                      {props.rutprof}
                    </p>
                  </Grid>
                </Grid>
                <Divider sx={{ padding: "1em" }}></Divider>
                <Grid container spacing={2}>
                  <Grid item xs="12" sx={{ paddingTop: "3em !important" }}>
                    <p className="datospaciente" style={{ display: "inline" }}>
                      Paciente:{" "}
                    </p>
                    <div
                      className="lineas"
                      style={{
                        display: "inline"
                      }}
                    >
                      <p
                        className="datospaciente"
                        style={{ display: "inline" }}
                      >
                        {props.nombrepaciente}
                      </p>{" "}
                    </div>
                  </Grid>
                  <Grid item xs="12">
                    <p className="datospaciente" style={{ display: "inline" }}>
                      R.U.T:{" "}
                    </p>
                    <div
                      className="lineas"
                      style={{
                        display: "inline"
                      }}
                    >
                      <p
                        className="datospaciente"
                        style={{ display: "inline" }}
                      >
                        {props.rutpaciente}
                      </p>{" "}
                    </div>
                  </Grid>
                  <Grid item xs="12">
                    <p className="datospaciente" style={{ display: "inline" }}>
                      Diagnóstico:{" "}
                    </p>
                    <div
                      className="lineas"
                      style={{
                        display: "inline"
                      }}
                    >
                      <p
                        className="datospaciente"
                        style={{ display: "inline" }}
                      >
                        {props.diagnostico}
                      </p>{" "}
                    </div>
                  </Grid>
                  <Grid item xs="12">
                    <p className="datospaciente" style={{ display: "inline" }}>
                      Fecha:{" "}
                    </p>
                    <div
                      className="lineas"
                      style={{
                        display: "inline"
                      }}
                    >
                      <p
                        className="datospaciente"
                        style={{ display: "inline" }}
                      >
                        {props.fecha}
                      </p>{" "}
                    </div>
                  </Grid>
                  <Grid conteainer spacing={2}>
                    <div>
                      <Grid item xs="12">
                        <div>
                          <h3
                            style={{
                              paddingTop: "1em",
                              textDecoration: "underline",
                              textDecorationColor: "#0000001f"
                            }}
                          >
                            Indicaciones
                          </h3>
                        </div>
                        <Grid item xs="12">
                          <p
                            style={{
                              textAlign: "justify",
                              textJustify: "inter-word",
                              fontSize: "0.8em"
                            }}
                          >
                            {props.indicaciones}
                          </p>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Diseno;
