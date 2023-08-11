import React from "react";
import ReactToPrint from "react-to-print";
import Diseno from "./diseno.jsx";

function Imprimir() {
  const componentRef = React.useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <h1>Print this out!</h1>}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>
        <Diseno />
      </div>
    </div>
  );
}

export default Imprimir;
