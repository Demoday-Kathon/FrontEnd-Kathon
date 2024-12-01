import React, { useState, useRef } from 'react';
import Styles from './AnaliseCurriculo.module.css';
import NavBar from '../dashBoardHome/components/NavBar';
import TtlDash from '../dashBoardHome/components/titulo/TtlDash';
import Perfil from './components/Perfil';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = './node_modules/pdfjs-dist/build/pdf.worker.mjs';

function AnaliseCurriculo() {
    const [curriculoCount, setCurriculoCount] = useState(0);
    const [curriculos, setCurriculos] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);
    const jobDescriptionRef = useRef(null);

    const API_KEY = "AIzaSyASjxaaWnQv56ShieFe4aEXOMeUZjs0HBo";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const handleAddCurriculo = async () => {
        const file = fileInputRef.current.files[0];
        if (!file) return;

        setLoading(true);
        try {
            const curriculumContent = await extractTextFromPDF(file);
            setCurriculos([...curriculos, curriculumContent]);
            setCurriculoCount(curriculoCount + 1);
            fileInputRef.current.value = '';
        } catch (error) {
            console.error('Erro ao processar o PDF:', error);
            alert('Erro ao processar o PDF. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const extractTextFromPDF = async (file) => {
        const pdfData = await pdfjsLib.getDocument(URL.createObjectURL(file)).promise;
        let text = '';
        for (let i = 1; i <= pdfData.numPages; i++) {
            const page = await pdfData.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(' ') + '\n';
        }
        return text;
    };

    const handleAnalyzeCurriculos = async () => {
        const jobDescription = jobDescriptionRef.current.value;

        if (!jobDescription) {
            alert("Por favor, preencha a descrição da vaga.");
            return;
        }
        if (curriculos.length === 0) {
            alert("Por favor, adicione ao menos um currículo.");
            return;
        }

        if (!jobDescription || curriculos.length === 0) return;

        setLoading(true);
        try {
            const results = await analyzeCurriculos(jobDescription, curriculos);
            setResults(results);
        } catch (error) {
            console.error('Erro ao analisar os currículos:', error);
            alert('Erro ao analisar os currículos. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const analyzeCurriculos = async (jobDescription, curriculos) => {
        const results = [];
        for (let i = 0; i < curriculos.length; i++) {
            const curriculumContent = curriculos[i];
            const namePrompt = `Extraia o nome do candidato no seguinte currículo, retorne apenas o nome: "${curriculumContent}".`;
            const nameResult = await model.generateContent(namePrompt);
            const candidateName = await nameResult.response.text();

            const explanationPrompt = `Justifique como o currículo a seguir se encaixa na descrição da vaga: "${jobDescription}". Currículo: "${curriculumContent}". A justificativa não deve ultrapassar de 100 caracteres.`;
            const explanationResult = await model.generateContent(explanationPrompt);
            const explanationText = await explanationResult.response.text();

            const scorePrompt = `Avalie o seguinte currículo em relação à descrição da vaga: "${jobDescription}". Currículo: "${curriculumContent}". Dê uma nota de 0 a 100 e justifique.`;
            const scoreResult = await model.generateContent(scorePrompt);
            const scoreText = await scoreResult.response.text();
            const scoreMatch = scoreText.match(/(\d+(\.\d+)?)/);
            const score = scoreMatch ? parseFloat(scoreMatch[0]) : 0;

            results.push({ name: candidateName.trim() || `Candidato ${i + 1}`, explanation: explanationText, score });
        }
        results.sort((a, b) => b.score - a.score);
        return results;
    };

    return (
        <div className={Styles.conteudo}>
            <div className={Styles.nav}>
                <NavBar />
                <TtlDash 
                    texto='Recrutamento'
                    customClass='containerKia'
                />
            </div>
            <div className={Styles.content}>
                <div className={Styles.ladoEsq}>
                    <div className={Styles.topLeft}>
                        <div id="candidateCount" className={Styles.candidateCount}>
                            Candidatos cadastrados: {curriculoCount}
                        </div>
                        <input type="text" className={Styles.nome_vaga} placeholder='Digite o tipo de vaga' ref={jobDescriptionRef} />
                        <div className={Styles.diretorio}>
                            <label htmlFor="fileInput">Selecione um arquivo: </label>
                            <input type="file" id='fileInput' ref={fileInputRef} />
                        </div>
                    </div>
                    <div className={Styles.lowLeft}>
                        <button className={Styles.adicionar} onClick={handleAddCurriculo}>Adicionar Curriculo</button>
                        <button className={Styles.iniciar} onClick={handleAnalyzeCurriculos}>Iniciar Análise</button>
                    </div>
                </div>
                <div className={Styles.ladoDir}>
                    {results.map((result, index) => (
                        <Perfil 
                            key={index}
                            nome={result.name}
                            justificativa={result.explanation}
                            score={result.score.toFixed(2)}
                        />
                    ))}
                </div>
            </div>
            {loading && <div id="loadingOverlay" className={Styles.loadingOverlay}>Carregando...</div>}
        </div>
    );
}

export default AnaliseCurriculo;