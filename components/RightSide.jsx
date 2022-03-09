import OptionCard from '../components/OptionCard';
import RightSideStyles from '../styles/RightSide.module.css';
import FooterSteps from '../components/FooterSteps';

const RightSide = (props) => {
  const { image1, image2, image3, image4,
          alt1, alt2, alt3, alt4,
          description1, description2, description3, description4,
          paso
  } = props;

  return (
    <section className={RightSideStyles.right_side}>
      <OptionCard image={image1} alt={alt1} description={description1} />
      <OptionCard image={image2} alt={alt2} description={description2} />
      <OptionCard image={image3} alt={alt3} description={description3} />
      <OptionCard image={image4} alt={alt4} description={description4} />

      <FooterSteps paso={paso} />
    </section>
  );
}

export default RightSide;