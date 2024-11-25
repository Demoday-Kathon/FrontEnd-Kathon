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

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 868px)");
        const handleMediaQueryChange = (e) => setIsMobile(e.matches);

        handleMediaQueryChange(mediaQuery);
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    const fetchPosts = () => {
        fetch('http://localhost:8080/api/posts/listar')
            .then(response => response.json())
            .then(data => setPosts(data.reverse()))
            .catch(error => console.error('Error fetching posts:', error));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handlePostClick = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
    <>
            {isMobile? <HeaderMobile /> : <Header />}
        <div className={styles.feedContainer}>
            <div className={styles.feedContent}>
                <div className={styles.ContainerNewPost}>
                <Modal closeModal={closeModal} refreshFeed={fetchPosts} />
                </div>
                <Feed>
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            nameUser={post.jovem.nomeCompleto}
                            profile={post.jovem.fotoPerfil ? `data:image/jpeg;base64,${post.jovem.fotoPerfil}` : User}
                            hours="Há algumas horas"
                            description={post.descricao}
                            photoPost={post.imagemPost ? `data:image/jpeg;base64,${post.imagemPost}` : null}
                        />
                    ))}
                </Feed>
            </div>
        </div>
            <Footer />
    </>
    );
}

export default Feeds;