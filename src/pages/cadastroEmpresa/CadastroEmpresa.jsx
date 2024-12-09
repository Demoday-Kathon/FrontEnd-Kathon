import React, { useState, useEffect } from 'react';
import styles from '../cadastroEmpresa/CadastroEmpresa.module.css';
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

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 868px)");
        const handleMediaQueryChange = (e) => setIsMobile(e.matches);

        handleMediaQueryChange(mediaQuery);
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    // Estados para armazenar os dados do formulário
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [emailCorporativo, setEmailCorporativo] = useState('');
    const [senha, setSenha] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validação do arquivo de foto de perfil (somente imagens PNG, JPEG e JPG)
        if (fotoPerfil) {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!validImageTypes.includes(fotoPerfil.type)) {
                alert('Apenas imagens PNG, JPG e JPEG são permitidas.');
                return;
            }
        }

        // Criando um FormData para enviar os dados com arquivos
        const formData = new FormData();
        formData.append("nomeEmpresa", nomeEmpresa);
        formData.append("cnpj", cnpj);
        formData.append("emailCorporativo", emailCorporativo);
        formData.append("senha", senha);
        formData.append("fotoPerfil", fotoPerfil);

        try {
            const response = await fetch("https://apibackend.kathon.tech/api/empresas/cadastrar", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Empresa cadastrada com sucesso!");
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

                    <Label customClass="labelFormsCadastro" text="Email Corporativo" />
                    <Input text="" type="email" value={emailCorporativo} onChange={(e) => setEmailCorporativo(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="Senha" />
                    <Input text="" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="Foto de Perfil" />
                    <Input text="" type="file" onChange={(e) => setFotoPerfil(e.target.files[0])} />

                    <SubmitButton text="Cadastrar Empresa" />
                </Form>
            </CardPretoBase>
        </>
    );
}

export default CadastroEmpresa;