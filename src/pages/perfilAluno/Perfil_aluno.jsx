import styles from '../perfilAluno/Perfil_aluno.module.css'
import CardPerfil from '../../components/Perfil_aluno/CardPerfil'
import HeaderInterno from '../../components/layout/headerInterno/HeaderInterno'
import Footer from '../../components/layout/footer/Footer'
import {React, useEffect, useState} from "react";
import HeaderMobile from "../../components/HeaderFeedInterno/HeaderFeedInterno";
function Perfil_aluno(){

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
        <section className={styles.Page}>
            <CardPerfil />
        </section>
            <Footer />
        </>
    )
}

export default Perfil_aluno;