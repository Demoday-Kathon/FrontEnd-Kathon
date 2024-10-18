import style from '../Prêmios/Prêmios.module.css'


function premios (title, img, context, desc_premios ){

    return(

        <div className={style.container_premios}>
            <img className={style.premios} src={img} alt="" />
            <h3 className={style.title_premios}> {title} </h3>
            <p className={style.premios}> {context}</p>
            <p className={style.premios}> {desc_premios}</p>
        </div>
        
    )
}

export default premios
