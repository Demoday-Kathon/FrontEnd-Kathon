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
import faqStyles from "../cardPreto/FAQItem.module.css"; //
import FAQItem from "./FAQItem";

function CardPreto({ title, context, mentors, sponsors }) {
  const faqData = [
    {
      duvida: "Qual o tema da competição?",
      resposta: `Criar uma plataforma de mercado eficiente, reduzindo custos logísticos e fortalecendo a economia regional, ao mesmo tempo em que assegura uma cadeia de suprimentos mais sustentável e personalizada.`,
    },
    {
      duvida: "Como é o processo de inscrição?",
      resposta: `O processo de inscrição envolve preencher um formulário com seus dados.`,
    },
    {
      duvida: "Quando e onde é o evento?",
      resposta: `No Senac localizado na Lapa Tito, 54, no dia 2 de novembro de 2024. `,
    },
    {
      duvida: "Preciso de conhecimento técnico para participar?",
      resposta: `Não, não é necessário conhecimento técnico prévio, mas é recomendável!`,
    },
    {
      duvida: "Qual o prêmio do Hackathon?",
      resposta: `Hackathon de inovaTI terá R$ 52,5 mil em prêmios.`,
    },
    {
      duvida: "Preciso de conhecimento técnico para participar?",
      resposta: `Não, não é necessário conhecimento técnico prévio, mas é recomendável!`,
    },
    {
      duvida: "Ganha algum certificado?",
      resposta: `Sim, o vencedor terá uma certificado de conclusão junto com o prêmio.`,
    },
  ];
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

        <div className={faqStyles.faqContainer}>
          {faqData.map((faq, index) => (
            <FAQItem key={index} duvida={faq.duvida} resposta={faq.resposta} />
          ))}
        </div>
      </section>
    </>
  );
}

export default CardPreto;

{
  /* <Perguntas text="Como é o processo de inscrição?" />
<Perguntas text="Quando e onde é o evento?" />
<Perguntas text="Quem pode participar?" />
<Perguntas text="Quanto custa para se inscrever?" />
<Perguntas text="Qual o prêmio do Hackathon?" />
<Perguntas text="Preciso ter algum conhecimento técnico para participar?" />
<Perguntas text="Ganha algum certificado?" /> */
}
