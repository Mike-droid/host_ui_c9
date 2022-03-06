import Link from 'next/link'
import BSbuttonStyles from '../styles/BSbutton.module.css'

const BSbutton = () => {
  return (
    <Link href="/">
      <a className={BSbuttonStyles.BSbutton}>
        BS
      </a>
    </Link>
  )
}

export default BSbutton