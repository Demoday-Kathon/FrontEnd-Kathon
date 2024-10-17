import styles from './Home.module.css'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'

function Home() {
    return (
        <div className={styles.home}>
        <Header />
        <container className={styles.homeTitulo}>
            <h1 className={styles.homeTitulo}> Onde os jovens <span>Talentos</span> encontram desafios e as empresas encontram o <span>Futuro</span> </h1>
            <p  className={styles.descHome}> Conectamos seu negócio com nossos jovens de escolas públicas, através de Hackathons. Você traz o desafio e os jovens criam a melhor solução criativa e tecnológica.</p>

        
        </container>
        <Footer />
        </div>
    )
}

export default Home