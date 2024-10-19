import Styles from './ComponentePost.module.css';

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
        </div>
    )
}

export default ComponentePost;