import styles from "./Hackathons.module.css";
import banner from "../../assets/imgs/banner.png";
import accenture from "../../assets/imgs/accenture.png";
import Card from "../../components/layout/card/card";
import Button from "../../components/layout/button/button";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import { Link } from "react-router-dom";
import VideoBack2 from "../../assets/imgs/video_back - kathon.mp4";

function Hackathons() {
  return (
    <div className={styles.hackathons}>
      <Header />
      {/* TESTE DO VIDEO */}
      <div className="App">
        <div className="video-background">
          <video autoPlay muted loop className={styles.video2}>
            <source src={VideoBack2} type="video/mp4" />
          </video>
          <h1 className={styles.hometitle}>
            Oportunidades para <br /> impulsionar sua carreira
          </h1>
          <div className={styles.caixadescricao}>
            <p className={styles.descricaodohack}>
              Os Hackathons ajudam a desenvolver suas habilidades técnicas e
              comportamentais{" "}
            </p>
          </div>
        </div>
      </div>
      {/* FIM DO TESTE */}
      <div className={styles.blurdovideo}></div>

      <div className={styles.verificacao}>
        <h1>
          Verifique os Hackathons <br /> disponíveis e se desenvolva
        </h1>
      </div>
      <container className={styles.homeTitulo}>
        <div className={styles.bg_container}>
          
          
        </div>
        <div className={styles.bg_container}>
          
          
        </div>
        <div className={styles.bg_container}>
          
          
        </div>
      </container>

      <Footer />
    </div>
  );
}

export default Hackathons;
