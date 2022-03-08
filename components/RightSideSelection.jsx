import { SelectionButton } from "./SelectionButton";
import RightSideSelectionStyles from "../styles/RightSideSelection.module.css";

function RightSideSelection(props) {
  const { text1, text2, text3, text4 } = props;
  return (
    <section className={RightSideSelectionStyles.rightside}>
      <SelectionButton image="/carlos.jpg" text={text1} />
      <SelectionButton image="/carlos.jpg" text={text2} />
      <SelectionButton image="/carlos.jpg" text={text3} />
      <SelectionButton image="/carlos.jpg" text={text4} />
    </section>
  );
}

export { RightSideSelection };
