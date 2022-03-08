import BSbutton from './BSbutton';
import LeftSideStyles from '../styles/LeftSide.module.css'

const LeftSide = (props) => {
  const { description } = props;
  return (
    <section className={LeftSideStyles.leftSide}>
      <BSbutton />
      <p className={LeftSideStyles.description}>
        { description }
      </p>
    </section>
  )
}

export default LeftSide;