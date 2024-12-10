import React, { useState } from 'react';
import Styles from './ComponentePost.module.css';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

function ComponentePost({profile, nameUser, hours, description, photoPost}){

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    function formatDescription(description) {
        return description.replace (/^.*?:\s*/, "");
    }

    const originalDescription = {description};
    const formattedDescription = formatDescription(originalDescription.description);

    const handleLikeClick = () => {
        setLiked(!liked);
        setLikeCount(prevCount => liked ? prevCount - 1 : prevCount + 1);
    };

    return(
        <div className={Styles.ContainerPost}>

            <div className={Styles.ContainerProfile}>
                <img src={profile} alt="Foto Perfil" />

                <div>
                    <h3 className={Styles.NameUser}>@{nameUser}</h3>
                    <p className={Styles.Hours}>{hours}</p>
                </div>
            </div>

            <p className={Styles.DescriptionPost}>{formattedDescription}</p>

            <div>
                <img className={Styles.IMGPost} src={photoPost} alt="Foto Postagem" />
            </div>

            <div className={Styles.ActionIcons}>
                <div className={Styles.containerLikes}>
                <span>{likeCount}</span>
                <FaThumbsUp 
                    onClick={handleLikeClick} 
                    style={{ color: liked ? 'red' : 'white' }} 
                />
                </div>
                <FaComment />
                <FaShare />
            </div>
        </div>
    )
}

export default ComponentePost;