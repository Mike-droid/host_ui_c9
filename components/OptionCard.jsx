import Image from 'next/image';
import optionCardStyles from '../styles/optionCard.module.css';

const optionCard = (props) => {
  const { image, alt, description } = props;
  return (
    <button
      className={optionCardStyles.optionCard}
    >
      <Image
        src={ image }
        alt={ alt }
        width="100px"
        height="82px"
      />
      <p
        className={optionCardStyles.description}
      >
        { description }
      </p>
    </button>
  )
}

export default optionCard;