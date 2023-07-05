import styles from "./styles/Confirmation.module.css";
import React from "react";
import Form from "./components/Form";

const Confirmation = () => {
  return (
    <section className={styles.confirmation}>
      <div className={styles.background}>
        <div className={styles.shadow}>
          <div className={styles.text}>
            <div className={styles.text_container}>
              <h1>Podemos confirmar sua presença?</h1>
              <p>
                Para melhor recebê-los, pedimos que confirmem presença até 3
                dias antes do evento
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formulary}>
        <Form />
      </div>
    </section>
  );
};

export default Confirmation;
