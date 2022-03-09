import LeftSide from '../../components/LeftSide';
import RightSide from '../../components/RightSide';
import HostStyles from '../../styles/Host.module.css';

const pasoUno = () => {
  return (
    <main className={HostStyles.main}>
      <LeftSide description='¿Qué tipo de alojamiento vas a compartir?' />
      <RightSide image1='/casa.png' image2='/apartamento.png' image3='/finca.png' image4='/hotel.png'
                alt1='Casa' alt2='Apartamento' alt3='Finca' alt4='Hotel'
                description1='Casa' description2='Apartamento' description3='Finca' description4='Hotel'
                paso='paso2'
      />
    </main>
  )
}

export default pasoUno;