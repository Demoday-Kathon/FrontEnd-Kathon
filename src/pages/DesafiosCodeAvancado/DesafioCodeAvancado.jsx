import React, { useEffect, useRef, useState } from 'react';
import Styles from './DesafioCodeAvancado.module.css';
import ImageNivelIniciante from '../../assets/imgs/nivelavancadocode.png';
import HeaderInterno from '../../components/layout/headerInterno/HeaderInterno';
import ModalGame from '../../components/ModalGame/ModalGame';
import Setawhite from '../../assets/imgs/seta.svg';

const API_KEY = " ";

function DesafiosCode() {
    const editorRef = useRef(null);
    const [genAI, setGenAI] = useState(null);
    const [exercise, setExercise] = useState("Carregando exercício...");
    const [time, setTime] = useState(15 * 60);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalText, setModalText] = useState("");
    const [modalTitleColor, setModalTitleColor] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadMonacoAndAI = async () => {
            const monaco = await import('monaco-editor');
            const { GoogleGenerativeAI } = await import('@google/generative-ai');
            const aiInstance = new GoogleGenerativeAI(API_KEY);
            setGenAI(aiInstance);

            const spaceCodeElement = document.getElementsByClassName(Styles.SpaceCode)[0];
            if (spaceCodeElement && !editorRef.current) {
                editorRef.current = monaco.editor.create(spaceCodeElement, {
                    value: "// Escreva seu código aqui\n",
                    language: 'javascript',
                    theme: 'vs-dark',
                    "semanticHighlighting.enabled": true,
                    minimap: { enabled: false },
                    automaticLayout: true,
                    autoIndent: true,
                    lineNumbers: "on",
                    fontSize: 18
                });
                generateExercise(aiInstance);
            }
        };

        loadMonacoAndAI();

        return () => {
            if (editorRef.current) {
                editorRef.current.dispose();
                editorRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(timerInterval);
                    alert("Tempo esgotado!");
                    editorRef.current.setValue("// Escreva seu código aqui\n");
                    generateExercise(genAI);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [genAI]);

    const generateExercise = async (genAIInstance) => {
        const prompt = "Crie um exercício de programação para o aluno praticar com JavaScript ou Python. O exercício deve ser algo avançado. texto curto de no maximo 60 caracteres";

        try {
            const result = await genAIInstance.getGenerativeModel({ model: "gemini-1.5-flash-latest" }).generateContent(prompt);
            if (result && result.response && result.response.candidates.length > 0) {
                const exerciseText = result.response.candidates[0].content.parts[0].text;
                setExercise(exerciseText);
                setTime(15 * 60);
            } else {
                throw new Error("Estrutura de resposta inválida.");
            }
        } catch (error) {
            console.error("Erro ao gerar exercício:", error);
            setExercise("Erro ao obter o exercício. Tente novamente.");
        }
    };

    const submitCode = async () => {
        setLoading(true); // Set loading to true before starting the async operation
        const userCode = editorRef.current.getValue();
        const exercisePrompt = exercise;
        const feedbackPrompt = `Verifique se o código abaixo resolve o seguinte exercício: ${exercisePrompt}. \n\nCódigo do usuário:\n${userCode}. Não passe a resposta, nem faça código somente escreva o comentário do que esta errado. Nunca diga incorreto na resposta, somente correto. a resposta deve ter 80 caracteres e não ultrapasse. Passe um comentário detalhado.`;
        
        try {
            const result = await genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" }).generateContent(feedbackPrompt);
            if (result && result.response && result.response.candidates.length > 0) {
                const feedback = result.response.candidates[0].content.parts[0].text;
                setModalText(feedback);
                if (feedback.includes("correto")) {
                    setModalTitle("Parabéns! Você acertou");
                    setModalTitleColor("green");
                } else {
                    setModalTitle("Tente novamente");
                    setModalTitleColor("red");
                }
                setModalVisible(true);
            } else {
                throw new Error("Estrutura de resposta inválida ao avaliar o código.");
            }
        } catch (error) {
            console.error("Erro ao avaliar o código:", error);
            alert("Erro ao avaliar o código. Tente novamente.");
        } finally {
            setLoading(false); // Set loading to false after the async operation completes
        }
    };

    const handleModalButton1 = () => {
        setModalVisible(false);
    };

    const handleModalButton2 = () => {
        setModalVisible(false);
        editorRef.current.setValue("// Escreva seu código aqui\n");
        generateExercise(genAI);
    };

    return (
        <div className={Styles.DesafiosCode}>
            <HeaderInterno />
            <div className={Styles.ContainerPrincipalSpaceCode}>
                <div className={Styles.ContainerSpaceCode}>
                    <div className={Styles.ContainerIMageNivelDesafio}>
                        <img className={Styles.ImageNivelDesafio} src={ImageNivelIniciante} alt="Imagem de nível de desafio" />
                    </div>
                    <div className={Styles.ContainerDescriptionDesafio}>
                        <p>{exercise}</p>
                    </div>
                    <div className={Styles.SpaceCode}></div>
                    <div className={Styles.ContainerButton}>
                        <p className={Styles.Temporizador}>{`${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}</p>
                        <div className={Styles.ButtonEnviar} onClick={submitCode}>
                            <p>Enviar Código</p>
                            <img className={Styles.ImageEnviar} src={Setawhite} alt="Imagem de enviar" />
                        </div>
                    </div>
                </div>
            </div>
            {loading && (
                <div className={Styles.LoadingContainer}>
                    <p>Carregando...</p>
                </div>
            )}
            {modalVisible && !loading && (
                <div className={Styles.ContainerModalgame}>
                    <ModalGame
                        button1={"Tentar Novamente"}
                        button2={"Avançar"}
                        text={modalText}
                        title={modalTitle}
                        titleColor={modalTitleColor}
                        onButton1Click={handleModalButton1}
                        onButton2Click={handleModalButton2}
                        key={"1"}
                    />
                </div>
            )}
        </div>
    );
}

export default DesafiosCode;