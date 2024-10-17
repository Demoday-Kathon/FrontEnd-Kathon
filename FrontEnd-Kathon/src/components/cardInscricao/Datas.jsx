import Styles from "../cardInscricao/Datas.module.css";

function Datas({ inicio, dates, termino, expired }) {
  return (
    <>
      <div className={Styles.cardData}>
        <p className={Styles.title_inicio}>{inicio}</p>
        <p className={Styles.winner}>{dates}</p>
        <p className={Styles.title_inicio}>{termino}</p>
        <p className={Styles.winner}>{expired}</p>
      </div>
    </>
  );
}

export default Datas;
