import Header from "../../components/layout/header/Header";
import styles from "../nivelDesafio/nivelDesafio.module.css";
import largatixa from "../../assets/imgs/largatixa.svg";
import crocodilo from "../../assets/imgs/crocodilo.svg";
import dinossauro from "../../assets/imgs/dinossauro.svg";

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
          <div className={styles.desafio1}>
            <p>Modo Largatixa</p>
          </div>
          <div className={styles.desafio2}>
            {" "}
            <p>Modo Jacaré</p>{" "}
          </div>
          <div className={styles.desafio3}>
            {" "}
            <p>Modo Dinossauro</p>{" "}
          </div>
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
      </div>
    </>
  );
}

export default NivelDesafio;
