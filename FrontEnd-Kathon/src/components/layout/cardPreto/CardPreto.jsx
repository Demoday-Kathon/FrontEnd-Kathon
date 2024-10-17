import Styles from "../cardPreto/CardPreto.module.css";
import CardPessoa from "./CardPessoas";
import Homem from "../../../assets/imgs/perfil_menino1.png";
import Mulher from "../../../assets/imgs/perfil_menina1.png";
import Mulher2 from "../../../assets/imgs/perfil_menina2.png";
import CardPatrocinadores from "./CardPatrocinadores";
import Adidas from "../../../assets/imgs/adidas.png";
import Ibm from "../../../assets/imgs/accenture.png";
import Oracle from "../../../assets/imgs/IBM.png";
import Accenture from "../../../assets/imgs/Oracle.png";

function CardPreto({ title, context, mentors, sponsors }) {
  return (
    <>
      <section className={Styles.card_container}>
        <div className={Styles.hack}>
          <h3 className={Styles.title_hack}>{title}</h3>
          <p>{context}</p>
        </div>
        <h3 className={Styles.title_img}>{mentors}</h3>
        <div className={Styles.mentors}>
          <CardPessoa people={Homem} job="Software Enginner at Nubank" />
          <CardPessoa people={Mulher} job="Software Enginner at Nubank" />
          <CardPessoa people={Mulher2} job="Software Enginner at Nubank" />
        </div>
        <h3 className={Styles.title_img}>{sponsors}</h3>
        <div className={Styles.patro}>
          <CardPatrocinadores sponsor={Adidas} />
          <CardPatrocinadores sponsor={Accenture} />
          <CardPatrocinadores sponsor={Ibm} />
          <CardPatrocinadores sponsor={Oracle} />
        </div>

        <div className={Styles.hack}>
          <h3 className={Styles.title_hack}>Regras</h3>
          <p>
            Veja os <span>termos e condições.</span>
          </p>
        </div>
        <div className={Styles.faqs}>
          <h3 className={Styles.title_hack}>Perguntas Frequentes</h3>
          <input
            type="search"
            className={Styles.pesquisa}
            placeholder="Pesquise"
          />
        </div>
        <div className={Styles.container_caixas}>
          <div className={Styles.caixa1}>
            Tamanho da Equipe? <br />
            <span>06 pessoas</span>
          </div>
          <div className={Styles.caixa2}>
            Qual Custo? <span>Nenhum</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardPreto;
