import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderInterno from "../../components/layout/headerInterno/HeaderInterno";
import styles from "../nivelDesafioInterno/nivelDesafioInterno.module.css";
import largatixa from "../../assets/imgs/largatixa.svg";
import crocodilo from "../../assets/imgs/crocodilo.svg";
import dinossauro from "../../assets/imgs/dinossauro.svg";
import Footer from "../../components/layout/footer/Footer";
import Button from "../../components/layout/button/button";
import { FaExclamationTriangle } from "react-icons/fa";
import HeaderMobile from "../../components/HeaderFeedInterno/HeaderFeedInterno";

function NivelDesafio() {

  const [isMobiles, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 868px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  const handleLinkClick = (e) => {
    if (isMobile()) {
      e.preventDefault();
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    }
  };

  return (
    <>
      {isMobiles? <HeaderMobile /> : <HeaderInterno />}
      <div className={styles.caixaDesafio}>
        <div className={styles.titleDesafio}>
          <h1>
            <span>Desafios</span> para você <br></br> desenvolver suas{" "}
            <span>habilidades</span>
          </h1>
        </div>
        <div className={styles.sumariodesafio}>
          <p>
            Pensando em você que quer colocar em prática suas habilidades,
            criamos a IAthon, uma Inteligência Artificial que cria desafios
            práticos baseado no seu nível de conhecimento. Clique, explore e
            pratique!
          </p>
        </div>
        <div className={styles.nivelDesafio}>
          <Link className={styles.desafio1} to="/desafioscode" onClick={handleLinkClick}>
            <p>Modo Largatixa</p>
          </Link>
          <Link className={styles.desafio2} to="/desafioscode" onClick={handleLinkClick}>
            <p>Modo Jacaré</p>
          </Link>
          <Link className={styles.desafio3} to="/desafioscode" onClick={handleLinkClick}>
            <p>Modo Dinossauro</p>
          </Link>
        </div>
        <div className={styles.nivels}>
          <div className={styles.nivelIniciante}>
            <img src={largatixa} alt="" /> <br />
            <p className={styles.titleIniciante}>Nivel Iniciante</p>
            <p className={styles.infosDesafios}>
              Para você que ainda <br />
              não sabe muito
            </p>
          </div>
          <div className={styles.nivelIntermediario}>
            <img src={crocodilo} alt="" />
            <p className={styles.titleIntermediario}>Nivel Intermediário</p>
            <p className={styles.infosDesafios}>
              Para você que já tem <br /> uma certa experiência
            </p>
          </div>
          <div className={styles.nivelAvancado}>
            <img src={dinossauro} alt="" />
            <p className={styles.titleAvancado}>Nivel Avançado</p>
            <p className={styles.infosDesafios}>
              Para você que sabe muito <br /> e quer se aprimorar
            </p>
          </div>
        </div>
        <div className={styles.abadebotoes}>
          <Button customClass="botaodesafio1" text="Iniciar" />
          <Button customClass="botaodesafio2" text="Iniciar" />
          <Button customClass="botaodesafio3" text="Iniciar" />
        </div>
      </div>

      {showPopup && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <FaExclamationTriangle size={48} />
            <div className={styles.modalText}>
              <p>Esta funcionalidade não está disponível para mobile.</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default NivelDesafio;