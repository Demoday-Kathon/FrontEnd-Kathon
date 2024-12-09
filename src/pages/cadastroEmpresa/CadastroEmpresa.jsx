import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from '../cadastroEmpresa/CadastroEmpresa.module.css';
import styles1 from './CadastroEmpresa.module.css';
import Header from '../../components/layout/header/Header';
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase';
import Form from '../../components/Form/Form';
import Label from '../../components/Form/FormComponents/Label';
import Input from '../../components/Form/FormComponents/Input';
import SubmitButton from '../../components/Form/FormComponents/SubmitButton';
import logoKathon from '../../assets/imgs/LogoKathon.png';
import HeaderMobile from "../../components/HeaderFeed/HeaderFeed";

function CadastroEmpresa() {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 868px)");
        const handleMediaQueryChange = (e) => setIsMobile(e.matches);

        handleMediaQueryChange(mediaQuery);
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [emailEmpresa, setEmailEmpresa] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [logoEmpresa, setLogoEmpresa] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (logoEmpresa) {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!validImageTypes.includes(logoEmpresa.type)) {
                alert('Apenas imagens PNG, JPG e JPEG são permitidas.');
                return;
            }
        }

        const formData = new FormData();
        formData.append("nomeEmpresa", nomeEmpresa);
        formData.append("cnpj", cnpj);
        formData.append("emailCorporativo", emailEmpresa);
        formData.append("telefone", telefone);
        formData.append("senha", senha);
        formData.append("fotoPerfil", logoEmpresa);

        formData.append("cep", "12345-678");
        formData.append("rua", "Rua Exemplo");
        formData.append("numero", "123");
        formData.append("cidade", "Cidade Exemplo");
        formData.append("bairro", "Bairro Exemplo");
        formData.append("estado", "Estado Exemplo");

        try {
            const response = await fetch("https://apibackend.kathon.tech/api/empresas/cadastrar", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Empresa cadastrada com sucesso!");
                setTimeout(() => {
                    navigate('/Login'); // Redirect to login page after 1.5 seconds
                }, 1500);
            } else {
                alert("Erro ao cadastrar a empresa.");
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
                <h1 className={styles.tituloCadastro}>Cadastro Empresa</h1>

                <Form customClass="formsLogin" onSubmit={handleSubmit}>
                    <Label customClass="labelFormsCadastro" text="Nome da Empresa" />
                    <Input text="" type="text" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="CNPJ" />
                    <Input text="" type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="Email da Empresa" />
                    <Input text="" type="email" value={emailEmpresa} onChange={(e) => setEmailEmpresa(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="Telefone" />
                    <Input text="" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="Logo da Empresa (Imagem)" />
                    <Input text="" type="file" onChange={(e) => setLogoEmpresa(e.target.files[0])} />

                    <Label customClass="labelFormsCadastro" text="Senha" />
                    <Input text="" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <SubmitButton text="Cadastrar Empresa" />
                </Form>
            </CardPretoBase>
        </>
    );
}

export default CadastroEmpresa;