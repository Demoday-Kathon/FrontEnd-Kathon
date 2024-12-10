import Styles from "../cardInscricao/Cardinscricao.module.css";
import Datas from "./Datas";
import { Link } from "react-router-dom";

function CardInscricao({ inicio, dates, termino, expired, subsc, dat }) {
  return (
    <>
      <div className={Styles.Subs}>

        <Datas
          children1={
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
                  <Link className={Styles.butoncardLink} to={"/Login"}>Inscreva-se</Link>
                </button>

                <br />
                <Link className={Styles.LinksHackaPremiosELinhaTempo} to={"/HackathonsPremios"}>
                  <button className={Styles.butoncard}>Premiação</button>
                </Link>
                <br />
                <Link className={Styles.LinksHackaPremiosELinhaTempo} to={"/hackathonsCalendario"}>
                  <button className={Styles.butoncard}>Linha do tempo</button>
                </Link>

              </div>



            </div>
          }
        />



      </div>
    </>
  );
}

export default CardInscricao;
