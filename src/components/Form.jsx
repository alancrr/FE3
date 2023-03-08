import { useState } from "react";
import Card from "./Card"
import styles from "./Form.module.css";
import React from 'react'

function Form() {
  
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState(false);
  const [errorMessage, setIsErrorMessage] = useState(false);

  // creo una variable boolean para mi validación
  const isValidName = name.length >= 3;
  const isValidLastname = lastName.length > 6;

  // Función cuando se dispara onSubmit event
  function submitForm(e) {
    e.preventDefault();

    if (isValidName && isValidLastname) {
      setMessage(false);
      setIsErrorMessage(true)
      return;
    } else {
        setMessage(true);
        setIsErrorMessage(false)
    }
  }

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };


  return (
    <>
      <h1>Mi Formulario</h1>
      <form onSubmit={submitForm}>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Escriba su nombre"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Escriba su apellido"
            value={lastName}
            onChange={onLastNameChange}
          />
        </div>
        <div>
          <button type="submit">Submitear</button>
        </div>
      </form>
      {message && (
        <Card name={values.name} lastName={values.lastName}/>
      )}
      {errorMessage && (
        <p className={styles.inputError}>Su nombre/apellido no cumple las condiciones</p>
      )}
    </>
  );
}

export default Form;
