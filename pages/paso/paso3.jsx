import LeftSide from '../../components/LeftSide';
import RightSide from '../../components/RightSide';
import HostStyles from '../../styles/Host.module.css';

const pasoTres = () => {
  return (
    <main className={HostStyles.main}>
      <LeftSide description='¿Qué servicios ofrece este lugar?' />
      <RightSide image1='/wifi.png' image2='/agua_caliente.png' image3='/cocina.png' image4='/television.png'
                alt1='Wifi' alt2='Agua caliente' alt3='Cocina' alt4='Televisión'
                description1='Wifi' description2='Agua caliente' description3='Cocina' description4='Televisión'
                paso='paso2'
      />
    </main>
  )
}

export default pasoTres;