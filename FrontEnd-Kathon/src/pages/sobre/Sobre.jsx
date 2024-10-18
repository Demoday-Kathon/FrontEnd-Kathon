import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import ImageGlass from '../../assets/imgs/sobre-image-female-glass.png'
import Iphone15pro from '../../assets/imgs/iPhone16Pro.png'
import Equipe from '../../assets/imgs/equipedesenvolvedora.png'
import Macbook from '../../assets/imgs/macbook.png'
import styles from './Sobre.module.css'

function Sobre() {
    return (
        <>
            <Header />
            <div className={styles.containerSobreNos}>
                <div className={styles.containerPrimary}>
                    <img className={styles.ImageGlass} src={ImageGlass} alt="Mulher usando Óculos" />
                    <div className={styles.ContainerTitleSobre}>
                        <h2 className={styles.titulosSection}>Somos a <span className={styles.colorPurple}>Kathon</span></h2>
                        <p>Uma <span className={styles.subtitle}>Startup</span> que permite jovens talentos a oportunidades reais, onde empresas ganham soluções e eles, experiência.</p>
                    </div>
                </div>

                <div className={styles.containerSecondary}>
                    <img className={styles.iphone} src={Iphone15pro} alt="Celular Iphone 16 Pro" />

                    <p className={styles.textDescription}>As Melhores soluções para a sua empresa</p>
                </div>

                <div className={styles.containerSecondary}>
                    <p className={styles.textDescription}>O lugar onde jovens podem desenvolver soluções para problemas reais</p>
                    <img className={styles.iphone} src={Macbook} alt="Macbook" />
                </div>

                <div className={styles.equipeContainer}>
                    <h3 className={styles.titulodesenvolvedores}>Equipe desenvolvedora</h3>

                    <div className={styles.containerTerciary}>
                    <img className={styles.iphone} src={Equipe} alt="Equipe desenvolvedora" />
                    <p className={styles.textDescription}>“Coisas incríveis nunca são feitas por uma única pessoa, são feitas por um time.”</p>
                </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sobre