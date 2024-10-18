import EntrarComunidade from '../../assets/imgs/EntrarComunidade.png';
import Styles from './CardComunidades.module.css';

function CardComunidades(props) {
    return(
            <div className={Styles.CardComunidades}>
                <img className={Styles.imagemComunidade} src={props.imagemComunidade} alt="Imagem da Comunidade" />

                <div className={Styles.titlesCards}>
                    <div>
                        <h2>{props.nomeComunidade}</h2>
                        <p className={Styles.Description}>{props.descricaoComunidade}</p>
                    </div>

                    <button><img className={Styles.imagemEntrarComunidade} src={EntrarComunidade} alt="Botão Entrar"/></button>
                </div>
            </div>
    )
}

export default CardComunidades;