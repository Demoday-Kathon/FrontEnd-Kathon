import Styles from './CardPerfil.module.css'
import Recomendacao from './Card_Recomedacao'

function CardPerfil(){
    return(
        <section className={Styles.Card_Fundo}>
            <Recomendacao />
        </section>
    )
}

export default CardPerfil