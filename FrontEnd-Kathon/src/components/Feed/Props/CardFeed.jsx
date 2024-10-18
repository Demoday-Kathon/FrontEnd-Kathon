import Styles from "../Props/CardFeed.module.css";

function CardFeed({ principal }) {
  return (
    <>
      <div className={Styles.Cardprincipal}>
        {principal}
        <div></div>
      </div>
    </>
  );
}

export default CardFeed;
