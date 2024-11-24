import Styles from './Bloco1.module.css'
import LinkComponent from '../layout/link/LinkComponent'

function Bloco1({NomePerfil, UserPerfil, Foto_perfil, customClass, Salvar}){
    return(
        <section className={Styles.Bloco1}>
            <img className={`${Styles.Foto_perfil} ${Styles[customClass]}`} src={Foto_perfil} alt="Foto Perfil" />  {/* Crinado custom class */}
            <div className={Styles.DadosPerfil}>
                <h1 className={Styles.NomePerfil}>{NomePerfil}</h1>
                <h2 className={Styles.UserPerfil}>{UserPerfil}</h2>
                <br />
                <LinkComponent perfi="botonP" linkTo="/Perfil_aluno" text={<button className={Styles.BottonPerfil2}>{Salvar}</button>}/>
            </div>
        </section>
    )
}

export default Bloco1
