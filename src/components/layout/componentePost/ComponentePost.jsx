import Styles from './ComponentePost.module.css';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

function ComponentePost({profile, nameUser, hours, description, photoPost}){
    return(
        <div className={Styles.ContainerPost}>

            <div className={Styles.ContainerProfile}>
                <img src={profile} alt="Foto Perfil" />

                <div>
                    <h3>{nameUser}</h3>
                    <p className={Styles.Hours}>{hours}</p>
                </div>
            </div>

            <p className={Styles.DescriptionPost}>{description}</p>

            <div>
                <img className={Styles.IMGPost} src={photoPost} alt="Foto Postagem" />
            </div>

            <div className={Styles.ActionIcons}>
                <FaThumbsUp />
                <FaComment />
                <FaShare />
            </div>
        </div>
    )
}

export default ComponentePost;