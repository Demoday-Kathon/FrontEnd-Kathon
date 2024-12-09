import { useState, useEffect } from 'react';
import Header from '../../components/layout/headerInterno/HeaderInterno';
import Feed from '../../components/layout/componenteFeed/ComponenteFeed';
import Post from '../../components/layout/componentePost/ComponentePost';
import Modal from '../../components/modalPublicacao/Publicacao';
import User from '../../assets/imgs/Joana.png';
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
        fetch('https://apibackend.kathon.tech/api/posts/listar')
            .then(response => response.json())
            .then(data => {
                setPosts(data.reverse());
                setIsLoading(false); // Termina o carregamento
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setIsLoading(false); // Termina o carregamento mesmo em caso de erro
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
                        <div className={styles.loadingMessage}>Carregando posts...</div>
                    ) : (
                        posts.map((post, index) => (
                            <Post
                                key={index}
                                nameUser={post.jovem.nomeCompleto}
                                profile={post.jovem.fotoPerfil ? `data:image/jpeg;base64,${post.jovem.fotoPerfil}` : User}
                                hours="Há algumas horas"
                                description={post.descricao}
                                photoPost={post.imagemPost ? `data:image/jpeg;base64,${post.imagemPost}` : null}
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