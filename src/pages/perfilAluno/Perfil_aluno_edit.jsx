import Styles from './Perfil_aluno_edit.module.css'
import HeaderInterno from '../../components/layout/headerInterno/HeaderInterno'
import Footer from '../../components/layout/footer/Footer'
import CardPerfilEdit from '../../components/Perfil_aluno/CardPerfilEdit';
import HeaderMobile from "../../components/HeaderFeedInterno/HeaderFeedInterno";
import {React, useEffect, useState} from "react";

function Perfil_aluno_edit(){

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

    return(
        <>
            {isMobile? <HeaderMobile /> : <HeaderInterno />}
        <section className={Styles.Page}>
            <CardPerfilEdit />
        </section>
            <Footer />
        </>
    )
}

export default Perfil_aluno_edit;