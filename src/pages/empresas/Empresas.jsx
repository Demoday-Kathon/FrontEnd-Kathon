import React, { useEffect, useState } from 'react'
import Styles from './Empresas.module.css'
import CaixaPreta from '../../components/layout/props.empresa/CaixaPreta'
import Header from "../../components/layout/header/Header"
import Empresa from "../../assets/imgs/botaoDiferente.png"
import Footer from "../../components/layout/footer/Footer"
import HeaderMobile from "../../components/HeaderFeed/HeaderFeed";

function Empresas() {

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 868px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

    return (
        <section className={Styles.fundoempresa}>
            {isMobile? <HeaderMobile /> : <Header />}
            <div className={Styles.empresapai}>
                <div className={Styles.textempresa}><h2>Hackathons que Conectam <span>Talentos</span> e <span>Transformam Negócios</span> </h2></div>
                <div className={Styles.empresa1}>
                    <h1>Busca por inovação</h1>
                    <p>Patrocinar ou organizar hackathons coloca a sua empresa em evidência, melhorando sua imagem de marca como uma organizaçãoinovadora e comprometida com a tecnologia.</p>
                </div>
                <div className={Styles.boxtextpai}>
                    <div className={Styles.boxtext}>
                        <h5>Resolução rápida de problemas </h5>
                        <br />
                        <p className={Styles.boxtextp1}>Hackathons promovem a geração de ideias e soluções criativas em um curto período, ajudando a empresa a inovar de forma ágil e eficiente.</p>
                    </div>
                    <div className={Styles.boxtext}>
                        <h5 className={Styles.boxtexth5}>Descoberta de novos talentos</h5>
                        <br />
                        <p className={Styles.boxtextp2}>Identifique jovens com habilidades excepcionais e potencial para
                            <br />impulsionar seu negócio.</p>
                    </div>
                </div>
                <div className={Styles.boxfinal}>
                    <h4> <span>Tudo</span> que a sua empresa<br />
                        procura</h4>

                    <div className={Styles.boxfinalfilho}>

                        <div className={Styles.filho1}>
                            <CaixaPreta text="Visibilidade" customCaixa="boxpreto1"></CaixaPreta>
                            <CaixaPreta text="Resolução" customCaixa="boxpreto2"></CaixaPreta>
                            <CaixaPreta text="Inovação" customCaixa="boxpreto3"></CaixaPreta>
                        </div>

                        <div className={Styles.filho2}>
                            <img className={Styles.filhoimg} src={Empresa} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Empresas