//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from 'react'
import styles from "./Form.module.css";

function Card({name, lastName}) {
  return (
    <div className={styles.card}>
      <h3>Muy bien!</h3>
      <p> {name} {lastName} es correcto.</p>
    </div>
  );
}

export default Card;
