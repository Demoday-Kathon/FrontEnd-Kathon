import styles from './Login.module.css'

import Header from '../../components/layout/header/Header';
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase';
import Form from '../../components/Form/Form';

import Label from '../../components/Form/FormComponents/Label';
import Input from '../../components/Form/FormComponents/Input';
import SubmitButton from '../../components/Form/FormComponents/SubmitButton';
import BotaoHome from '../../components/BotaozinhoHome/BotaoHome';
import Footer from '../../components/layout/footer/Footer';
import LinkComponent from '../../components/layout/link/LinkComponent';



import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";



function Login() {
    return (
        <>
            <Header />
            <CardPretoBase customClass="cardPretoForms">
                <img className={styles.logoKathonLogin} src={logoKathon} alt="logoKathon" />
                <h1 className={styles.tituloCardLogin}> Entrar </h1>

                <Form customClass="formsLogin">
                    <Input text="Email" type="email"/>
                    <Input text="Senha" type="password"/>
                    <h2 className={styles.esqueceuSenha}> Esqueceu a senha? </h2>
                    <SubmitButton text="Entrar"/>



                    <div className={styles.divisorLogin}> <hr /> <span> OU </span>  <hr /> </div>



                    <BotaoHome customClass="buttonLoginConta" icon={<FcGoogle style={{ marginRight: '0.5em' }} />} alt="icone de alarme" text="Entrar com Google" />
                    <BotaoHome customClass="buttonLoginConta" icon={<FaFacebook style={{ color: '#1877F2', marginRight: '0.5em', backgroundColor:'#FFF', borderRadius:'2em' }} />} alt="icone de sifrão" text="Entrar com Facebook" />
                    <h5 className={styles.possuiConta}> Não possui conta? <LinkComponent customClass="" linkTo="/CadastroEscolha" text={<span>Cadastre-se</span>} /> </h5>
                </Form>


            </CardPretoBase>
            <Footer />
        </>
    )
}
export default Login;