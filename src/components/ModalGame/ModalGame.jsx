import React from 'react';
import styles from './ModalGame.module.css'; // Import the CSS module

function ModalGame({ title, text, button1, button2, onButton1Click, onButton2Click, titleColor }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle} style={{ color: titleColor }}>{title}</h2>
        <div className={styles.modalText}>
          <p>{text}</p>
        </div>
        <div className={styles.modalButtons}>
          <button className={styles.modalButton} onClick={onButton1Click}>{button1}</button>
          <button className={styles.modalButton} onClick={onButton2Click}>{button2}</button>
        </div>
      </div>
    </div>
  );
}

export default ModalGame;