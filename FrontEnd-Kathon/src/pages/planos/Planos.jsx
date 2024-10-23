import Styles from "./Planos.module.css"
import Esmeralda from "../../assets/imgs/esmeralda.svg"
import Rubi from "../../assets/imgs/rubi.svg"
import Diamante from "../../assets/imgs/diamante.svg"
import CardsPlanos from "../../components/layout/props.planos/CardsPlanos"
import CardBeneficios from "../../components/layout/props.planos/CardBeneficios"
import Botton from "../../components/layout/props.planos/Botton"
import Header from "../../components/layout/header/Header"
import Footer from "../../components/layout/footer/Footer"
import HomePlano from "../../components/layout/planoHome.props/HomePlano"

function Planos() {

    return (
        <section className={Styles.paidoplano}>
            <Header/>
            <div className={Styles.fundoplano}>
                <h1>Planos Empresariais</h1>
                <div className={Styles.benebox}>
                    <CardsPlanos title="Esmeralda" img={Esmeralda} alt="Esmeralda" customtitle= "titlegreen">
                        <CardBeneficios text="Acesso a comunidade" customClass="bordergreen"></CardBeneficios>
                        <CardBeneficios text="Planejamento Hackthon" customClass="bordergreen"></CardBeneficios>
                        <CardBeneficios text="Relatórios simplificados de feedback" customClass="bordergreen"></CardBeneficios>
                        <h4 className={Styles.preco1}>Free</h4>
                        <Botton text="Contratado" customBotton="bottongreen"></Botton>
                    </CardsPlanos>
                    <CardsPlanos title="Rubi" img={Rubi} alt="Rubi" customtitle= "titlepink">
                        <CardBeneficios text="Acesso a comunidade" customClass="borderpink"></CardBeneficios>
                        <CardBeneficios text="Planejamento Hackthon" customClass="borderpink"></CardBeneficios>
                        <CardBeneficios text="Relatórios simplificados de feedback" customClass="borderpink"></CardBeneficios>
                        <CardBeneficios text="Perfis Básicos Estudantes" customClass="borderpink"></CardBeneficios>
                        <h4 className={Styles.preco2}>R$ 49,90</h4>
                        <Botton text="Quero esse plano" customBotton="bottonpink"></Botton>
                    </CardsPlanos>
                    <CardsPlanos title="Diamante" img={Diamante} alt="Diamante" customtitle= "titleblue">
                        <CardBeneficios text="Destaque a comunidade" customClass="borderblue"></CardBeneficios>
                        <CardBeneficios text="Planejamento Hackthon" customClass="borderblue"></CardBeneficios>
                        <CardBeneficios text="Relatórios elaborados de feedback" customClass="borderblue"></CardBeneficios>
                        <CardBeneficios text="Perfis completos Estudantes" customClass="borderblue"></CardBeneficios>
                        <CardBeneficios text="Assiste de RH por IA" customClass="borderblue"></CardBeneficios>
                        <h4 className={Styles.preco3}>R$ 59,90</h4>
                        <Botton text="Quero esse plano" customBotton="bottonblue"></Botton> 
                    </CardsPlanos>
                </div>
            </div>
           

           <div className={Styles.homeplanopai}>
                <HomePlano img={Esmeralda} alt="Esmeralda" />
                <HomePlano img={Rubi} alt="Rubi"  />
                <HomePlano img={Diamante} alt="Diamante"/>
           </div>
            <Footer/>
        </section>
    )
}

export default Planos