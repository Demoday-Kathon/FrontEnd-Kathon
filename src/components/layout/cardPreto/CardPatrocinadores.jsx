import Style from "../cardPreto/CardPatrocinadores.module.css";

function CardPessoa({ sponsor }) {
  return (
    <>
      <div className={Style.card_patrocinadores}>
        <img src={sponsor} alt="patrocinios" />
      </div>
    </>
  );
}

export default CardPessoa;
