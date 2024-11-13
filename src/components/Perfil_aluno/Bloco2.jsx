import Styles from './Bloco2.module.css'
import button1 from '../layout/button/button'
import Button from '../layout/card/tag'
import CardHacka from './CardHacka'
import banner from '../../assets/imgs/banner.png'
import Icone_hacka from '../../assets/imgs/Icone_menor.png'

function Bloco2({ TextoDesc, Titulo_sobre, Titulo_sobre2, Titulo_Participacao }) {
    return (
        <section className={Styles.SobreAluno}>
            <div className={Styles.Titulo_caia}>
                <h1 className={Styles.Titulo_sobre}>{Titulo_sobre}</h1>
            </div>
            <div className={Styles.Conteudo1}>
                <div className={Styles.Sobre}>
                    <div className={Styles.SobreTexto}>
                        <p className={Styles.TextoDesc}>{TextoDesc}</p>
                    </div>
                </div>
            </div>

            <h1 className={Styles.Titulo_sobre2}>{Titulo_sobre2}</h1>
            <div className={Styles.Conteudo1}>
                <div className={Styles.Sobre}>
                    <div className={Styles.Habilidades}>
                        <div className={Styles.Habilidades_tag}>
                            <Button text="Desing" customClass="desing" /> <Button text="Comunicação" customClass="comunicacao" /> <Button text="ilustação" customClass="ilustacao" />
                        </div>
                        <div className={Styles.Habilidades_tag}>
                            <Button text="Marketing" customClass="ilustacao" /> <Button text="Pesquisa" customClass="pesquisa" />
                        </div>
                        <div className={Styles.Habilidades_tag}>
                            <Button text="Experiência do Usuário" customClass="usuario" />
                        </div>

                    </div>
                </div>
            </div>

            <h1 className={Styles.Titulo_Participacao}>{Titulo_Participacao}</h1>
            <div className={Styles.Conteudo1}>
                <div className={Styles.Sobre2}>
                    <div className={Styles.Participacoes}>
                        <CardHacka banner={banner} title_hackathon="Hackathon Desvendado: Uma Explanação em Tópicos" Icone_menor={Icone_hacka}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bloco2