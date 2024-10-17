import Styles from './Bloco1.module.css'
import Joana from '../../assets/imgs/joana.png'

function Bloco1(){
    return(
        <section className={Styles.Bloco1}>
            <img className={Styles.Foto_perfil} src={Joana} alt="Foto Perfil" />
            <div className={Styles.DadosPerfil}>
                <h1 className={Styles.NomePerfil}>Joana Perreira</h1>
                <h2 className={Styles.UserPerfil}>@jopereira</h2>
                <br />
                <button className={Styles.BottonPerfil}>Editar Perfil</button>
            </div>
        </section>
    )
}

export default Bloco1
