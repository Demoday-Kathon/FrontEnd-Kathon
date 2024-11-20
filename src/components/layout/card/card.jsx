import styles from "../card/card.module.css";
import Tags from "./tag.jsx";
import Person from "./person.jsx";
import person1 from "../../../assets/imgs/pessoa1.png";
import person2 from "../../../assets/imgs/pessoa2.png";
import person3 from "../../../assets/imgs/pessoa3.png";
import Button from "../button/button.jsx";
import CardBrancoBrase from "../../../components/CardBrancoBase/CardBrancoBase.jsx";
import { Children } from "react";

function card({ titleHacka, bannerHacka, children1, qtdparticipants, timeline, children2, children3, customClass, customClassPerson }) {
  return (
    <div className={`${styles.cardHacka} ${styles[customClass]}`}>
      <div className={styles.bannerHacka}>
        <img className={styles.bannerHackaIMG} src={bannerHacka} alt="" />
      </div>
      <CardBrancoBrase customClass="cardHacka">
        <h3 className={styles.titleHacka}> {titleHacka} </h3>
        <div className={styles.tagsHacka}>
          {children1}
        </div>
        <div className={styles.rowPeople}>
          <div className={styles.people}>
            {children3}
          </div>

          <p className={styles.participants}>
            {qtdparticipants}
          </p>

        </div>
        <div className={styles.container2}>

          <div className={styles.progressbarcontainer}>
            <div className={styles.progressbar}></div>
          </div>
          <p className={styles.diasRestantes}> { timeline } </p>
        </div>

        
        <div className={styles.button_hackathon}>{children2}</div>



      </CardBrancoBrase>
    </div>
  );
}

export default card;
