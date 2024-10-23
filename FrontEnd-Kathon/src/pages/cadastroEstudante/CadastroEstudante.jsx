import styles from '../cadastroEmpresa/CadastroEmpresa.module.css'
import styles1 from './CadastroEstudante.module.css'

import Header from '../../components/layout/header/Header'
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase'
import Form from '../../components/Form/Form'
import Label from '../../components/Form/FormComponents/Label'
import Input from '../../components/Form/FormComponents/Input'
import Select from '../../components/Form/FormComponents/Select'
import SubmitButton from '../../components/Form/FormComponents/SubmitButton'
import CardBrancoBase from  '../../components/CardBrancoBase/CardBrancoBase'
import Footer from '../../components/layout/footer/Footer'


import logoKathon from '../../assets/imgs/logoKathon.png';

import { IoIosArrowDown } from "react-icons/io";

function CadastroEstudante() {
    return (
        <>
            <Header />
            <CardPretoBase customClass="cardPretoForms">
                <img className={styles.logoKathonLogin} src={logoKathon} alt="logoKathon" />
                <h1 className={styles.tituloCadastro}> Cadastro Estudante </h1>

                <Form customClass="formsLogin">
                    <Label customClass="labelFormsCadastro" text="Nome Completo" />
                    <Input text="" type="text" />
                    <Label customClass="labelFormsCadastro" text="Documento - Histórico Escolar" />
                    <Input text="" type="text" />
                    <Label customClass="labelFormsCadastro" text="Digite seu email" />
                    <Input text="" type="email" />
                    <Label customClass="labelFormsCadastro" text="Confirme seu email" />
                    <Input text="" type="email" />
                    <Label customClass="labelFormsCadastro" text="CPF" />
                    <Input text="" type="text" />


                    <div className={styles.linhaInputs}>

                        <div className={styles.inputMaior}>
                            <Label customClass="labelFormsCadastro" text="Data de Nascimento" />
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


                    <Label customClass="labelFormsCadastro" text="Qual é sua área de interesse?" />
                    <CardBrancoBase customClass="cardBrancoEscolhaHabilidades">
                        <div  className={styles1.divtextBrancoEscolhaHabilidadesSelect}>
                            <p className={styles1.textEscolhaHabilidadesSelect}> Selecione todas que desejar </p>
                            <IoIosArrowDown />
                        </div>
                        <div  className={styles1.divtextBrancoEscolhaHabilidades}>
                            <p className={styles1.textEscolhaHabilidades}> Tecnologia </p>

                        </div>
                        <div  className={styles1.divtextBrancoEscolhaHabilidades}>
                            <p className={styles1.textEscolhaHabilidades}> Inteligência Artificial </p>

                        </div>
                        <div  className={styles1.divtextBrancoEscolhaHabilidades}>
                            <p className={styles1.textEscolhaHabilidades}> Diversidade e inclusão </p>

                        </div>
                        <div  className={styles1.divtextBrancoEscolhaHabilidades}>
                            <p className={styles1.textEscolhaHabilidades}> Sustentabilidade </p>
                        </div>
                        <div  className={styles1.divtextBrancoEscolhaHabilidades}>
                            <p className={styles1.textEscolhaHabilidades}> Diversidade e inclusão </p>
                        </div>

                    </CardBrancoBase>

                    <Label customClass="labelFormsCadastro" text="Quais são seus conhecimentos??" />
                    <CardBrancoBase customClass="cardBrancoEscolhaHabilidades">
                        <div  className={styles1.divtextBrancoEscolhaHabilidadesSelect}>
                            <p className={styles1.textEscolhaHabilidadesSelect}> Selecione todas que desejar </p>
                        </div>
                        <div  className={styles1.divtextBrancoEscolhaHabilidades}>
                            <p className={styles1.textEscolhaHabilidades}> Tecnologia </p>

                        </div>
                        <div  className={styles1.divtextBrancoEscolhaHabilidades}>
                            <p className={styles1.textEscolhaHabilidades}> Inteligência Artificial </p>

                        </div>
                        <div  className={styles1.divtextBrancoEscolhaHabilidades}>
                            <p className={styles1.textEscolhaHabilidades}> Diversidade e inclusão </p>

                        </div>
                        <div  className={styles1.divtextBrancoEscolhaHabilidades}>
                            <p className={styles1.textEscolhaHabilidades}> Sustentabilidade </p>
                        </div>
                        <div  className={styles1.divtextBrancoEscolhaHabilidades}>
                            <p className={styles1.textEscolhaHabilidades}> Diversidade e inclusão </p>
                        </div>

                    </CardBrancoBase>




                    <Label customClass="labelFormsCadastro" text="Senha" />
                    <Input text="" type="password" />
                    <Label customClass="labelFormsCadastro" text="Confirme sua Senha" />
                    <Input text="" type="password" />


                    <SubmitButton text="Cadastrar" />

                </Form>


            </CardPretoBase>
            <Footer />

        </>
    )
}

export default CadastroEstudante;