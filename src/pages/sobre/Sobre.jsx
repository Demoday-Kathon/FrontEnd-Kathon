import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import ImageGlass from '../../assets/imgs/sobre-image-female-glass.png'
import Iphone15pro from '../../assets/imgs/iPhone16Pro.png'
import Equipe from '../../assets/imgs/equipedesenvolvedora.png'
import Macbook from '../../assets/imgs/macbook.png'
import styles from './Sobre.module.css'
import blur from '../../assets/imgs/backgrounds/elipse.png'
import { motion } from 'framer-motion'

import { fadein } from '../../variants'


function Sobre({ children }) {
    
    return (
        <div className={styles.container}>
            <Header />
                <div className={styles.containerPrimary}>
                    <div className={styles.images}>
                        <img className={styles.elipseBlur} src={blur} alt="blur roxo" />
                        <img className={styles.ImageGlass} src={ImageGlass} alt="Mulher usando Óculos" />
                    </div>
                    <motion.div
                    variants={fadein('up', 0.5)}
                    initial='hidden'
                    whileInView={'show'}

                    className={styles.ContainerTitleSobre}>
                        <h2 className={styles.titulosSection}>Somos a <span className={styles.colorPurple}>Kathon</span></h2>
                        <p>Uma <span className={styles.subtitle}>Startup</span> que permite jovens talentos a oportunidades reais, onde empresas ganham soluções e eles, experiência.</p>
                    </motion.div>
                </div>
            <div className={styles.containerSecondary}>
                <img className={styles.iphone} src={Iphone15pro} alt="Celular Iphone 16 Pro" />
                <motion.p 
                variants={fadein('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.9}}
                className={styles.textDescription}>As Melhores soluções para a sua empresa</motion.p>
            </div>
            <div className={styles.containerTerciary}>
                <motion.p 
                variants={fadein('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.5}}
                className={styles.textDescription}>O lugar onde jovens podem desenvolver soluções para problemas reais</motion.p>
                <img className={styles.iphone} src={Macbook} alt="Macbook" />
            </div>
            <div className={styles.equipeContainer}>
                <div className={styles.containerDesenvolvedores}>
                    <motion.h3
                    variants={fadein('down', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.4}}
                    className={styles.titulodesenvolvedores}>Equipe desenvolvedora</motion.h3>
                    <img className={styles.imgEquipe} src={Equipe} alt="Equipe desenvolvedora" />
                </div>
                <div className={styles.descDesenvolvedores}>
                    <motion.p
                    variants={fadein('right', 0.3)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: false, amount: 0.1}}
                    className={styles.textDescription}>“Coisas incríveis nunca são feitas por uma única pessoa, são feitas por um time.”</motion.p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sobre