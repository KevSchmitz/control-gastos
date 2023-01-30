import React from "react";

const Mensaje = ({ children, tipo }) => {
  return <div className={`alerta ${tipo}`}>{children}</div>; // Para generar CSS dinámico
};

export default Mensaje;
