import BSbutton from './BSbutton';
import ActionButton from './ActionButton';

const LeftSideWithButton = (props) => {
  const { description } = props;
  return (
    <section>
      <BSbutton />
      <p> { description } </p>
      <ActionButton textButton="Anímate a ser anfitrión" />
    </section>
  )
}

export default LeftSideWithButton;