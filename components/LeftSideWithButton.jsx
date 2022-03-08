import BSbutton from './BSbutton';
import ActionButton from './ActionButton';
import LeftSideWithButtonStyles from '../styles/LeftSideWithButton.module.css'

const LeftSideWithButton = (props) => {
  const { description } = props;
  return (
    <section className={LeftSideWithButtonStyles.leftSideWithButton}>

      <BSbutton />

      <div className={LeftSideWithButtonStyles.innerContent}>
        <p className={LeftSideWithButtonStyles.description}>
          { description }
        </p>
        <ActionButton textButton="Anímate a ser anfitrión" paso={1} />
      </div>

    </section>
  )
}

export default LeftSideWithButton;