import Styles from './ImageUser.module.css';
import AddProfile from '../../../assets/imgs/add-Profile.png';

function ImageUser({ imagemUser, nameUser }) {  
    return(
        <>
            <div className={Styles.container}>
                <div className={Styles.ContainerIMG}>
                <img className={Styles.add_profile} src={AddProfile} alt="Add Profile" />

                <div className={Styles.Profile}>
                <img src={imagemUser} alt="Imagem Usuário" />
                <p>{nameUser}</p>
                <p>@{nameUser}</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default ImageUser;