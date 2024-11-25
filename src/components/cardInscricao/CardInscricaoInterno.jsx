import Styles from "../cardInscricao/Cardinscricao.module.css";
import DatasInterno from "./DatasInterno";

function CardInscricaoInterno() {
  return (
    <>
      <div className={Styles.Subs}>
        <DatasInterno
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

export default CardInscricaoInterno;
