import styles from "./styles/OurHistory.module.css";

import couple from "./assets/img/couple.png";
import React from "react";
import TitleSection from "./components/TitleSection";

const OurHistory = ({ wife_name, husband_name }) => {
  return (
    <section className={styles.ourHistory}>
      <TitleSection
        title="Nossa História"
        subtitle="De um encontro mágico ao amor eterno: a nossa jornada rumo ao altar"
      />
      <div className={styles.content_container}>
        <div className={styles.wife_side}>
          <h2>{wife_name}</h2>
          <p>
            A alma cheia de encanto e coração repleto de ternura. Com um sorriso
            cativante e uma personalidade radiante, Rayssa ilumina cada ambiente
            por onde passa. Sua doçura é capaz de envolver a todos, enquanto sua
            determinação e paixão pela vida a impulsionam a alcançar seus
            sonhos. Uma mulher de atitude, Rayssa cativa não apenas com sua
            beleza exterior, mas também com sua generosidade e bondade
            inigualáveis.
          </p>
        </div>
        <div className={styles.couple}>
          <img src={couple} alt="Couple Photo" />
        </div>
        <div className={styles.husband_side}>
          <h2>{husband_name}</h2>
          <p>
            Com seu sorriso contagiante e olhar sereno, Henrique possui uma
            presença magnética que ilumina os dias de Rayssa. Sua gentileza e
            cuidado constante mostram o quanto ela é amada e valorizada. Com
            ele, ela descobriu o verdadeiro significado da palavra cumplicidade,
            pois juntos enfrentaram desafios, celebraran conquistas e
            construíram uma história única e especial.
          </p>
        </div>
      </div>

      <div className={styles.motivational}>
        <div className={styles.motivational_container}>
          <p>“Melhor ter amado e perdido do que nunca ter amado”</p>
          <span>Robert Patterson</span>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
