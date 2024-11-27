import './Perfil.css'

function Perfil( {nome, justificativa, score} ){
    return(
        <div className="caixa">
            <span className='nome'>Candidato: <h1>{nome}</h1></span>
            <span className='sobre'>Justificativa: <p>{justificativa}</p></span>
            <span className='sobre'>Pontuação: <p>{score}</p></span>
        </div>
    )
}

export default Perfil