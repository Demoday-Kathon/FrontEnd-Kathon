import Styles from  './DashboardRecrutamento.module.css';
import HeaderRecrutamento from '../../components/layout/HeaderRecrutamento/HeaderRecrutamento';
import ImageEquipe from '../../assets/imgs/grupoDevs.jpg';
import ImageProfile from '../../assets/imgs/joana.png';
import ImageNotification from '../../assets/imgs/notification.png';
import ImageSearch from '../../assets/imgs/search.png';
import Tropeu from '../../assets/imgs/trophyDash.png';
import Enterprise from '../../assets/imgs/accenture.png';
import AlinText from '../../assets/imgs/alinText.png';

function DashboardRecrutamento() {
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

              <div className={Styles.ContainerTitleContainerResolution}>
                <h2 className={Styles.TitleContainerResolution}>Desafio React</h2>
                <h2 className={Styles.TitleContainerResolution}>Melhores Resoluções</h2>
              </div>

              <div className={Styles.ContainerBlocos}>
                <div className={Styles.containerCard}>

                  <div className={Styles.ContainerInfoEquipe}>
                      <div className={Styles.ContainerInfo}>
                      <img className={Styles.ImageEquipe} src={ImageEquipe} alt="Foto Equipe" />
                      <h3>Equipe 1</h3>
                      </div>

                        <button className={Styles.ButtomViewEquipe}>Ver equipe</button>
                  </div>

                  <div className={Styles.TrofeuPrimary}>
                    <img className={Styles.Trofeu} src={Tropeu} alt="Trofeu" />
                  </div>

                </div>
                <div className={Styles.containerCard}>

                  <div className={Styles.ContainerInfoEquipe}>
                      <div className={Styles.ContainerInfo}>
                      <img className={Styles.ImageEquipe} src={ImageEquipe} alt="Foto Equipe" />
                      <h3>Equipe 2</h3>
                      </div>

                        <button className={Styles.ButtomViewEquipe}>Ver equipe</button>
                  </div>

                  <div className={Styles.TrofeuSecondary}>
                    <img className={Styles.Trofeu} src={Tropeu} alt="Trofeu" />
                  </div>

                </div>
                <div className={Styles.containerCard}>

                  <div className={Styles.ContainerInfoEquipe}>
                      <div className={Styles.ContainerInfo}>
                      <img className={Styles.ImageEquipe} src={ImageEquipe} alt="Foto Equipe" />
                      <h3>Equipe 3</h3>
                      </div>

                        <button className={Styles.ButtomViewEquipe}>Ver equipe</button>
                  </div>

                  <div className={Styles.TrofeuTerciary}>
                    <img className={Styles.Trofeu} src={Tropeu} alt="Trofeu" />
                  </div>

                </div>
              </div>
            </div>

            <div  className={Styles.containerSearchHacka}>


              <div className={Styles.SearchHacka}>
                <input placeholder='Procurar hackathon' type="text" />
                <img className={Styles.ImagemSearch} src={ImageSearch} alt="Imagem de pesquisa" />
              </div>

              <div className={Styles.ContainerBlocosHacka}>
                <div  className={Styles.containerCardHacka}>

                  <div className={Styles.ContainerImagesHacka}>
                    <img className={Styles.Imagehackathon} src={Enterprise} alt="Empresa" />
                    <img className={Styles.Imagehackathon} src={AlinText} alt="Alinhamento de texto" />
                  </div>

                  <div className={Styles.DescriptionHacka}>
                    <p>Hackathon Desvendado: Uma Explanação em Tópicos</p>
                  </div>

                  <div className={Styles.ContainerButtonHacka}>
                    <button className={Styles.ButtonOn}>Ativo</button>
                    <button className={Styles.ButtonSelect}>Selecionar</button>
                  </div>
                </div>
                <div  className={Styles.containerCardHacka}>

                  <div className={Styles.ContainerImagesHacka}>
                    <img className={Styles.Imagehackathon} src={Enterprise} alt="Empresa" />
                    <img className={Styles.Imagehackathon} src={AlinText} alt="Alinhamento de texto" />
                  </div>

                  <div className={Styles.DescriptionHacka}>
                    <p>Hackathon Desvendado: Uma Explanação em Tópicos</p>
                  </div>

                  <div className={Styles.ContainerButtonHacka}>
                    <button className={Styles.ButtonOn}>Ativo</button>
                    <button className={Styles.ButtonSelect}>Selecionar</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardRecrutamento;