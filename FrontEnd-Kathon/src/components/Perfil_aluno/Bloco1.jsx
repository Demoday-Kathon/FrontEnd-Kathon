import Styles from './Bloco1.module.css'
import LinkComponent from '../layout/link/LinkComponent'

function Bloco1({NomePerfil, UserPerfil, Foto_perfil}){
    return(
        <section className={Styles.Bloco1}>
            <img className={Styles.Foto_perfil} src={Foto_perfil} alt="Foto Perfil" />
            <div className={Styles.DadosPerfil}>
                <h1 className={Styles.NomePerfil}>{NomePerfil}</h1>
                <h2 className={Styles.UserPerfil}>{UserPerfil}</h2>
                <br />
                <LinkComponent linkTo="/Perfil_aluno_edit" text={<button className={Styles.BottonPerfil}>Editar Perfil</button>}/>
            </div>
        </section>
    )
}

export default Bloco1
