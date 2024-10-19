import Styles from  './DashboardAssistenteIA.module.css';
import HeaderRecrutamento from '../../components/layout/HeaderRecrutamento/HeaderRecrutamento';

function DashboardAssistenteIA() {
  return (
    <div className={Styles.ContainerPrincipal}>
      <HeaderRecrutamento />
      <div className={Styles.ContainerDashboard}>
        <div className={Styles.containerTitulo}>
          <h1>Recrutamento</h1>
        </div>

        <div className={Styles.ContainerTerciaryRecrutamento}>
            <div  className={Styles.containerResolution}>

              <h2>Equipe 1</h2>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAssistenteIA