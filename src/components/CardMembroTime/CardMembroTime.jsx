import Styles from './CardMembroTime.module.css';
import LinkedinImage from '../../assets/imgs/linkedin.png';
import GithubImage from '../../assets/imgs/github.png';

function CardMembroTime({ photo, linkedin, github, description, name }) {
    return(
        <div className={Styles.CardMember}>
            <img className={Styles.ImageMember} src={photo} alt="Foto do membro" />
            <h3>{name}</h3>
            <p>{description}</p>

            <div>

                <a target='_blank' href={linkedin}>
                <img src={LinkedinImage} alt="Logo Linkedin" />
                </a>
            

                <a target='_blank' href={github}>
                <img src={GithubImage} alt="Logo Linkedin" />
                </a>
            </div>
        </div>
    )
}

export default CardMembroTime;