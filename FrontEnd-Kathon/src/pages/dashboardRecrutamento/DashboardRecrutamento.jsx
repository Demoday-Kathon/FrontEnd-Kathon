import Styles from  './DashboardRecrutamento.module.css';
import HeaderRecrutamento from '../../components/layout/HeaderRecrutamento/HeaderRecrutamento';

function DashboardRecrutamento() {
  return (
    <div className={Styles.ContainerPrincipal}>
      <HeaderRecrutamento />
      <div className={Styles.ContainerDashboard}>
        <div className={Styles.containerTitulo}>
          <h1>Recrutamento</h1>
        </div>

        <div className={Styles.ContainerTerciaryRecrutamento}>
            <div  className={Styles.containerResolution}>

              <h2>Desafio React 
              Melhores Resoluções</h2>

              <div className={Styles.ContainerBlocos}>
                <div  className={Styles.containerCard}>

                  <h3>Resolução 1</h3>
                </div>
                <div  className={Styles.containerCard}>

                  <h3>Resolução 1</h3>
                </div>
                <div  className={Styles.containerCard}>

                  <h3>Resolução 1</h3>
                </div>
              </div>
            </div>

            <div  className={Styles.containerResolution}>

              <input type="text" />

              <div className={Styles.ContainerBlocos}>
                <div  className={Styles.containerCard}>

                  <h3>Resolução 1</h3>
                </div>
                <div  className={Styles.containerCard}>

                  <h3>Resolução 1</h3>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardRecrutamento;