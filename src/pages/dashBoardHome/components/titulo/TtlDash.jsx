import Styles from '../titulo/TtlDash.module.css'

function TtlDash({ texto, customClass }){
    return(
        <div className={`${Styles.container} ${Styles[customClass]}`}>
            <p>{texto}</p>
        </div>
    )
}

export default TtlDash