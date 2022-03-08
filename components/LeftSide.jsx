import BSbutton from './BSbutton';
import LeftSideStyles from '../styles/LeftSide.module.css'

const LeftSide = (props) => {
  const { description } = props;
  return (
    <section className={LeftSideStyles.leftSide}>
      <BSbutton />
      
      <div className={LeftSideStyles.innerContent}>
        <p className={LeftSideStyles.description}>
          { description }
        </p>
      </div>

    </section>
  )
}

export default LeftSide;