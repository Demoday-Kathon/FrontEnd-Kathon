import Styles from "../cardInscricao/Cardinscricao.module.css";
import Datas from "./Datas";

function CardInscricao() {
  return (
    <>
      <div className={Styles.Subs}>
        <Datas
          inicio="Início"
          dates="27 out, 2024"
          termino="Vencedor"
          expired="30 nov, 2024"
          subsc="Inscrições acabam em:"
          dat="14 dias | 15h:13m"
        />
      </div>
    </>
  );
}

export default CardInscricao;
