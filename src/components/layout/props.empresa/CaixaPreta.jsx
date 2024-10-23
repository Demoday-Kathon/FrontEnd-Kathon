import Style from "./CaixaPreta.module.css"

function CaixaPreta({text, customCaixa}){

    return(
        <div className={ `${Style.CaixaPreta}  ${Style[customCaixa]}`}>
            <p>{text}</p>
        </div>
    )
}

export default CaixaPreta