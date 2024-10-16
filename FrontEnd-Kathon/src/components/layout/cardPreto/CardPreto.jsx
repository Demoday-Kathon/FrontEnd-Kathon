import Styles from "../cardPreto/CardPreto.module.css";

function CardPreto({ title, context, mentors, people, job, sponsors, logos }) {
  return (
    <>
      <section className={Styles.card_container}>
        <div className="hack">
          <h3 className={title}>{title}</h3>
          <p>{context}</p>
          <h3 className={title}>{mentors}</h3>
        </div>
        <div>
          <img src={people} alt="" />
          <p>{job}</p>
          <img src={people} alt="" />
          <p>{job}</p>
          <img src={people} alt="" />
          <p>{job}</p>
        </div>
        <div>
          <h3 className={title}>{sponsors}</h3>
          <img src={logos} alt="" />
          <img src={logos} alt="" />
          <img src={logos} alt="" />
          <img src={logos} alt="" />
        </div>
      </section>
    </>
  );
}

export default CardPreto;
