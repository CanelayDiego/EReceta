import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/material/Divider";
import Sheet from "@mui/joy/Sheet";
import ReactToPrint from "react-to-print";
import Button from "@mui/joy/Button";

function Plantilla(props) {
  const componentRef = React.useRef();

  return (
    <div>
      <Card
        sx={{ boxShadow: "lg", alignItems: "center", alignContent: "center" }}
      >
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
          <CardContent
            sx={{
              textAlign: "center",
              alignContent: "center",
              alignItems: "center",
              paddingBottom: 5,
              paddingTop: "5%"
            }}
          >
            <Avatar sx={{ "--Avatar-size": "4rem" }}>
              <img
                id="previewImage"
                style={{ maxWidth: "100px" }}
                alt="imagen"
                src="./imagenes/default.svg"
              />
            </Avatar>
            <Chip
              size="sm"
              variant="soft"
              color="primary"
              sx={{
                mt: -1,
                mb: 1,
                border: "3px solid",
                borderColor: "background.surface"
              }}
            >
              {props.profesion}
            </Chip>
            <Typography level="title-lg"> {props.nombre}</Typography>
            <Typography level="body-sm" sx={{ maxWidth: "25ch" }}>
              {props.rutprof}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                "& > button": { borderRadius: "2rem" }
              }}
            >
              <WhatsAppIcon></WhatsAppIcon>
              <Typography level="title-sm" sx={{ paddingTop: 0.3 }}>
                {props.telefono}
              </Typography>
            </Box>
          </CardContent>
          <div>
            <CardOverflow
              sx={{
                bgcolor: "background.level1",
                width: "100%",
                minWidth: "30em"
              }}
            >
              <Divider></Divider>

              <div style={{ height: "40px" }}></div>
              <CardContent
                sx={{
                  textAlign: "center",
                  alignContent: "center",
                  alignItems: "center",
                  paddingBottom: 2
                }}
              >
                <Typography level="h6"> {props.nombrepaciente}</Typography>
                <Typography level="body-md">{props.rutpaciente}</Typography>
                <Typography fontWeight="body-md" sx={{ marginBottom: 2 }}>
                  {props.edad} Años
                </Typography>

                <Card sx>
                  <Sheet
                    sx={{
                      borderRadius: "sm",
                      p: 0.5,
                      my: 0.5,
                      display: "flex",
                      gap: 1,
                      "& > div": { flex: 1 }
                    }}
                  >
                    {/*<div>
                  <Typography level="body-xs" fontWeight="lg">
                    Edad
                  </Typography>
                  <Typography fontWeight="lg">{props.edad}</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    test
                  </Typography>
                  <Typography fontWeight="lg">18.962.068-3</Typography>
                </div> */}
                    <div>
                      <Typography fontWeight="body-md" sx={{ marginBottom: 2 }}>
                        {" "}
                        {props.fecha}
                      </Typography>
                      <Typography level="body-xs" fontWeight="lg">
                        Diagnóstico
                      </Typography>
                      <Typography fontWeight="lg">
                        {props.diagnostico}
                      </Typography>
                    </div>
                  </Sheet>{" "}
                </Card>
              </CardContent>
              <div style={{ height: "20px" }}></div>

              <Divider variant="middle"></Divider>
              <div style={{ height: "20px" }}></div>

              <CardContent>
                <Typography level="h6" sx={{ paddingLeft: 2 }}>
                  Indicaciones
                </Typography>
                <Card
                  sx={{
                    boxShadow: "lg",
                    alignItems: "center",
                    alignContent: "center",
                    marginBottom: 5,
                    marginTop: 2,
                    marginLeft: 2,
                    marginRight: 2
                  }}
                  variant="outlined"
                >
                  <Box style={{ wordWrap: "break-word", width: "25em" }}>
                    <div>
                      <Typography level="body-md">
                        {" "}
                        {props.indicaciones}
                      </Typography>
                    </div>
                  </Box>
                </Card>
              </CardContent>
            </CardOverflow>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Plantilla;
