import { useState, useEffect } from 'react';
import styles from './Login.module.css';
import HeaderMobile from "../../components/HeaderFeed/HeaderFeed";
import Header from '../../components/layout/header/Header';
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase';
import Form from '../../components/Form/Form';
import Input from '../../components/Form/FormComponents/Input';
import SubmitButton from '../../components/Form/FormComponents/SubmitButton';
import BotaoHome from '../../components/BotaozinhoHome/BotaoHome';
import Footer from '../../components/layout/footer/Footer';
import LinkComponent from '../../components/layout/link/LinkComponent';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../components/contexts/UserContext';
import logoKathon from '../../assets/imgs/LogoKathon.png';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Login() {

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 868px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    const { login } = useUser(); 

    const handleLogin = (e) => {
        e.preventDefault(); 
    
        
        if (!email || !senha) {
            alert('Por favor, preencha o email e a senha.');
            return; 
        }
    
        
        const emailDomain = email.split('@')[1];
        const endpoint = emailDomain === 'empresa.com' 
            ? 'http://localhost:8080/api/empresas/login' 
            : 'http://localhost:8080/api/jovens/login'; 
    
        

        if(emailDomain === 'empresa.com') {
            fetch(`${endpoint}?emailCorporativo=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data) {  
                    login(data); 
    
                    if(emailDomain === 'empresa.com') {
                        navigate('/dashboardhome');    
                    }
                } else {
                    alert('Email ou senha incorretos');
                    console.log(data);  
                }
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
                alert('Ocorreu um erro ao tentar fazer login. Tente novamente.');
            });
        } else {
            fetch(`${endpoint}?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data && data.id) {  
                    login(data); 
    
                    navigate('/feed');
                    console.log(data);
                } else {
                    alert('Email ou senha incorretos');
                    console.log(data);  
                }
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
                alert('Ocorreu um erro ao tentar fazer login. Tente novamente.');
            });
        }
    };
    
    
    return (
        <>
            {isMobile? <HeaderMobile /> : <Header />}
            <CardPretoBase customClass="cardPretoForms">
                <img className={styles.logoKathonLogin} src={logoKathon} alt="logoKathon" />
                <h1 className={styles.tituloCardLogin}> Entrar </h1>

                <Form customClass="formsLogin" onSubmit={handleLogin}>
                    <Input 
                        text="Email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        text="Senha" 
                        type="password" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                    <h2 className={styles.esqueceuSenha}> Esqueceu a senha? </h2>
                    
                    <SubmitButton text="Entrar" />

                    <div className={styles.divisorLogin}> 
                        <hr /> 
                        <span> OU </span>  
                        <hr /> 
                    </div>

                    <BotaoHome 
                        customClass="buttonLoginConta" 
                        icon={<FcGoogle style={{ marginRight: '0.5em' }} />} 
                        alt="icone de alarme" 
                        text="Entrar com Google" 
                    />
                    <BotaoHome 
                        customClass="buttonLoginConta" 
                        icon={<FaFacebook style={{ color: '#1877F2', marginRight: '0.5em', backgroundColor:'#FFF', borderRadius:'2em' }} />} 
                        alt="icone de sifrão" 
                        text="Entrar com Facebook" 
                    />
                    <h5 className={styles.possuiConta}> 
                        Não possui conta?
                        <LinkComponent customClass="" linkTo="/CadastroEscolha" text={<span>Cadastre-se</span>} /> 
                    </h5>
                </Form>
            </CardPretoBase>
            <Footer />
        </>
    );
}

export default Login;
