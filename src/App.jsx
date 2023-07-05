import React from "react";
import Photos from "./Photos";
import When from "./When";
import Confirmation from "./Confirmation";
import Footer from "./Footer";
import Header from "./Header";
import OurHistory from "./OurHistory";
import Schedule from "./Schedule";

const App = () => {
  return (
    <>
      <Header
        wife_name={"Rayssa"}
        husband_name={"Henrique"}
        data="29 de Agosto de 2022"
      />
      <OurHistory wife_name={"Rayssa"} husband_name={"Henrique"} />
      <Schedule />
      <Confirmation />
      <When
        day={27}
        mounth={"Agosto"}
        year={2022}
        dayOfWeek={"Sábado"}
        hour={"17:00"}
        localName={"Igreja Santo Amaro"}
        adress={"Rua vale do sol, 520 - Botafogo"}
      />
      <Photos />
      <Footer />
    </>
  );
};

export default App;
