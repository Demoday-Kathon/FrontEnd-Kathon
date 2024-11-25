import Styles from "../cardInscricao/Datas.module.css";
import Setinha from "../../assets/imgs/entrarComunidade.png";
import { Link } from "react-router-dom";

function Datas({ inicio, dates, termino, expired, subsc, dat }) {
  return (
    <>
      <div className={Styles.cardData}>
        <p className={Styles.title_inicio}>{inicio}</p>
        <p className={Styles.winner}>{dates}</p>
        <p className={Styles.title_inicio}>{termino}</p>
        <p className={Styles.winner}>{expired}</p>
        <div className={Styles.minicards}>
          <p className={Styles.infos}>{subsc}</p>
          <p className={Styles.hours}>{dat}</p>
        </div>
        <div className={Styles.butoesdocard}>
          
        <button className={Styles.butoncard}>
          <Link className={Styles.butoncardLink} to={"/InscricaoHackathon"}>Inscreva-se</Link>
        </button>
        
          <br />
          <Link className={Styles.LinksHackaPremiosELinhaTempo} to={"/HackathonsPremiosInterno"}>
          <button className={Styles.butoncard}>Premiação</button>
          </Link>
          <br />
          <Link className={Styles.LinksHackaPremiosELinhaTempo} to={"/hackathonsCalendarioInterno"}>
          <button className={Styles.butoncard}>Linha do tempo</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Datas;
