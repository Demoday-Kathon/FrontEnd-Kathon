import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from '../cadastroEmpresa/CadastroEmpresa.module.css';
import styles1 from './CadastroEstudante.module.css';
import Header from '../../components/layout/header/Header';
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase';
import Form from '../../components/Form/Form';
import Label from '../../components/Form/FormComponents/Label';
import Input from '../../components/Form/FormComponents/Input';
import SubmitButton from '../../components/Form/FormComponents/SubmitButton';
import logoKathon from '../../assets/imgs/LogoKathon.png';
import HeaderMobile from "../../components/HeaderFeed/HeaderFeed";

function CadastroEstudante() {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 868px)");
        const handleMediaQueryChange = (e) => setIsMobile(e.matches);

        handleMediaQueryChange(mediaQuery);
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append("nomeCompleto", nome);
        formData.append("email", email);
        formData.append("cpf", cpf);
        formData.append("dataNascimento", dataNascimento);
        formData.append("celular", celular);
        formData.append("senha", senha);
        formData.append("fotoPerfil", fotoPerfil);

        formData.append("cep", "12345-678");
        formData.append("rua", "Rua Exemplo");
        formData.append("numero", "123");
        formData.append("cidade", "Cidade Exemplo");
        formData.append("bairro", "Bairro Exemplo");
        formData.append("estado", "Estado Exemplo");
        formData.append("documentoHistorico", new Blob([""], { type: "application/pdf" }));

        try {
            const response = await fetch("https://apibackend.kathon.tech/api/jovens/cadastrar", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Jovem cadastrado com sucesso!");
                setTimeout(() => {
                    navigate('/Login'); // Redirect to login page after 1.5 seconds
                }, 1500);
            } else {
                alert("Erro ao cadastrar o jovem.");
            }
        } catch (error) {
            alert("Erro ao comunicar com o servidor.");
        }
    };

    return (
        <>
            {isMobile ? <HeaderMobile /> : <Header />}
            <CardPretoBase customClass="cardPretoForms">
                <img className={styles.logoKathonLogin} src={logoKathon} alt="logoKathon" />
                <h1 className={styles.tituloCadastro}>Cadastro Estudante</h1>

                <Form customClass="formsLogin" onSubmit={handleSubmit}>
                    <Label customClass="labelFormsCadastro" text="Nome Completo" />
                    <Input text="" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="Digite seu email" />
                    <Input text="" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="Foto de perfil" />
                    <Input text="" type="file" onChange={(e) => setFotoPerfil(e.target.files[0])} />

                    <Label customClass="labelFormsCadastro" text="CPF" />
                    <Input text="" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />

                    <div className={styles.linhaInputs}>
                        <div className={styles.inputMaior}>
                            <Label customClass="labelFormsCadastro" text="Data de Nascimento" />
                            <Input text="" type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                        </div>

                        <div className={styles.inputMaior}>
                            <Label customClass="labelFormsCadastro" text="Celular" />
                            <Input text="" type="text" value={celular} onChange={(e) => setCelular(e.target.value)} />
                        </div>
                    </div>

                    <Label customClass="labelFormsCadastro" text="Senha" />
                    <Input text="" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <SubmitButton text="Cadastrar Jovem" />
                </Form>
            </CardPretoBase>
        </>
    );
}

export default CadastroEstudante;