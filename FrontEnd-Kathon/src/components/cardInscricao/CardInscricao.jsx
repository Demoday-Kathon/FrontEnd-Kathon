import Styles from "../cardInscricao/cardInscricao.module.css";
import Datas from "./Datas";
import Linha from "../../assets/imgs/linha_azul.png";

function CardInscricao() {
  return (
    <>
      <div className={Styles.Subs}>
        <Datas
          inicio="Início"
          dates="27 out, 2024"
          termino="Vencedor"
          expired="30 nov, 2024"
        />
      </div>
    </>
  );
}

export default CardInscricao;
