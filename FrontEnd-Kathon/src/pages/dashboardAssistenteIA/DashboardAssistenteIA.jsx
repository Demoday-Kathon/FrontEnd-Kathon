import Styles from  './DashboardAssistenteIA.module.css';
import HeaderRecrutamento from '../../components/layout/HeaderRecrutamento/HeaderRecrutamento';
import Estrela from '../../assets/imgs/star.png';
import ImageProfile from '../../assets/imgs/joana.png';
import ImageNotification from '../../assets/imgs/notification.png';
import Seta from '../../assets/imgs/setawhite.png';

function DashboardAssistenteIA() {
  return (
    <div className={Styles.ContainerPrincipal}>
      <HeaderRecrutamento />
      <div className={Styles.ContainerDashboard}>
        <div
        className={Styles.ContainerHeaderTitle}>
          <div className={Styles.containerTitulo}>
            <h1>Recrutamento</h1>
          </div>

            <div className={Styles.ContainerNotification}>
              <div>
                <img className={Styles.ImageNotification} src={ImageNotification} alt="Imagem Notificação" />
              </div>

              <img className={Styles.ImageProfile} src={ImageProfile} alt="Imagem perfil usuário" />
            </div>
        </div>

        <div className={Styles.ContainerTerciaryRecrutamento}>
            <div  className={Styles.containerResolution}>
              <h1>Equipe 1</h1>

              <div className={Styles.CardColab}>
                  <img className={Styles.UserImage} src={ImageProfile} alt="Imagem  perfil usuário" />

                <div>
                  <p>Joana Pereira</p>
                  <p>@joanapereira</p>
                </div>


                <div className={Styles.Seta}>

                <img src={Seta} alt="Seta" />
                </div>
              </div>
              <div className={Styles.CardColab}>
                  <img className={Styles.UserImage} src={ImageProfile} alt="Imagem  perfil usuário" />

                <div>
                  <p>Joana Pereira</p>
                  <p>@joanapereira</p>
                </div>


                <div className={Styles.Seta}>

                <img src={Seta} alt="Seta" />
                </div>
              </div>
              <div className={Styles.CardColab}>
                  <img className={Styles.UserImage} src={ImageProfile} alt="Imagem  perfil usuário" />

                <div>
                  <p>Joana Pereira</p>
                  <p>@joanapereira</p>
                </div>


                <div className={Styles.Seta}>

                <img src={Seta} alt="Seta" />
                </div>
              </div>
              <div className={Styles.CardColab}>
                  <img className={Styles.UserImage} src={ImageProfile} alt="Imagem  perfil usuário" />

                <div>
                  <p>Joana Pereira</p>
                  <p>@joanapereira</p>
                </div>


                <div className={Styles.Seta}>

                <img src={Seta} alt="Seta" />
                </div>
              </div>
  
            </div>

            <div  className={Styles.containerSearchHacka}>
                <div className={Styles.ContainerBlocosHacka}>
                  <h2>Avaliação e Comentário</h2>

                  <div className={Styles.ContainerStars}>
                    <img src={Estrela} alt="Estrela" />
                    <img src={Estrela} alt="Estrela" />
                    <img src={Estrela} alt="Estrela" />
                  </div>

                  <div className={Styles.ContainerAvaliador}>
                    <img src={ImageProfile} alt="Imagem avaliador" />
                    <p>
                      Como avaliador técnico, posso dizer que essa equipe propôs uma resolução, completa e eficaz para determinada demanda.
                    </p>
                  </div>

                  <div className={Styles.ContainerRepository}>
                    <h3>Repositório do Projeto</h3>

                    <div className={Styles.LinkRepository}>

                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAssistenteIA