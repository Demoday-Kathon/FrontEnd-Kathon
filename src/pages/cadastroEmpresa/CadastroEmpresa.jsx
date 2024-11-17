import React, { useState } from 'react';
import styles from '../cadastroEmpresa/CadastroEmpresa.module.css';
import styles1 from './CadastroEmpresa.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/header/Header';
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase';
import Form from '../../components/Form/Form';
import Label from '../../components/Form/FormComponents/Label';
import Input from '../../components/Form/FormComponents/Input';
import SubmitButton from '../../components/Form/FormComponents/SubmitButton';
import logoKathon from '../../assets/imgs/logoKathon.png';

function CadastroEmpresa() {
    // Estados para armazenar os dados do formulário
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

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validação do arquivo de logo (somente imagens PNG, JPEG e JPG)
        if (logoEmpresa) {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!validImageTypes.includes(logoEmpresa.type)) {
                alert('Apenas imagens PNG, JPG e JPEG são permitidas.');
                return;
            }
        }

        // Criando um FormData para enviar os dados com arquivos
        const formData = new FormData();
        formData.append("nomeEmpresa", nomeEmpresa);
        formData.append("cnpj", cnpj);
        formData.append("emailCorporativo", emailEmpresa);
        formData.append("telefone", telefone);
        formData.append("cep", cep);
        formData.append("rua", rua);
        formData.append("numero", numero);
        formData.append("cidade", cidade);
        formData.append("bairro", bairro);
        formData.append("estado", estado);
        formData.append("senha", senha);
        formData.append("fotoPerfil", logoEmpresa);

        try {
            const response = await fetch("https://backend-kathon.onrender.com/api/empresas/cadastrar", {
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
            <Header />
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

                    <div className={styles.linhaInputs}>
                        <div className={styles.inputMaior}>
                            <Label customClass="labelFormsCadastro" text="CEP" />
                            <Input text="" type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
                        </div>

                        <div className={styles.inputMaior}>
                            <Label customClass="labelFormsCadastro" text="Rua" />
                            <Input text="" type="text" value={rua} onChange={(e) => setRua(e.target.value)} />
                        </div>
                    </div>

                    <div className={styles.linhaInputs}>
                        <div className={styles.inputMenor2}>
                            <Label customClass="labelFormsCadastro" text="Número" />
                            <Input text="" type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                        </div>

                        <div className={styles.inputMaior}>
                            <Label customClass="labelFormsCadastro" text="Cidade" />
                            <Input text="" type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                        </div>
                    </div>

                    <div className={styles.linhaInputs}>
                        <div className={styles.inputMaior}>
                            <Label customClass="labelFormsCadastro" text="Bairro" />
                            <Input text="" type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                        </div>

                        <div className={styles.inputMaior}>
                            <Label customClass="labelFormsCadastro" text="Estado" />
                            <Input text="" type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
                        </div>
                    </div>

                    <Label customClass="labelFormsCadastro" text="Senha" />
                    <Input text="" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <SubmitButton text="Cadastrar Empresa" />
                </Form>
            </CardPretoBase>
        </>
    );
}

export default CadastroEmpresa;