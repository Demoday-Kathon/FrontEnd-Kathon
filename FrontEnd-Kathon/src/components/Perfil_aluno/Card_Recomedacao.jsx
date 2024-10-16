import Styles from './Card_Recomendacao.module.css'
import leticia from '../../assets/imgs/Leticia.png'

function Card_Recomendacao(){
    return(
        <div className={Styles.Card}>
            <div className={Styles.Peril_foto}>
                <img className={Styles.Leticia} src={leticia} alt="Foto Perfil" />
                    <h1 className={Styles.Perfil_texto}>Leticia Silva</h1>
                </div>
               <div className={Styles.Perfil_texto}>
                    <p>"Excelente Profissional, sua brilhate habilidade em UI/UX e impressionate.</p>
            </div>
            </div>
    )
}

export default Card_Recomendacao