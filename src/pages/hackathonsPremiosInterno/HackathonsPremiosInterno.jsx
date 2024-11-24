import Premio from '../../components/Prêmios/Prêmios'
import trofeus from '../../assets/imgs/trofeus.png'
import styles from '../hackathonsPremiosInterno/HackathonsPremiosInterno.module.css'
import Premios from '../../components/layout/cardPreto/CardPessoas'
import Oculus from '../../assets/imgs/oculus_quest.png'
import Mentoria from '../../assets/imgs/Mentoria.png'
import Galaxy from '../../assets/imgs/Galaxy.png'
import Echo from '../../assets/imgs/Echo_Dot.png'
import Cloud from '../../assets/imgs/Cloud_Fast.png'
import Smart from '../../assets/imgs/Smart_Speaker.png'
import HeaderInterno from '../../components/layout/headerInterno/HeaderInterno'
import Footer from '../../components/layout/footer/Footer'
import HeaderMobile from "../../components/HeaderFeedInterno/HeaderFeedInterno";
import React, { useEffect, useState } from 'react';

function premios (){

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 868px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

    return(

        <>
        {isMobile? <HeaderMobile /> : <HeaderInterno />}
        <div className={styles.container_p}>
            <h1 className={styles.text_premio}> Total de Prêmios</h1>
            <div className={styles.container_premio}>
            <Premio img={trofeus} title='1° Lugar' context='Para todos os participantes da equipe: (até 5 pessoas)' desc_premios='- 1 Oculus Quest 2 Advanced All-in-One VR 128 GB (Branco)- 1 Accenture Cloud Fast Academy (1 semana, 100% remoto)- 4 encontros de mentoria com a Aliança Empreendedora (100% remoto)'/>
            <br />
            <Premio img={trofeus} title='2° Lugar' context='Para todos os participantes da equipe: (até 5 pessoas)' desc_premios='- 1 Galaxy Buds2 Pro da Samsung 
            - 1 Accenture Cloud Fast Academy (1 semana, 100% remoto) 
            - 4 encontros de mentoria com a Aliança Empreendedora (100% remoto)'/>
            <br />
            <Premio img={trofeus} title='3° Lugar' context='Para todos os participantes da equipe: (até 5 pessoas)' desc_premios='- 1 Alexa - Echo Dot (4ª Geração) - 1 Smart Speaker com Alexa | Música, informação e Casa Inteligente 
            - 1 Accenture Cloud Fast Academy (1 semana, 100% remoto) - 4 encontros de mentoria com a Aliança Empreendedora (100% remoto)'/>
            </div>
            <div className={styles.premiacao}>
                <div className={styles.premio}>
                    <img src={Oculus} alt="Oculus" />
                    <h3 className={styles.desc_grande} >Oculos Quest</h3>
                </div>
                <div className={styles.premio}>
                    <img src={Cloud} alt="Oculus" />
                    <h3 className={styles.desc_grande}>Accenture Cloud Fast</h3>
                </div>
                <div className={styles.premio}>
                    <img src={Mentoria} alt="Oculus" />
                    <h3 className={styles.desc_grande} >Mentoria </h3>
                </div>
                <div className={styles.premio}>
                    <img src={Galaxy} alt="Oculus" />
                    <h3 className={styles.desc_grande} >Galaxy Buds2</h3>
                </div>
            </div>
            <br />
            <div className={styles.premiacao}>
            <div className={styles.premio}>
                    <img src={Echo} alt="Oculus" />
                    <h3 className={styles.desc_grande} >Echo Dot</h3>
                </div>
                <div className={styles.premio}>
                    <img src={Smart} alt="Oculus" />
                    <h3 className={styles.desc_grande} >Smart Speaker</h3>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default premios