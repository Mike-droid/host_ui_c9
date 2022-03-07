import BSbutton from './BSbutton';
import ActionButton from './ActionButton';
import LeftSideWithButtonStyles from '../styles/LeftSideWithButton.module.css'

const LeftSideWithButton = (props) => {
  const { description } = props;
  return (
    <section className={LeftSideWithButtonStyles.leftSideWithButton}>
      <BSbutton />
      <p className={LeftSideWithButtonStyles.description}> { description } </p>
      <ActionButton textButton="Anímate a ser anfitrión" />
    </section>
  )
}

export default LeftSideWithButton;