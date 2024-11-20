import Styles from './CardEditavel.module.css'
import mais from '../../assets/imgs/Adicional.png'

function CardEditavel( {Participacoes}) {
    return (
        <div className={Styles.Conteudo1}>
            <div className={Styles.Sobre2}>
                <div className={Styles.Participacoes}>
                    <h1 className={Styles.Participacoes1}>{Participacoes}</h1>
                    <br />
                 <img className={Styles.fotomais} src={mais} alt="Mais" />
                </div>
            </div>
        </div>
    )
}

export default CardEditavel