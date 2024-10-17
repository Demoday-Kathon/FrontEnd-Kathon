import Style from "../cardPreto/CardPessoas.module.css";

function CardPessoa({ people, job }) {
  return (
    <>
      <div className={Style.card_pessoas}>
        <img src={people} alt="profile" />
        <p>{job}</p>
      </div>
    </>
  );
}

export default CardPessoa;
