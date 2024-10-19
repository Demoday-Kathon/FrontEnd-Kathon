import EditarIcon from '../../assets/imgs/PencilFill.png';
import CancelIcon from '../../assets/imgs/XCircleFill.png';
import SaveIcon from '../../assets/imgs/CheckCircleFill.png';
import Download from '../../assets/imgs/Download.png';
import Styles from './CriarComunidade.module.css';

function CriarComunidade(){
    return(
        <div className={Styles.ContainerEditar}>
            <div className={Styles.ContainerEditarSecondary}>
                <div className={Styles.Download}>
                    <img src={Download} alt="Download" />
                    <p>Adicionar uma capa</p>
                </div>

                <div className={Styles.ContainerWritePrincipal}>
                    <div className={Styles.ContainerWrite}>
                        <div className={Styles.Write}>
                            <img className={Styles.EditarIcon} src={EditarIcon} alt="Editar Ícone" />
                            <p>#...</p>
                        </div>
                            <p className={Styles.AddName}>Adicione um nome</p>
                    </div>
                </div>

            </div>
                <div className={Styles.ContainerButtom}>
                    <div className={Styles.Cancelar}>
                        <img className={Styles.ImageIcones} src={CancelIcon} alt="Cancelar Ícone" />
                        <a href="">Cancelar</a>
                    </div>

                    <div className={Styles.Alterar}>
                        <img className={Styles.ImageIcones} src={SaveIcon} alt="Salvar Ícone" />
                        <a href="">Criar</a>
                    </div>
                </div>
        </div>
    )
}

export default CriarComunidade;