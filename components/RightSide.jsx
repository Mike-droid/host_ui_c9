import OptionCard from '../components/OptionCard';
import RightSideStyles from '../styles/RightSide.module.css';


const RightSide = (props) => {
  return (
    <section className={RightSideStyles.right_side}>

      <div className={RightSideStyles.optionsList}>
        <OptionCard image='/casa.png' alt="Casa" description="Casa" />
        <OptionCard image='/apartamento.png' alt="Apartamento" description="Apartamento" />
        <OptionCard image='/finca.png' alt="Finca" description="Finca" />
        <OptionCard image='/hotel.png' alt="Hotel" description="Hotel" />
      </div>
      
    </section>
  );
}

export default RightSide;