import Styles from './CardPerfil.module.css'
import Recomendacao from './Card_Recomedacao'
import leticia from '../../assets/imgs/Leticia.png'
import Abel from '../../assets/imgs/Abel.png'

function CardPerfil(){
    return(
        <section className={Styles.Card_Fundo}>
            <div className={Styles.Recomendacao} >
            <Recomendacao Perfil_foto={leticia} Nome="Leticia Silva" Sub_titulo="Excelente Profissional,habilidade em UI/UX é impressionante"/>
            <Recomendacao Perfil_foto={Abel} Nome="Abel Ferreira" Sub_titulo="Ótima lider, sua capacidade de liderar é impressionante "/>
            </div>
        </section>
    )
}

export default CardPerfil