import React, { useState, useRef } from 'react';
import Styles from './AnaliseCurriculo.module.css';
import NavBar from '../dashBoardHome/components/NavBar';
import TtlDash from '../dashBoardHome/components/titulo/TtlDash';
import Perfil from './components/Perfil';
import { GoogleGenerativeAI } from '@google/generative-ai';

const curriculosPreCadastrados = [
  {
    nome: 'João Silva',
    experiencia: 'Desenvolvedor Front-end com 5 anos de experiência em React e JavaScript.',
    habilidades: 'React, JavaScript, HTML, CSS, Git, Node.js',
  },
  {
    nome: 'Maria Oliveira',
    experiencia: 'Desenvolvedora Web Full Stack com 7 anos de experiência em Node.js, React e bancos de dados SQL.',
    habilidades: 'Node.js, React, SQL, MongoDB, Express, HTML, CSS',
  },
  {
    nome: 'Carlos Souza',
    experiencia: 'Desenvolvedor Back-end com foco em Python e Django, com 4 anos de experiência.',
    habilidades: 'Python, Django, SQL, REST APIs, Docker',
  }
];

function AnaliseCurriculo() {
    const [curriculoCount, setCurriculoCount] = useState(0);
    const [curriculos, setCurriculos] = useState(curriculosPreCadastrados);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const jobDescriptionRef = useRef(null);

    const API_KEY = "AIzaSyAF6YyFxd3cTA4QWqglwSTmToDA78nU_o0";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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

     
            const prompt = `
                Avalie o seguinte currículo em relação à descrição da vaga: "${jobDescription}". 
                Currículo: "${curriculumContent.experiencia}" "${curriculumContent.habilidades}". 
                Dê uma nota de 0 a 100 e justifique de forma breve sem incluir números na justificativa. Não retorne o nome nota e justificativa. A justificativa deve ter no maximo 90 caracteres.`;

            const result = await model.generateContent(prompt);
            const scoreText = result.response.text();
            const scoreMatch = scoreText.match(/(\d+(\.\d+)?)/);
            const score = scoreMatch ? parseFloat(scoreMatch[0]) : 0;

           
            const explanation = scoreText.replace(/(\d+(\.\d+)?)/, "").trim();

         
            results.push({ 
                name: curriculumContent.nome || `Candidato ${i + 1}`, 
                explanation: explanation,
                score
            });
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
                        <input type="text" className={Styles.nome_vaga} placeholder='Digite a descrição da sua vaga' ref={jobDescriptionRef} />
                    </div>
                    <div className={Styles.lowLeft}>
                        <button className={Styles.iniciar} onClick={handleAnalyzeCurriculos}>Iniciar Análise</button>
                    </div>
                        <div id="candidateCount" className={Styles.candidateCount}>
                            Candidatos: {curriculosPreCadastrados.length}
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
