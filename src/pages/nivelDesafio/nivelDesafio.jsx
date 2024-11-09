import { Link } from "react-router-dom";
import Header from "../../components/layout/header/Header";
import styles from "../nivelDesafio/nivelDesafio.module.css";
import largatixa from "../../assets/imgs/largatixa.svg";
import crocodilo from "../../assets/imgs/crocodilo.svg";
import dinossauro from "../../assets/imgs/dinossauro.svg";
import Footer from "../../components/layout/footer/Footer";
import Button from "../../components/layout/button/button";

function NivelDesafio() {
  return (
    <>
      <Header />
      <div className={styles.caixaDesafio}>
        <div className={styles.titleDesafio}>
          <h1>
            <span>Desafios</span> para você <br></br> desenvolver suas{" "}
            <span>habilidades</span>
          </h1>
        </div>
        <div className={styles.nivelDesafio}>
          <Link className={styles.desafio1} to="/Login">
            <p>Modo Largatixa</p>
          </Link>
          <Link className={styles.desafio2} to="/Login">
            {" "}
            <p>Modo Jacaré</p>{" "}
          </Link>
          <Link className={styles.desafio3} to="/Login">
            {" "}
            <p>Modo Dinossauro</p>{" "}
          </Link>
        </div>
        <div className={styles.nivels}>
          <div className={styles.nivelIniciante}>
            {" "}
            <img src={largatixa} alt="" /> <br />{" "}
            <p className={styles.titleIniciante}>Nivel Iniciante</p>{" "}
            <p className={styles.infosDesafios}>
              Para você que ainda <br />
              não sabe muito
            </p>
          </div>
          <div className={styles.nivelIntermediario}>
            <img src={crocodilo} alt="" />
            <p className={styles.titleIntermediario}>Nivel Intermediário</p>
            <p className={styles.infosDesafios}>
              {" "}
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
          <Button customClass={styles.botaodesafio} text="Entrar" />
          <Button customClass={styles.botaodesafio} text="Entrar" />
          <Button customClass={styles.botaodesafio} text="Entrar" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default NivelDesafio;
