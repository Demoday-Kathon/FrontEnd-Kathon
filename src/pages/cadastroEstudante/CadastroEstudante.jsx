import React, { useState } from 'react';
import styles from '../cadastroEmpresa/CadastroEmpresa.module.css';
import styles1 from './CadastroEstudante.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/header/Header';
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase';
import Form from '../../components/Form/Form';
import Label from '../../components/Form/FormComponents/Label';
import Input from '../../components/Form/FormComponents/Input';
import SubmitButton from '../../components/Form/FormComponents/SubmitButton';
import logoKathon from '../../assets/imgs/logoKathon.png';

function CadastroEstudante() {
    // Estados para armazenar os dados do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [celular, setCelular] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [senha, setSenha] = useState('');
    const [historicoEscolar, setHistoricoEscolar] = useState(null);
    const [fotoPerfil, setFotoPerfil] = useState(null);

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Criando um FormData para enviar os dados com arquivos
        const formData = new FormData();
        formData.append("nomeCompleto", nome);
        formData.append("email", email);
        formData.append("cpf", cpf);
        formData.append("dataNascimento", dataNascimento);
        formData.append("celular", celular);
        formData.append("cep", cep);
        formData.append("rua", rua);
        formData.append("numero", numero);
        formData.append("cidade", cidade);
        formData.append("bairro", bairro);
        formData.append("estado", estado);
        formData.append("senha", senha);
        formData.append("documentoHistorico", historicoEscolar);
        formData.append("fotoPerfil", fotoPerfil);

        try {
            const response = await fetch("http://localhost:8080/api/jovens/cadastrar", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Jovem cadastrado com sucesso!");
            } else {
                alert("Erro ao cadastrar o jovem.");
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
                <h1 className={styles.tituloCadastro}>Cadastro Estudante</h1>

                <Form customClass="formsLogin" onSubmit={handleSubmit}>
                    <Label customClass="labelFormsCadastro" text="Nome Completo" />
                    <Input text="" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <Label customClass="labelFormsCadastro" text="Documento - Histórico Escolar (PDF)" />
                    <Input text="" type="file" onChange={(e) => setHistoricoEscolar(e.target.files[0])} />

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

                    <div className={styles.linhaInputs}>
                        <div className={styles.inputMenor}>
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

                    <SubmitButton text="Cadastrar Jovem" />
                </Form>
            </CardPretoBase>
        </>
    );
}

export default CadastroEstudante;