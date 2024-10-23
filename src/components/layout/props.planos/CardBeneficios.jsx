import Styles from "./CardBeneficios.module.css"

function CardBeneficios({text, customClass}){

    return(
        <div className={ `${Styles.beneficios} ${Styles[customClass]}`}>
            <p>{text}</p>
        </div>
    )
}

export default CardBeneficios