import LeftSide from '../../components/LeftSide';
import RightSide from '../../components/RightSide';
import HostStyles from '../../styles/Host.module.css';

const paso = () => {
  return (
    <main className={HostStyles.main}>
      <LeftSide description='?' />
      <RightSide />
    </main>
  )
}

export default paso;