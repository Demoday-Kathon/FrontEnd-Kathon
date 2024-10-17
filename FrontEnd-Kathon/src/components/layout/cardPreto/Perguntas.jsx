import Styles from "../cardPreto/Perguntas.module.css";

function Perguntas({ text }) {
  return (
    <>
      <div className={Styles.caixinha2}>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Perguntas;
