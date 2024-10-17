import Styles from "../cardInscricao/Datas.module.css";

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
      </div>
    </>
  );
}

export default Datas;
