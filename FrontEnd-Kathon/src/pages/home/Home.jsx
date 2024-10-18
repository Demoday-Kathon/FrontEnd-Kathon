import styles from './Home.module.css'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import Button from '../../components/layout/button/button'

function Home() {
    return (
        <div className={styles.home}>
        <Header />
        <container className={styles.homeTitulo}>
            <h1 className={styles.homeTitulo}> Desafios que  <span> Revelam</span> Soluções que <span>Inovam</span> </h1>
            <div className={styles.botoesHome}>
                <Button customClass="buttonBaixo" text="Cadastre-se"/>
                <Button customClass="buttonBaixo" text="Seja parceiro"/>
            </div>

            <div className={styles.cardPretoHome}>
                <h1 className={styles.tituloCardPreto}>O que é hackathon?</h1>
                <p className={styles.descHackathonHome}> 
                Hackathon é um evento no qual equipes colaboram para criar soluções inovadoras e criativas, para problemas reais ou fictícios de empresas, com prêmios aos vencedores.
                </p>

            </div>

        
        </container>
        <Footer />
        </div>
    )
}

export default Home