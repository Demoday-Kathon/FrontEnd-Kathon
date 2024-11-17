import { useState, useEffect } from 'react';
import HeaderInterno from '../../components/layout/headerInterno/HeaderInterno';
import DescricaoComunidade from '../../components/DescricaoComunidade/DescricaoComunidade';
import Feed from '../../components/layout/componenteFeed/ComponenteFeed';
import Post from '../../components/layout/componentePost/ComponentePost';
import ModalPublicacao from '../../components/modalPublicacao/Publicacao';
import User from '../../assets/imgs/joana.png';
import styles from './Feed.module.css';
import { useUser } from '../../components/contexts/UserContext';

function Feeds() {
    const { user } = useUser();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [posts, setPosts] = useState([]); 

    const listarPosts = () => {
        fetch('https://backend-kathon.onrender.com/api/posts/listar')
            .then(response => response.json())
            .then(data => {
                
                const reversedPosts = data.reverse();
                setPosts(reversedPosts);
            })
            .catch(error => console.error('Erro ao listar os posts:', error));
    };

    
    useEffect(() => {
        listarPosts();
    }, []);

    function handlePostClick() {
        setIsModalVisible(true);
    }

    function closeModal() {
        setIsModalVisible(false);
    }

    return (
        <div className={`${styles.containerComunidadeVisao}`}>
            <HeaderInterno />
            <div className={styles.Bloco}>
                <div className={`${styles.blocoInterno}`}>
                    <div className={styles.containeFeedComunity}>
                        <Feed>
                            
                            {posts.map((post, index) => (
                                <Post
                                    key={index}
                                    nameUser={post.jovem.nomeCompleto}
                                    profile={post.jovem.fotoPerfil ? `data:image/jpeg;base64,${post.jovem.fotoPerfil}` : User}
                                    hours={"Algumas horas atrás"} 
                                    description={post.descricao}
                                    photoPost={post.imagemPost ? `data:image/jpeg;base64,${post.imagemPost}` : null}
                                />
                            ))}
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
                            <div className={styles.ComponentePost} onClick={handlePostClick}>
                                <img src={user?.fotoPerfil ? `data:image/jpeg;base64,${user.fotoPerfil}` : User} alt="Perfil do Usuário" />
                                <p>Escreva algo...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalVisible && (
                <div className={styles.ContainerModalPublicacao}>
                    <ModalPublicacao closeModal={closeModal} refreshFeed={listarPosts} />
                </div>
            )}
        </div>
    );
}

export default Feeds;
