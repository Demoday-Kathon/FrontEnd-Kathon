import Styles from './Bloco1Empresas.module.css'
import LinkComponent from '../layout/link/LinkComponent'
import Esmeralda from '../../assets/imgs/Esmeralda.png'

function Bloco1Empresas({ NomePerfil, UserPerfil, Foto_perfil, customClass }) {
    return (
        <section className={Styles.Bloco1}>
            <img className={`${Styles.Foto_perfil} ${Styles[customClass]}`} src={Foto_perfil} alt="Foto Perfil" />  {/* Crinado custom class */}
            <div className={Styles.DadosPerfil1}>
                <div className={Styles.DadosConta1}>
                    <h1 className={Styles.NomePerfil}>{NomePerfil}</h1>
                    <h2 className={Styles.UserPerfil}>{UserPerfil}</h2>
                </div>
                <div className={Styles.Pedra}>
                    <img className={Styles.Esmeralda1} src={Esmeralda} alt="Esmeralda" />
                </div>
            </div>
            <div className={Styles.BotoesEmpresas}>

                <LinkComponent linkTo="/Perfil_aluno_edit" text={<button className={Styles.BottonPerfil}>Editar Perfil</button>} />
                <br />
                <LinkComponent linkTo="/Perfil_aluno_edit" text={<button className={Styles.BottonPerfil1}>Trocar de Plano</button>} />
            </div>
        </section>
    )
}

export default Bloco1Empresas