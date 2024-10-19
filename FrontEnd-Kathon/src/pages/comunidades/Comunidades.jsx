import HeaderComunidade from '../../components/HeaderComunidade/HeaderComunidade'
import DescricaoComunidade from '../../components/DescricaoComunidade/DescricaoComunidade'
import PhotoProfile from '../../assets/imgs/joana.png';
import PhotoPost from '../../assets/imgs/rocketseat.png';
import Post from '../../components/layout/componentePost/ComponentePost';
import Feed from '../../components/layout/componenteFeed/ComponenteFeed'
import BannerIMG from '../../assets/imgs/background-comunity.png'
import User from '../../assets/imgs/joana.png'
import Visibilidade from '../../assets/imgs/visibility.png'
import IconAutor from '../../assets/imgs/PersonCircle.png'
import styles from './Comunidades.module.css'

function Comunidades() {
    return (
        <div className={styles.containerComunidadeVisao}>

            <HeaderComunidade />

            <div className={styles.Bloco}>

                <div className={styles.blocoInterno}>
                    <img className={styles.BannerIMG} src={BannerIMG} alt="Banner" />
                    <div className={styles.containeFeedComunity}>
                        <Feed>
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
                        </Feed>
                        <div className={styles.ContentIntern}>

                            <DescricaoComunidade className={styles.DescricaoComunidade}>
                                <h1 className={styles.TituloDescricaoComunidade}>#CodeNation</h1>

                                <div className={styles.containerQuantidadeMembros}>
                                    <p className={styles.QuantidadeMembros}>1 mil membros</p>
                                </div>

                                <div className={styles.DescricaoText}>
                                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum enim neque beatae! Dolore, in commodi."</p>
                                </div>

                                <div className={styles.ContainerAutorVisibilidade}>
                                    <img className={styles.IconesDescriptionComunidade} src={IconAutor} alt="Ícone do autor" />
                                    <div className={styles.ContainerIcones}>
                                        <h5>Autor</h5>
                                        <p>Joana Pereira</p>
                                    </div>
                                </div>

                                <div className={styles.ContainerAutorVisibilidade}>
                                    <img className={styles.IconesDescriptionComunidade} src={Visibilidade} alt="Ícone de visibilidade" />
                                    <div className={styles.ContainerIcones}>
                                        <h5>Visível</h5>
                                        <p>Qualquer pessoa pode encontrar a comunidade</p>
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

export default Comunidades