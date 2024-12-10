import { useState, useEffect } from 'react';
import Header from '../../components/layout/headerInterno/HeaderInterno';
import Feed from '../../components/layout/componenteFeed/ComponenteFeed';
import Post from '../../components/layout/componentePost/ComponentePost';
import Modal from '../../components/modalPublicacao/Publicacao';
import User from '../../assets/imgs/Joana.png'; // Imagem padrão para o perfil
import styles from './Feed.module.css';
import { useUser } from '../../components/contexts/UserContext';
import HeaderMobile from '../../components/HeaderFeedInterno/HeaderFeedInterno';
import Footer from '../../components/layout/footer/Footer';

function Feeds() {
    const [isMobile, setIsMobile] = useState(false);
    const { user } = useUser();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 868px)");
        const handleMediaQueryChange = (e) => setIsMobile(e.matches);

        handleMediaQueryChange(mediaQuery);
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    const fetchPosts = () => {
        setIsLoading(true); // Inicia o carregamento
        fetch('https://backendfeed.kathon.tech/feed')
            .then(response => response.json())
            .then(data => {
                setPosts(data.reverse());
                setIsLoading(false); // Finaliza o carregamento
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setIsLoading(false); // Finaliza o carregamento mesmo em caso de erro
            });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handlePostClick = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
        <>
            {isMobile ? <HeaderMobile /> : <Header />}
            <div className={styles.feedContainer}>
                <div className={styles.feedContent}>
                    <div className={styles.ContainerNewPost}>
                        <Modal closeModal={closeModal} refreshFeed={fetchPosts} />
                    </div>
                    <Feed>
                        {isLoading ? (
                            <p className={styles.loadingMessage}>Carregando as postagens...</p> // Mensagem de carregamento
                        ) : (
                            posts.map((post, index) => (
                                <Post
                                    key={index}
                                    nameUser={post.name} // O nome do usuário
                                    profile={post.imagemPerfil || User} // Caso não tenha foto, usa a imagem padrão
                                    hours="Há algumas horas" // Exemplo de hora, pode ser ajustado conforme necessário
                                    description={post.descricao} // Descrição do post
                                    photoPost={post.imagemPost} // Foto do post
                                />
                            ))
                        )}
                    </Feed>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Feeds;
