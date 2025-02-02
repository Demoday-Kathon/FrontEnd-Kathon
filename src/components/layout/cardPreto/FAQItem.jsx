import { useState } from "react";
import styles from "../cardPreto/FAQItem.module.css";

function FAQItem({ duvida, resposta }) {
  const [isActive, setIsActive] = useState(false);

  const toggleFAQ = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.faqItem} ${isActive ? styles.active : ""}`}>
      <div className={styles.faqQuestion} onClick={toggleFAQ}>
        {duvida}
      </div>
      {isActive && <div className={styles.faqAnswer}>{resposta}</div>}
    </div>
  );
}

export default FAQItem;
