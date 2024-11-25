
import PhotoProfile from '../../assets/imgs/Joana.png';
import PhotoPost from '../../assets/imgs/rocketseat.png';
import Post from '../../components/layout/componentePost/ComponentePost';
import FeedComponent from '../../components/layout/componenteFeed/ComponenteFeed'
import styles from "../../pages/comunidades/Comunidades.module.css"
import stylesFeed from "./Feed.module.css"


import HeaderFeed from "../../components/HeaderFeed/HeaderFeed"

function Feed() {
  return (
    <>
      <div className={`${styles.feedprincipal} ${stylesFeed.feedPrincipal}`}>
        <div className={styles.headerlateral}>
            <HeaderFeed />
        </div>

        <div className={stylesFeed.content}>

        <div>
          <h1 className={stylesFeed.titleFeed}>Feed</h1>
        </div>
            <div className={`${styles.ContaineFeedComunity}, ${stylesFeed.containerFeed}`}>
                        <FeedComponent ContainerFeedR="Rick">
                            <Post
                            nameUser={"Joana Pereira"}
                            profile={PhotoProfile}
                            hours={"3 Horas atrás"}
                            description={"Hackathons são eventos intensivos para criar soluções inovadoras e aprender colaborativamente."}
                            photoPost={PhotoPost}
                            />
                            <Post
                            nameUser={"Joana Pereira"}
                            profile={PhotoProfile}
                            hours={"3 Horas atrás"}
                            description={"Hackathons são eventos intensivos para criar soluções inovadoras e aprender colaborativamente."}
                            photoPost={PhotoPost}
                            />
                            <Post
                            nameUser={"Joana Pereira"}
                            profile={PhotoProfile}
                            hours={"3 Horas atrás"}
                            description={"Hackathons são eventos intensivos para criar soluções inovadoras e aprender colaborativamente."}
                            photoPost={PhotoPost}
                            />
                            <Post
                            nameUser={"Joana Pereira"}
                            profile={PhotoProfile}
                            hours={"3 Horas atrás"}
                            description={"Hackathons são eventos intensivos para criar soluções inovadoras e aprender colaborativamente."}
                            photoPost={PhotoPost}
                            />
                        </FeedComponent>
                        </div>
                      </div>
                        </div>
    </>
  );
}
export default Feed;
