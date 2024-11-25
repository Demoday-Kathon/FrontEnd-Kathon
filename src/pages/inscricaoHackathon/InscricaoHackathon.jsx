import React, { useState, useEffect } from 'react';
import styles from '../cadastroEmpresa/CadastroEmpresa.module.css';
import styles1 from './InscricaoHackathon';
import Header from '../../components/layout/headerInterno/HeaderInterno';
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase';
import Form from '../../components/Form/Form';
import Label from '../../components/Form/FormComponents/Label';
import Input from '../../components/Form/FormComponents/Input';
import SubmitButton from '../../components/Form/FormComponents/SubmitButton';
import logoKathon from '../../assets/imgs/logoKathon.png';
import HeaderMobile from "../../components/HeaderFeedInterno/HeaderFeedInterno";

function InscricaoHackathon() {
    const [isMobile, setIsMobile] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [senha, setSenha] = useState('');
    const [logoEmpresa, setLogoEmpresa] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (logoEmpresa) {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!validImageTypes.includes(logoEmpresa.type)) {
                alert('Apenas imagens PNG, JPG e JPEG são permitidas.');
                return;
            }
        }

        // Open the modal on successful form submission
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Clear form fields
        setNomeEmpresa('');
        setCnpj('');
        setEmailEmpresa('');
        setTelefone('');
        setCep('');
        setRua('');
        setNumero('');
        setCidade('');
        setBairro('');
        setEstado('');
        setSenha('');
        setLogoEmpresa(null);

        window.location.reload();
    };

    const Modal = ({ isOpen, onClose }) => {
        if (!isOpen) return null;

        return (
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <button className={styles.closeButton} onClick={onClose}>X</button>
                    <h2>Inscrição realizada com sucesso!</h2>
                </div>
            </div>
        );
    };

    return (
        <>
            {isMobile ? <HeaderMobile /> : <Header />}
            <CardPretoBase customClass="cardPretoForms">
                <img className={styles.logoKathonLogin} src={logoKathon} alt="logoKathon" />
                <h1 className={styles.tituloCadastro}>Inscrição Hackathon </h1>

                <Form customClass="formsLogin" onSubmit={handleSubmit}>
                    <Label customClass="labelFormsCadastro" text="Nome Completo" />
                    <Input text="" type="text" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="CPF" />
                    <Input text="" type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="URL Linkedin" />
                    <Input text="" type="email" value={emailEmpresa} onChange={(e) => setEmailEmpresa(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="URL Github" />
                    <Input text="" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="Portifólio" />
                    <Input text="" type="file" onChange={(e) => setLogoEmpresa(e.target.files[0])} />

                    <SubmitButton text="Inscreva-se" />
                </Form>
            </CardPretoBase>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
}

export default InscricaoHackathon;