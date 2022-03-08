import Link from 'next/link';
import ActionButtonStyles from '../styles/ActionButton.module.css'

const ActionButton = (props) => {
  const { textButton, paso } = props;
  return (
    <Link href={`/paso/${paso}`}>
      <a className={ActionButtonStyles.ActionButton}>
        { textButton }
      </a>
    </Link>
  )
}

export default ActionButton;