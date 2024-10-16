import styles from './Home.module.css'
import Header from '../../components/layout/header/Header'

function Home() {
    return (
        <>
            <Header />
        <container className={styles.homeTitulo}>
            <h1 className={styles.homeTitulo}> Onde os jovens <span>Talentos</span> encontram desafios e as empresas encontram o <span>Futuro</span> </h1>
            <p  className={styles.descHome}> Conectamos seu negócio com nossos jovens de escolas públicas, através de Hackathons. Você traz o desafio e os jovens criam a melhor solução criativa e tecnológica.</p>

        
        </container>
        </>
    )
}

export default Home