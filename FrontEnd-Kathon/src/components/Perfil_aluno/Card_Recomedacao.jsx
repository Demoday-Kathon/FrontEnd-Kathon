import Styles from './Card_Recomendacao.module.css'
import leticia from '../../assets/imgs/Leticia.png'

function Card_Recomendacao(){
    return(
        <div className={Styles.Card}>
            <div className={Styles.Peril_foto}>
                <img className={Styles.Leticia} src={leticia} alt="Foto Perfil" />
                </div>
               <div className={Styles.Perfil_texto}>
                    <h1 className={Styles.Nome}>Leticia Silva</h1>
                    <br />
                    <p className={Styles.Sub_titulo}> "Excelente Profissional, sua brilhate habilidade em UI/UX e impressionate.</p>
            </div>
            </div>
    )
}

export default Card_Recomendacao