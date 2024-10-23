import Style from "../Banner/BannerHack.module.css";

function BannerHack({ foto }) {
  return (
    <>
      <div className={Style.bannerzinho}>
        <img
          src={foto}
          alt="pessoas felizes no trabalho"
          className={Style.imgbanner}
        />
      </div>
    </>
  );
}

export default BannerHack;
