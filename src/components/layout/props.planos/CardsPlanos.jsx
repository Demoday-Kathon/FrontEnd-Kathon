import Styles from "./CardsPlanos.module.css"

function CardsPlanos(props) {
    return (

        <div className={ `${Styles.fundobeneficios} ${Styles[props.customClass]}`}>
            <img className={Styles.beneimg} src={props.img} alt={props.alt} title={props.alt} />
            <h4 className={`${Styles[props.customtitle]}`}>{props.title}</h4>
            {props.children}

        </div>
    )

}

export default CardsPlanos