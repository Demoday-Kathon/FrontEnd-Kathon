import Styles from '../../components/tittleDashBoard/TtlDash.module.css'

function TtlDash({ texto }){
    return(
        <div className={Styles.ctnTtl}>
            <p>{texto}</p>
        </div>
    )
}

export default TtlDash 