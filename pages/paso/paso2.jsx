import LeftSide from '../../components/LeftSide';
import RightSide from '../../components/RightSide';
import HostStyles from '../../styles/Host.module.css';

const pasoDos = () => {
  return (
    <main className={HostStyles.main}>
      <LeftSide description='¿Para cuántas personas es el alojamiento?' />
      <RightSide image1='/1.png' image2='/2.png' image3='/3.png' image4='/4.png'
                alt1='1' alt2='2' alt3='3' alt4='4'
                description1='1' description2='2' description3='3' description4='4'
                paso='paso2'
      />
    </main>
  )
}

export default pasoDos;