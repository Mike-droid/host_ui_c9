import LeftSide from '../../components/LeftSide';
import RightSide from '../../components/RightSide';
import HostStyles from '../../styles/Host.module.css';
import OptionCard from '../../components/OptionCard';

const paso = (props) => {
  return (
    <main className={HostStyles.main}>
      <LeftSide description='¿Qué tipo de alojamiento vas a compartir?' />
      <RightSide />
    </main>
  )
}

export default paso;