import styles from "./CadastroEmpresa.module.css";

import Header from "../../components/layout/header/Header";
import CardPretoBase from "../../components/CardPretoBase2/CardPretoBase";
import Form from "../../components/Form/Form";
import Label from "../../components/Form/FormComponents/Label";
import Input from "../../components/Form/FormComponents/Input";
import SubmitButton from "../../components/Form/FormComponents/SubmitButton";
import Footer from "../../components/layout/footer/Footer";

import logoKathon from "../../assets/imgs/logoKathon.png";

function CadastroEmpresa() {
  return (
    <>
      <Header />
      <CardPretoBase customClass="cardPretoForms">
        <img
          className={styles.logoKathonLogin}
          src={logoKathon}
          alt="logoKathon"
        />
        <h1 className={styles.tituloCadastro}> Cadastro de Empresa </h1>

        <Form customClass="formsLogin">
          <Label customClass="labelFormsCadastro" text="Nome da Empresa" />
          <Input type="text" />
          <Label customClass="labelFormsCadastro" text="Email Corporativo" />
          <Input text="" type="email" />
          <Label customClass="labelFormsCadastro" text="Confirme seu email" />
          <Input text="" type="email" />
          <Label customClass="labelFormsCadastro" text="CNPJ" />
          <Input text="" type="text" />

          <div className={styles.linhaInputs}>
            <div className={styles.inputMaior}>
              <Label
                customClass="labelFormsCadastro"
                text="Inscrição Estadual"
              />
              <Input text="" type="text" customClass="inputMaior" />
            </div>

            <div className={styles.inputMaior}>
              <Label customClass="labelFormsCadastro" text="Celular" />
              <Input text="" type="text" customClass="inputMaior" />
            </div>
          </div>

          <div className={styles.linhaInputs}>
            <div className={styles.inputMenor}>
              <Label customClass="labelFormsCadastro" text="CEP" />
              <Input text="" type="text" customClass="inputMenor" />
            </div>

            <div className={styles.inputMaior}>
              <Label customClass="labelFormsCadastro" text="Rua" />
              <Input text="" type="text" customClass="inputMaior" />
            </div>
          </div>

          <div className={styles.linhaInputs}>
            <div className={styles.inputMenor2}>
              <Label customClass="labelFormsCadastro" text="Número" />
              <Input text="" type="text" customClass="inputMenor" />
            </div>

            <div className={styles.inputMaior}>
              <Label customClass="labelFormsCadastro" text="Cidade" />
              <Input text="" type="text" customClass="inputMaior" />
            </div>

            <div className={styles.inputMaior}>
              <Label customClass="labelFormsCadastro" text="Bairro" />
              <Input text="" type="text" customClass="inputMaior" />
            </div>

            <div className={styles.inputMaior}>
              <Label customClass="labelFormsCadastro" text="Estado" />
              <Input text="" type="text" customClass="inputMaior" />
            </div>
          </div>

          <Label customClass="labelFormsCadastro" text="Senha" />
          <Input text="" type="password" />
          <Label customClass="labelFormsCadastro" text="Confirme sua Senha" />
          <Input text="" type="password" />

          <SubmitButton text="Cadastrar" />
        </Form>
      </CardPretoBase>
      <Footer />
    </>
  );
}

export default CadastroEmpresa;
