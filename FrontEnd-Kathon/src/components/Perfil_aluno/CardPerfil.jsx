import Styles from './CardPerfil.module.css'
import Recomendacao from './Card_Recomedacao'
import leticia from '../../assets/imgs/Leticia.png'
import Abel from '../../assets/imgs/Abel.png'
import Joana from '../../assets/imgs/joana.png'
import Bloco1 from './Bloco1'
import Bloco2 from './Bloco2'

function CardPerfil() {
    return (
        <section className={Styles.Card_Fundo}>
            <div className={Styles.PerfilDados}>
                <Bloco1 Foto_perfil={Joana} NomePerfil="Joana Pereira" UserPerfil="@JoJopereira" />
                <Bloco2 TextoDesc="Sou Joana, autodidata de 17 anos, com grande interesse por tecnologia. Passo horas explorando programação e design, sempre buscando novos desafios. Meu sonho é utilizar essas  habilidades para criar projetos que possam impactar o mundo ao meu redor." Titulo_sobre="Sobre:" Titulo_sobre2="Principais Habilidades:" Titulo_Participacao="Participacões:" />
            </div>
            <div className={Styles.Recomendacao_bloco}>
                <h1 className={Styles.RecomendacaoTi}>Recomendações</h1>
                <div className={Styles.Recomendacao} >
                    <Recomendacao Perfil_foto={leticia} Nome="Leticia Silva" Sub_titulo="Excelente Profissional,habilidade em UI/UX é impressionante" />
                    <Recomendacao Perfil_foto={Abel} Nome="Abel Ferreira" Sub_titulo="Ótima lider, sua capacidade de liderar é impressionante " />
                </div>
            </div>
        </section>
    )
}

export default CardPerfil