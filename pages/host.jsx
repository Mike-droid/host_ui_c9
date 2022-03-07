import LeftSideWithButton from '../components/LeftSideWithButton.jsx';
import RightSideImage from '../components/RightSideImage.jsx';
import HostStyles from '../styles/Host.module.css'

const Anfitrion = () => {
  return (
    <main className={HostStyles.main}>
      <LeftSideWithButton description="Los anfitriones hacen que Booking System sea Booking System" />
      <RightSideImage image="/carlos.jpg" title="CARLOS" subtitle="Anfitrión en Medellín, Colombia" alt="Carlos" />
    </main>
  )
}

export default Anfitrion;