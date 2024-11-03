import styles from "../ModalGame/ModalGame.module.css";

function ModalGame({ title, text, button1, button2 }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button>{button1}</button>
        <button>{button2}</button>
      </div>
    </div>
  );
}

export default ModalGame;
