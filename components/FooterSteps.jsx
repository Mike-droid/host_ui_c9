import Link from 'next/link';
import ActionButton from './ActionButton';
import FooterStepsStyles from '../styles/FooterSteps.module.css';

const footerSteps = (props) => {
  const { paso } = props;
  return (
    <footer
      className={FooterStepsStyles.footer}
    >
      <ul className={FooterStepsStyles.stepsList}>
        <li>
          <Link href={`/paso/${paso}`}>
            <a className={FooterStepsStyles.atras}>
              Atrás
            </a>
          </Link>
        </li>
        <li>
          <ActionButton
            textButton="Siguiente"
            paso="#"
          />
        </li>
      </ul>
    </footer>
  )
}

export default footerSteps;