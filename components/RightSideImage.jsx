import Image from 'next/image';
import RightSideImageStyles from '../styles/RightSideImage.module.css';

const RightSideImage = (props) => {
  const { image, title, subtitle, alt } = props;
  return (
    <section className={RightSideImageStyles.right_side_image}>
      <Image src={ image } alt={ alt } layout="fill" />
      <h2 className={RightSideImageStyles.carlos}> { title } </h2>
      <p className={RightSideImageStyles.subtitle}> { subtitle } </p>
    </section>
  );
}

export default RightSideImage;