import Link from 'next/link';
import ActionButtonStyles from '../styles/ActionButton.module.css'

const ActionButton = (props) => {
  const { textButton } = props;
  return (
    <Link href='#'>
      <a className={ActionButtonStyles.ActionButton}>
        { textButton }
      </a>
    </Link>
  )
}

export default ActionButton;