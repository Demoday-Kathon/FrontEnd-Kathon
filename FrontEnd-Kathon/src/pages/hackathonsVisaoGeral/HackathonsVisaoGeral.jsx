import CardInscricao from "../../components/cardInscricao/CardInscricao";
import CardPreto from "../../components/layout/cardPreto/CardPreto";

function HackathonVisaoGeral() {
  return (
    <>
      <CardPreto
        title="Rede ou Aplicativo para Conectar Fornecedores Locais"
        context="Como parte de nossa visão de promover a economia local e garantir sustentabilidade, desenvolvemos um aplicativo que conecta diretamente o Terra Vermelha a fornecedores locais de materiais de construção, móveis e serviços relacionados. Esse aplicativo cria uma plataforma de mercado eficiente, reduzindo custos logísticos e fortalecendo a economia regional, ao mesmo tempo em que assegura uma cadeia de suprimentos mais sustentável e personalizada.
"
        mentors="Mentores"
        sponsors="Patrocinadores"
      />
      <CardInscricao />
    </>
  );
}

export default HackathonVisaoGeral;
