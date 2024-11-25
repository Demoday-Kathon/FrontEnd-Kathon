import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import CardMembroTime from "../../components/CardMembroTime/CardMembroTime";
import ImageGlass from "../../assets/imgs/sobre-image-female-glass.png";
import Iphone15pro from "../../assets/imgs/iPhone16Pro.png";
import Equipe from "../../assets/imgs/equipedesenvolvedora.png";
import Macbook from "../../assets/imgs/macbook.png";
import styles from "./Sobre.module.css";
import blur from "../../assets/imgs/elipseblue.png";
import BeatrizImage from "../../assets/imgs/imgmembros/beatriz.jpg";
import LucasImage from "../../assets/imgs/imgmembros/Lucas.png";
import Gustavo from "../../assets/imgs/imgmembros/gustavo.jpg";
import Ricardo from "../../assets/imgs/imgmembros/ricardo.jpeg";
import Weslley from "../../assets/imgs/imgmembros/weslley.jpg";
import Paulo from "../../assets/imgs/imgmembros/paulo.jpg";
import Raphael from "../../assets/imgs/imgmembros/raphael.jpg";
import { motion } from "framer-motion";
import { fadein } from "../../variants";
import {React, useEffect, useState} from "react";
import HeaderMobile from "../../components/HeaderFeed/HeaderFeed";

function Sobre({ children }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 868px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className={styles.container}>
      {isMobile? <HeaderMobile /> : <Header />}
      <div className={styles.containerPrimary}>
        <div className={styles.images}>
          <img className={styles.elipseBlur} src={blur} alt="blur roxo" />
          <img
            className={styles.ImageGlass}
            src={ImageGlass}
            alt="Mulher usando Óculos"
          />
        </div>
        <motion.div
          variants={fadein("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className={styles.ContainerTitleSobre}
        >
          <h2 className={styles.titulosSection}>
            Somos a <span className={styles.colorPurple}>Kathon</span>
          </h2>
          <p>
            Uma <span className={styles.subtitle}>Startup</span> que permite
            jovens talentos a oportunidades reais, onde empresas ganham soluções
            e eles, experiência.
          </p>
        </motion.div>
      </div>
      <div className={styles.containerSecondary}>
        <img
          className={styles.iphone}
          src={Iphone15pro}
          alt="Celular Iphone 16 Pro"
        />
        <motion.p
          variants={fadein("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className={styles.textDescription}
        >
          As Melhores soluções para a sua empresa
        </motion.p>
      </div>
      <div className={styles.containerTerciary}>
        <motion.p
          variants={fadein("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className={styles.textDescription}
        >
          O lugar onde jovens podem desenvolver soluções para problemas reais
        </motion.p>
        <img className={styles.iphone} src={Macbook} alt="Macbook" />
      </div>
      <div className={styles.equipeContainer}>
        <div className={styles.containerDesenvolvedores}>
          <motion.h3
            variants={fadein("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className={styles.titulodesenvolvedores}
          >
            Equipe desenvolvedora
          </motion.h3>
          <img
            className={styles.imgEquipe}
            src={Equipe}
            alt="Equipe desenvolvedora"
          />
        </div>
        <div className={styles.descDesenvolvedores}>
          <motion.p
            variants={fadein("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className={styles.textDescription}
          >
            “Coisas incríveis nunca são feitas por uma única pessoa, são feitas
            por um time.”
          </motion.p>
        </div>
      </div>
      <div className={styles.containerNossoTime}>
        <motion.h3
          variants={fadein("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className={styles.tituloNossoTime}
        >
          Nosso time
        </motion.h3>

        <div className={styles.containerCardMembroTime}>
          <CardMembroTime
            name={"Beatriz Marques"}
            description={"P.O, Designer e Desenvolvedora Front-End"}
            photo={BeatrizImage}
            github={"https://github.com/beatrizimarques"}
            linkedin={"https://www.linkedin.com/in/beatriz-imarques/"}
          />
          <CardMembroTime
            name={"Gustavo Sousa"}
            description={"Scrum Master e Desenvolvedor Full-Stack"}
            photo={Gustavo}
            github={"https://github.com/gustavodesousalima"}
            linkedin={"https://www.linkedin.com/in/gustavo-developer/"}
          />
          <CardMembroTime
            name={"Weslley Campos"}
            description={"Financeiro e Desenvolvedor Full-Stack"}
            photo={Weslley}
            github={"https://github.com/beatrizimarques"}
            linkedin={"https://www.linkedin.com/in/beatriz-imarques/"}
          />
        </div>

        <div className={styles.containerCardMembroTime}>
          <CardMembroTime
            name={"Ricardo Matos"}
            description={"Desenvolvedor Full-Stack"}
            photo={Ricardo}
            github={"https://github.com/beatrizimarques"}
            linkedin={"https://www.linkedin.com/in/beatriz-imarques/"}
          />
          <CardMembroTime
            name={"Raphael Pereira"}
            description={"Desenvolvedor Full-Stack"}
            photo={Raphael}
            github={"https://github.com/beatrizimarques"}
            linkedin={"https://www.linkedin.com/in/beatriz-imarques/"}
          />
          <CardMembroTime
            name={"Paulo Nalcino"}
            description={"Desenvolvedor Full-Stack e Banco de dados"}
            photo={Paulo}
            github={"https://github.com/beatrizimarques"}
            linkedin={"https://www.linkedin.com/in/beatriz-imarques/"}
          />
          <CardMembroTime
            name={"Lucas Carvalho"}
            description={"UI/UX Designer e Desenvolvedor Full-Stack"}
            photo={LucasImage}
            github={"https://github.com/beatrizimarques"}
            linkedin={"https://www.linkedin.com/in/beatriz-imarques/"}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Sobre;
