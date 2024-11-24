import styles from './CadastroEscolha.module.css'
import React, { useEffect, useState } from 'react';
import Header from '../../components/layout/header/Header';
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase';
import CardBrancoBase from '../../components/CardBrancoBase/CardBrancoBase';
import LinkComponent from '../../components/layout/link/LinkComponent';
import Footer from '../../components/layout/footer/Footer';
import HeaderMobile from "../../components/HeaderFeed/HeaderFeed";
import iconeEstudante from  '../../assets/imgs/iconeEstudante.png';
import iconeEmpresa from   '../../assets/imgs/iconeEmpresa.png';


function CadastroEscolha() {

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 868px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

    return (
        <>
            {isMobile? <HeaderMobile /> : <Header />}
            <CardPretoBase customClass="cardPretoForms">
                <h1 className={styles.tituloCadastroEscola}> Escolha seu tipo de conta </h1>
                <div className={styles.areaCardsBrancos}>
                    <LinkComponent
                    linkTo="/CadastroEstudante"
                    customClass='escolhaCadastro'
                    text={<CardBrancoBase 
                        customClass="cardBrancoEscolha">
                        <img src={iconeEstudante} alt="iconeEstudante" className={styles.imgIconEscolha}/>
                        Estudante

                    </CardBrancoBase>} />

                    
                    <LinkComponent
                    linkTo="/CadastroEmpresa"
                    customClass='escolhaCadastro'
                    text={<CardBrancoBase customClass="cardBrancoEscolha">
                        <img src={iconeEmpresa} alt="iconeEstudante" className={styles.imgIconEscolha}/>
                        Empresa

                    </CardBrancoBase>} />

                    

                </div>

            </CardPretoBase>
            <Footer /> 
        </>
    )
}

export default CadastroEscolha;