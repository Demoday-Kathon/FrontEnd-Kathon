import React, { useEffect, useState } from 'react';
import styles from './CadastroEstudante.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/header/Header';
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase';
import Form from '../../components/Form/Form';
import HeaderMobile from "../../components/HeaderFeed/HeaderFeed";

function CadastroEstudante() {
    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cpf: '',
        dataNascimento: '',
        celular: '',
        cep: '',
        rua: '',
        numero: '',
        cidade: '',
        bairro: '',
        estado: '',
        senha: '',
        historicoEscolar: null,
        fotoPerfil: null,
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 868px)");
        const handleMediaQueryChange = (e) => setIsMobile(e.matches);

        handleMediaQueryChange(mediaQuery);
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            // Enviar formDataToSend para o servidor
        } catch (error) {
            console.error("Erro ao enviar o formulário:", error);
        }
    };

    return (
        <>
            {isMobile ? <HeaderMobile /> : <Header />}
            <CardPretoBase customClass="cardPretoForms">
                <h1 className={styles.tituloCadastro}>Cadastro Estudante</h1>
                <Form onSubmit={handleSubmit}>
                    <Label customClass="labelFormsCadastro" text="Nome Completo" />
                    <Input name="nome" type="text" value={formData.nome} onChange={handleChange} />

                    <Label customClass="labelFormsCadastro" text="Documento - Histórico Escolar (PDF)" />
                    <Input name="historicoEscolar" type="file" onChange={handleChange} />

                    <Label customClass="labelFormsCadastro" text="Digite seu email" />
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} />

                    {/* Add other input fields similarly */}
                    
                    <SubmitButton text="Cadastrar Jovem" />
                </Form>
            </CardPretoBase>
        </>
    );
}

export default CadastroEstudante;