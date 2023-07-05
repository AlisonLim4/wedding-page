import styles from "./styles/Schedule.module.css";
import TitleSection from "./components/TitleSection";
import ScheduleCard from "./components/ScheduleCard";
import building from "./assets/icons/building_icon.svg";
import crown from "./assets/icons/crown_icon.svg";
import car from "./assets/icons/car_icon.svg";
import camera from "./assets/icons/cam_icon.svg";
import cake from "./assets/icons/cake_icon.svg";
import drink from "./assets/icons/drink_icon.svg";
import React from "react";

const Schedule = () => {
  return (
    <section className={styles.schedule}>
      <TitleSection title="Programação" />
      <div className={styles.events}>
        <ScheduleCard
          img={building}
          alt="Building icon"
          title="Cerimônia"
          description={
            "A cêrimônia terá início as 17:00hs na Igreja, e logo após todos podem se dirigir para a recepção,no salão festivo"
          }
        />
        <ScheduleCard
          img={crown}
          alt="Crown icon"
          title="O que vestir"
          description={"Sugerimos traje esportivo fino para os convidados"}
        />
        <ScheduleCard
          img={car}
          alt="Car icon"
          title="Estacionamento"
          description={
            "Serão disponibilizadas algumas vagas nos locais de evento. (Sem reservas)"
          }
        />
        <ScheduleCard
          img={camera}
          alt="Camera icon"
          title="Registro"
          description={
            "Todo o evento será registrado por nosso profissionais. Alguns dias após o evento, estaremos disponibilizando algumas fotos para os convidados"
          }
        />
        <ScheduleCard
          img={cake}
          alt="Cake icon"
          title="Recepção"
          description={
            "Será realizado controle de entrada de convidados no salão de festas. Não deixe de levar o convite individual"
          }
        />
        <ScheduleCard
          img={drink}
          alt="Drink icon"
          title="Bebidas"
          description={
            "Bebidas liberadas, com serviço de barman, que estará preparando deliciosos drinks"
          }
        />
      </div>
    </section>
  );
};

export default Schedule;
