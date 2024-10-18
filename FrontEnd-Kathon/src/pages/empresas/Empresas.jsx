import Styles from './Empresas.module.css'
import CaixaPreta from '../../components/layout/props.empresa/CaixaPreta'

function Empresas() {
    return (
        <section className={Styles.fundoempresa}>
            <div className={Styles.textempresa}><h2>Hackathons que Conectam Talentos<br /> e Transformam Negócios</h2></div>
            <div className={Styles.empresa1}></div>
            <div className={Styles.boxtextpai}>
                <div className={Styles.boxtext}>
                    <h5>Resolução de<br/> problemas rápida</h5>
                    <br/>
                    <p>Hackathons promovem a geração de ideias<br/> e soluções criativas em um curto período,<br/> ajudando a empresa a inovar de forma ágil<br/> e eficiente.</p>
                </div>
                <div className={Styles.boxtext}>
                    <h5>Descoberta de novos talentos</h5>
                    <br/>
                    <p>Identifique jovens com habilidades<br/> excepcionais e potencial para
                    <br/>impulsionar seu negócio.</p>
                </div>
            </div>

                <div className={Styles.boxfinal}>
                    <h4>Tudo que a sua empresa<br/> 
                    procura</h4>
                    <CaixaPreta text="Visibilidade" customCaixa="boxpreto1"></CaixaPreta>
                    <CaixaPreta text="Resolução" customCaixa="boxpreto2"></CaixaPreta>
                    <CaixaPreta text="Inovação" customCaixa="boxpreto3"></CaixaPreta>
                </div>
        </section>
    )
}

export default Empresas