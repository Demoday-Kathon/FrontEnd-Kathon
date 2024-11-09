import HeaderInterno from '../../components/layout/headerInterno/HeaderInterno'
import DescricaoComunidade from '../../components/DescricaoComunidade/DescricaoComunidade'
import PhotoProfile from '../../assets/imgs/joana.png';
import PhotoPost from '../../assets/imgs/rocketseat.png';
import Post from '../../components/layout/componentePost/ComponentePost';
import Feed from '../../components/layout/componenteFeed/ComponenteFeed'
import User from '../../assets/imgs/joana.png'
import Abel from '../../assets/imgs/Abel.png'
import IBM from '../../assets/imgs/IBM.png'
import IBM_desafios from '../../assets/imgs/ibm_desafios.jpg'
import py_data from '../../assets/imgs/pydata.png'
import proa from '../../assets/imgs/instituto_proa.jpg'
import styles from './Feed.module.css'

function Feeds() {

    return (
        <div className={`${styles.containerComunidadeVisao}`}>
            <HeaderInterno />
            <div className={styles.Bloco}>
                <div className={`${styles.blocoInterno}`}>
                    <div className={styles.containeFeedComunity}>
                        <Feed >
                            <Post
                            nameUser={"Joana Pereira"}
                            profile={PhotoProfile}
                            hours={"6 Horas atrás"}
                            description={"Hackathons são eventos intensivos para criar soluções inovadoras e aprender colaborativamente."}
                            photoPost={proa}
                            />
                            <Post
                            nameUser={"Abel Ferreira"}
                            profile={Abel}
                            hours={"2 Horas atrás"}
                            description={"Hackathons são eventos intensivos para criar soluções inovadoras e aprender colaborativamente."}
                            photoPost={PhotoPost}
                            />
                            <Post
                            nameUser={"IBM"}
                            profile={IBM}
                            hours={"12 Horas atrás"}
                            description={"Hackathons são eventos intensivos para criar soluções inovadoras e aprender colaborativamente."}
                            photoPost={IBM_desafios}
                            />
                            <Post
                            nameUser={"Joana Pereira"}
                            profile={PhotoProfile}
                            hours={"3 Horas atrás"}
                            description={"Hackathons são eventos intensivos para criar soluções inovadoras e aprender colaborativamente."}
                            photoPost={py_data}
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