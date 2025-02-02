import styles from './Header.module.css'
import Button from '../button/button'
import Navbar from './headerComponents/Navbar'
import LinkComponent from '../link/LinkComponent'

function Header() {
    return (
        <header className={styles.header}>
            <LinkComponent linkTo="/" text={<div className={styles.logoHeader}></div>}/>
            <Navbar />
            <LinkComponent customClass="buttonEntrarNav" linkTo="/Login" text={<Button customClass="buttonHeader" text="Entrar"/>}>  </LinkComponent>
        </header>
    )
}

export default Header;