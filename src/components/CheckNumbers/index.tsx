import { useState } from "react";

const CheckNumber = () => {
  const [number, setNumber] = useState("0");
  const [errorMessage, setErrorMessage] = useState("");

  const isEven = parseInt(number) % 2 === 0;

  return (
    <div>
      <h1>Componente Par ou Ímpar</h1>
      <input
        type="text"
        name="number"
        placeholder="Digite o numero"
        value={number}
        onChange={(event) => {
          const rawValue = event.target.value;

          const numberValue = parseInt(rawValue);

          setNumber(rawValue);

          if (isNaN(numberValue)) {
            setErrorMessage("Por favor, digite um número.");
            return;
          }

          setErrorMessage("");
        }}
      />
      <p role="presentation">{isEven ? "Par" : "Ímpar"}</p>

      <p role="alert">{errorMessage}</p>
      {/* role é um atributo que identifica oque a essa seção significa */}
    </div>
  );
};

export default CheckNumber;
