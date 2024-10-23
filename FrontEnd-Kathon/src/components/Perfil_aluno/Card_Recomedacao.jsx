import Styles from './Card_Recomendacao.module.css'
import leticia from '../../assets/imgs/Leticia.png'

function Card_Recomendacao({ Perfil_foto, Nome, Sub_titulo, children, customClass }) {
    return (
        <div className={`${Styles.Card} ${Styles[customClass]}`}>
            <div className={Styles.Perfil_foto}>
                <img className={Styles.Leticia} src={Perfil_foto} alt="Foto Perfil" />
            </div>
            <div className={Styles.Perfil_texto}>
                <h1 className={Styles.Nome}>{Nome}</h1>
                <br />
                <p className={Styles.Sub_titulo}>{Sub_titulo}</p>
                <br />
                <button>
                {children}
                </button>
            </div>
        </div>
    )
}

export default Card_Recomendacao