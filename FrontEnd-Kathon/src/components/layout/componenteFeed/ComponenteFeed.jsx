import Post from '../componentePost/ComponentePost';
import PhotoProfile from '../../../assets/imgs/joana.png';
import PhotoPost from '../../../assets/imgs/rocketseat.png';
import Styles from './ComponenteFeed.module.css';
function Componentefeed(){
    return(
        <div className={Styles.ContainerFeed}>
            <Post
            nameUser={"Joana Pereira"}
            profile={PhotoProfile}
            hours={"3 Horas atrás"}
            description={"loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"}
            photoPost={PhotoPost}
            />
            <Post
            nameUser={"Joana Pereira"}
            profile={PhotoProfile}
            hours={"3 Horas atrás"}
            description={"loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"}
            photoPost={PhotoPost}
            />
            <Post
            nameUser={"Joana Pereira"}
            profile={PhotoProfile}
            hours={"3 Horas atrás"}
            description={"loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"}
            photoPost={PhotoPost}
            />
            <Post
            nameUser={"Joana Pereira"}
            profile={PhotoProfile}
            hours={"3 Horas atrás"}
            description={"loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"}
            photoPost={PhotoPost}
            />
        </div>
    )
}

export default Componentefeed;