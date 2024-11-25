import Styles from './CardPerfil.module.css'
import Recomendacao from './Card_Recomedacao'
import leticia from '../../assets/imgs/Leticia.png'
import Abel from '../../assets/imgs/Abel.png'
import Joana from '../../assets/imgs/Joana.png'
import Bloco1 from './Bloco1'
import Bloco2 from './Bloco2'
import { useUser } from '../../components/contexts/UserContext';

function CardPerfil() {

    const { user } = useUser();

    return (
        <section className={Styles.Card_Fundo}>
            <div className={Styles.PerfilDados}>
                <Bloco1 Foto_perfil={"data:image/jpeg;base64," + user?.fotoPerfil || Joana} NomePerfil={user.nomeCompleto} UserPerfil={`@` + user.nomeCompleto} Salvar="Editar Perfil"/>
                <Bloco2 TextoDesc={`Olá me chamo ${user.nomeCompleto}! Tenho grande interesse por tecnologia. Passo horas explorando programação e design, sempre buscando novos desafios. Meu sonho é utilizar essas  habilidades para criar projetos que possam impactar o mundo ao meu redor.`} Titulo_sobre="Sobre:" Titulo_sobre2="Principais Habilidades:" Titulo_Participacao="Participações:" />
            </div>
            <div className={Styles.Recomendacao_bloco}>
                <h1 className={Styles.RecomendacaoTi}>Recomendações:</h1>
                <div className={Styles.Recomendacao} >
                    <Recomendacao Perfil_foto={leticia} Nome="Leticia Silva" Sub_titulo="Excelente Profissional, com habilidades em UI/UX é impressionante." />
                    <Recomendacao Perfil_foto={Abel} Nome="Abel Ferreira" Sub_titulo="Sua capacidade de liderar é impressionante. " />
                </div>
            </div>
        </section>
    )
}

export default CardPerfil