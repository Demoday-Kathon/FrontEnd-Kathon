import React, { useEffect, useRef, useState } from 'react';
import Styles from './DesafiosCode.module.css';
import ImageNivelIniciante from '../../assets/imgs/niveliniciante.png';
import HeaderInterno from '../../components/layout/headerInterno/HeaderInterno';
import Setawhite from '../../assets/imgs/seta.svg';

const API_KEY = "AIzaSyBfJrzeRAPn1aJOsHJyhdfNcxkOaKJJgOk";

function DesafiosCode() {
    const editorRef = useRef(null);
    const [genAI, setGenAI] = useState(null);
    const [exercise, setExercise] = useState("Carregando exercício...");
    const [time, setTime] = useState(15 * 60);

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
        const prompt = "Crie um exercício de programação para o aluno praticar com JavaScript ou Python. O exercício deve ser algo de iniciante. texto curto de no maximo 80 caracteres";

        try {
            const result = await genAIInstance.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(prompt);
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
        const userCode = editorRef.current.getValue();
        const exercisePrompt = exercise;
        const feedbackPrompt = `Verifique se o código abaixo resolve o seguinte exercício: ${exercisePrompt}. \n\nCódigo do usuário:\n${userCode}`;
        
        try {
            const result = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(feedbackPrompt);
            if (result && result.response && result.response.candidates.length > 0) {
                const feedback = result.response.candidates[0].content.parts[0].text;
                if (feedback.includes("correto")) {
                    alert("Parabéns! Você completou o exercício corretamente.");
                    editorRef.current.setValue("// Escreva seu código aqui\n");
                    generateExercise(genAI);
                } else {
                    alert("Tente novamente. Feedback: " + feedback);
                }
            } else {
                throw new Error("Estrutura de resposta inválida ao avaliar o código.");
            }
        } catch (error) {
            console.error("Erro ao avaliar o código:", error);
            alert("Erro ao avaliar o código. Tente novamente.");
        }
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
        </div>
    );
}

export default DesafiosCode;
