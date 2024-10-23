import Style from "../planoHome.props/HomePlano.module.css"


function HomePlano({img, alt, text, customtext}){

    return(
             <div className={Style.homeplanofilho}>
                 <img className={Style.planohomeimg} src={img} alt={alt} title={alt} />
                 <h4 className={`${Style.text} ${Style[customtext]}`} >{text} </h4>
            </div>
    )
}

export default HomePlano