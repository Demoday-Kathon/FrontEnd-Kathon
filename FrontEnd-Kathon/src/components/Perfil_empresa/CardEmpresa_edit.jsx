import Styles from './CardEmpresa_edit.module.css'
import Bloco1Empresas from './Bloco1Empresas'
import Bloco2Empresas from './Bloco2Empresas'
import accenture from '../../assets/imgs/Icone_accenture.png'
import Recomendacao from '../Perfil_aluno/Card_Recomedacao'
import cadeirante from '../../assets/imgs/Icone_cadeirante.png'
import Emanuelle from '../../assets/imgs/Icone_emanuelle.png'
import Bloco2_em from './Bloco2_em'
import mais from '../../assets/imgs/Adicional.png'

function CardEmpresa_edit(){
    return(
        <section className={Styles.Card_fundo}>
        <div className={Styles.PerfilDados}>
            <Bloco1Empresas Foto_perfil={accenture} NomePerfil="Accenture" UserPerfil="@Accenture"/>
            <Bloco2_em TextoDesc="Escreva aqui uma breve descrição sobre a empresa e suas áreas de atuação..." Titulo_sobre="Sobre:" Titulo_sobre2="Hackatons Abertos:" Titulo_Participacao="Próximos Hackatons:" />
        </div>
        <div className={Styles.Recomendacao_bloco}>
            <div className={Styles.RecomendacaoEmpresa}>
            <h1 className={Styles.RecomendacaoTi}>Veja o que estão falando:</h1>

            </div>
            <div className={Styles.Recomendacao} >
            <Recomendacao customClass="empresas_Edit" Perfil_foto={cadeirante} Nome="Lautaro Martinez" Sub_titulo=" Aqui aparecera os comentários dos participantes dos seus hackathons. "> 
                <div >
                <img className={Styles.BotonMais} src={mais} alt="" />
                </div>
            </Recomendacao>
            <Recomendacao customClass="empresas_Edit" Perfil_foto={Emanuelle} Nome="Emanuelle Silva" Sub_titulo=" Aqui aparecera os comentários dos participantes dos seus hackathons. ">
                <div customClass={Styles.Adional}>
            <img className={Styles.BotonMais} src={mais} alt="" />
                </div>
            </Recomendacao>
            </div>
        </div>
    </section>
    )
}

export default CardEmpresa_edit