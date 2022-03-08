import BSbutton from "./BSbutton";
import ActionButton from "./ActionButton";
import LeftSideStyles from "../styles/LeftSideWithButton.module.css";

// We should reuse this component and use it in the other pages.

const LeftSide = (props) => {
  const { description, hasButton } = props;
  return (
    <section className={LeftSideStyles.leftSideWithButton}>
      <BSbutton />
      <p className={LeftSideStyles.description}> {description} </p>
      {hasButton && <ActionButton textButton="Anímate a ser anfitrión" />}
    </section>
  );
};

export default LeftSide;
