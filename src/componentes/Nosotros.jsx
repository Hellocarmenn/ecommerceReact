import React, { useEffect } from "react";

export const Nosotros = () => {
  const clickear = () => {
    console.log("Click");
  };

  useEffect(() => {
    window.addEventListener("click", clickear);
    return () => {
      window.addEventListener("click", clickear);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="main-title">Nosotros</h1>
      <p>Este es el componente "Nosotros"</p>
    </div>
  );
};
