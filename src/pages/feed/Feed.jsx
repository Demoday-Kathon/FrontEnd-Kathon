import HeaderComunidade from '../../components/HeaderFeed/HeaderFeed'
import DescricaoComunidade from '../../components/DescricaoComunidade/DescricaoComunidade'
import PhotoProfile from '../../assets/imgs/joana.png';
import PhotoPost from '../../assets/imgs/rocketseat.png';
import Post from '../../components/layout/componentePost/ComponentePost';
import Feed from '../../components/layout/componenteFeed/ComponenteFeed'
import User from '../../assets/imgs/joana.png'
import styles from './Feed.module.css'
import { useState } from 'react';

function Feeds() {
    const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);

    const handleHeaderToggle = () => {
        setIsHeaderCollapsed(!isHeaderCollapsed);
    };

    return (
        <div className={`${styles.containerComunidadeVisao}`}>

            <HeaderComunidade onToggle={handleHeaderToggle} />

            <div className={styles.Bloco}>
                <div className={`${styles.blocoInterno}`}>
                    <div className={styles.containeFeedComunity}>
                        <Feed >
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
                        </Feed>
                        <div className={styles.ContentIntern}>

                            <DescricaoComunidade className={styles.DescricaoComunidade}>
                                <h1 className={styles.TituloDescricaoComunidade}>#Feed</h1>

                                <div className={styles.containerQuantidadeMembros}>
                                    <p className={styles.QuantidadeMembros}>1 mil membros Online</p>
                                </div>

                                <div className={styles.DescricaoText}>
                                    <p>"Explore um espaço onde ideias se encontram e inovações ganham vida."</p>
                                </div>

                                <div className={styles.ContainerAutorVisibilidade}>
                                    <div className={styles.ContainerIcones}>
                                        <h5>Destaques do Feed</h5>
                                        <p>Artigos, vídeos e discussões sobre as últimas tendências.</p>
                                    </div>
                                </div>

                                <div className={styles.ContainerAutorVisibilidade}>
                                    <div className={styles.ContainerIcones}>
                                        <h5>Interação em Tempo Real</h5>
                                        <p>Compartilhe suas experiências.</p>
                                    </div>
                                </div>
                                <div className={styles.ContainerAutorVisibilidade}>
                                    <div className={styles.ContainerIcones}>
                                        <h5>Junte-se a nós e faça parte da inovação!</h5>
                                    </div>
                                </div>
                            </DescricaoComunidade>

                            <div className={styles.ComponentePost}>
                                <img src={User} alt="" />
                                <p>Escreva algo...</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Feeds;