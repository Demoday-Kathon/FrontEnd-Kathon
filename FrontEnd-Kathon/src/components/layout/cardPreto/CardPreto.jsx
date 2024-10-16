import Styles from "../cardPreto/CardPreto.module.css";

function CardPreto({ title, context, mentors, people, job, sponsors, logos }) {
  return (
    <>
      <section className={Styles.card_container}>
        <div className={Styles.hack}>
          <h3 className={Styles.title22}>{title}</h3>
          <p>{context}</p>
        </div>
        <div className={Styles.mentors}>
          <h3 className={Styles.title22}>{mentors}</h3>
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
