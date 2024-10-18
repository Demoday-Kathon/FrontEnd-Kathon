import Styles from './CardPerfilEdit.module.css'
import Recomendacao from './Card_Recomedacao'
import leticia from '../../assets/imgs/Leticia.png'
import cadeirante from '../../assets/imgs/Icone_cadeirante.png'
import Icone_perfil from '../../assets/imgs/Icone_perfil.png'
import Bloco1 from './Bloco1'
import Bloco2_edit from './Bloco2_edit'

function CardPerfilEdit() {
    return (
        <section className={Styles.Card_Fundo}>
            <div className={Styles.PerfilDados}>
                <Bloco1 Foto_perfil={Icone_perfil}  customClass="Foto_perfilEdit"  NomePerfil="Nome Usuario" UserPerfil="@User" />
                <Bloco2_edit TextoDesc="Escreva aqui uma breve descrição sobre você e suas áreas de interesse..." />
            </div>
            <div className={Styles.Recomendacao_bloco}>
                <h1 className={Styles.RecomendacaoTi}>Recomendações</h1>
                <div className={Styles.Recomendacao} >
                    <Recomendacao Perfil_foto={cadeirante} Nome="Comentario" Sub_titulo="Peça para os integrantes do seu time e mentores deixarem comentários nas suas publicações..." />
                    <Recomendacao Perfil_foto={cadeirante} Nome="Comentario" Sub_titulo="Peça para os integrantes do seu time e mentores deixarem comentários nas suas publicações..." />
                </div>
            </div>
        </section>
    )
}

export default CardPerfilEdit