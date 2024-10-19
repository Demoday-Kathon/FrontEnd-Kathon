import Styles from './CardEmpresa_edit.module.css'
import Bloco1Empresas from './Bloco1Empresas'
import Bloco2Empresas from './Bloco2Empresas'
import accenture from '../../assets/imgs/Icone_accenture.png'
import Recomendacao from '../Perfil_aluno/Card_Recomedacao'
import cadeirante from '../../assets/imgs/Icone_cadeirante.png'
import Emanuelle from '../../assets/imgs/Icone_emanuelle.png'
import Bloco2_em from './Bloco2_em'

function CardEmpresa_edit(){
    return(
        <section className={Styles.Card_fundo}>
        <div className={Styles.PerfilDados}>
            <Bloco1Empresas Foto_perfil={accenture} NomePerfil="Accenture" UserPerfil="@Accenture"/>
            <Bloco2_em TextoDesc="Escreva aqui uma breve descrição sobre a empresa e suas áreas de atuação..." Titulo_sobre="Sobre:" Titulo_sobre2="Hackatons Abertos:" Titulo_Participacao="Próximos Hackatons:" />
        </div>
        <div className={Styles.Recomendacao_bloco}>
            <div className={Styles.RecomendacaoEmpresa}>
            <h1 className={Styles.RecomendacaoTi}>Veja o que estão falando</h1>

            </div>
            <div className={Styles.Recomendacao} >
            <Recomendacao Perfil_foto={cadeirante} Nome="Lautaro Martinez" Sub_titulo=" “Accenture nos surpreendeu com a qualidade das soluções apresentadas pelos jovens. A experiência foi tão positiva” " />
            <Recomendacao Perfil_foto={Emanuelle} Nome="Emanuelle Silva" Sub_titulo=" “A Accenture nos impressionou com a excelência das soluções desenvolvidas pelos jovens.” " />
            </div>
        </div>
    </section>
    )
}

export default CardEmpresa_edit