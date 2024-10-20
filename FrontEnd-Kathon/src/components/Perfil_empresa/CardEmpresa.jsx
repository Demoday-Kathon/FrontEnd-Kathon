import Styles from './CardEmpresa.module.css'
import Bloco1Empresas from './Bloco1Empresas'
import Bloco2Empresas from './Bloco2Empresas'
import accenture from '../../assets/imgs/Icone_accenture.png'
import Recomendacao from '../Perfil_aluno/Card_Recomedacao'
import cadeirante from '../../assets/imgs/Icone_cadeirante.png'
import Emanuelle from '../../assets/imgs/Icone_emanuelle.png'
function CardEmpresa(){
    
    return(
        <section className={Styles.Card_fundo}>
            <div className={Styles.PerfilDados}>
                <Bloco1Empresas Foto_perfil={accenture} NomePerfil="Accenture" UserPerfil="@Accenture"/>
                <Bloco2Empresas TextoDesc="A Accenture é uma multinacional de consultoria em gestão, tecnologia da informação e outsourcing. É a maior empresa de consultoria do mundo e uma competidora global no setor de tecnologia." Titulo_sobre="Sobre:" Titulo_sobre2="Hackathons Abertos:" Titulo_Participacao="Próximos Hackathons:" />
            </div>
            <div className={Styles.Recomendacao_bloco}>
                <div className={Styles.RecomendacaoEmpresa}>
                <h1 className={Styles.RecomendacaoTi}>Relato dos Participantes:</h1>
                <p></p>                </div>
                <div className={Styles.Recomendacao} >
                <Recomendacao Perfil_foto={cadeirante} Nome="Lautaro Martinez" Sub_titulo=" “Accenture nos surpreendeu com a qualidade das soluções apresentadas pelos jovens. A experiência foi tão positiva” " />
                <Recomendacao Perfil_foto={Emanuelle} Nome="Emanuelle Silva" Sub_titulo=" “A Accenture nos impressionou com a excelência das soluções desenvolvidas pelos jovens.” " />
                </div>
            </div>
        </section>
    )
}

export default CardEmpresa