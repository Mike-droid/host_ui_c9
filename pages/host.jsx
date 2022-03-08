import LeftSide from "../components/LeftSide.jsx";
import RightSideImage from "../components/RightSideImage.jsx";
import HostStyles from "../styles/Host.module.css";
import { RightSideSelection } from "../components/RightSideSelection.jsx";

const Anfitrion = () => {
  return (
    <main className={HostStyles.main}>
      <LeftSide
        hasButton
        description="Los anfitriones hacen que Booking System sea Booking System"
      />
      {/* <RightSideImage
        image="/carlos.jpg"
        title="CARLOS"
        subtitle="Anfitrión en Medellín, Colombia"
        alt="Carlos"
      /> */}
      <RightSideSelection
        text1="Casa"
        text2="Apartamento"
        text3="Finca"
        text4="Hotel"
      />
    </main>
  );
};

export default Anfitrion;
