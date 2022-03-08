import Image from "next/image";
import SelectionButtonStyles from "../styles/SelectionButton.module.css";

function SelectionButton(props) {
  const { image, text, alt } = props;
  return (
    <section className={SelectionButtonStyles.selection}>
      <div className={SelectionButtonStyles.selectionImage}>
        <Image src={image} alt={alt} width={55} height={50} />
      </div>
      <h3 className={SelectionButtonStyles.selectionText}> {text} </h3>
    </section>
  );
}

export { SelectionButton };
