import { useState } from "react";
import Styles from "../modalPublicacao/Publicacao.module.css";
import { useUser } from "../contexts/UserContext";
import menina from "../../assets/imgs/Joana.png";

function Publicacao({ closeModal, refreshFeed }) {
    const { user } = useUser();
    const [text, setText] = useState("");  
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    // Função para converter Base64 para Blob
    const base64ToBlob = (base64, mimeType) => {
        const byteString = atob(base64.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ua = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ua[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeType });
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            setImagePreview(URL.createObjectURL(selectedFile));
        } else {
            setImagePreview(null);
        }
    };

    function handlePublishClick() {
        if (!text) {
            alert("Por favor, escreva algo antes de publicar.");
            return;
        }

        if (!file) {
            alert("Por favor, selecione uma imagem antes de publicar.");
            return;
        }

        // Convertendo a imagem do usuário (Base64 para Blob)
        let userImageFile = null;
        if (user?.fotoPerfil) {
            userImageFile = base64ToBlob(user.fotoPerfil, 'image/jpeg');
        }

        // Cria o FormData para enviar a imagem do usuário e a imagem do post
        const formData = new FormData();
        formData.append("name", user?.name || "Usuário");
        formData.append("descricao", text);  // Salve a descrição como "descricao" no back-end
        if (file) {
            formData.append("imagemPost", file);
        }
        if (userImageFile) {
            formData.append("imagemPerfil", userImageFile, "userProfile.jpg");
        }

        fetch("https://backendfeed.kathon.tech/api/posts/criar", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(newPost => {
            console.log("Publicação realizada com sucesso:", newPost);
            setText("");
            setFile(null);
            setImagePreview(null);
            closeModal();
            if (refreshFeed) {
                refreshFeed(); 
            }
        })
        .catch(error => {
            console.error("Erro ao publicar:", error);
            alert("Erro ao publicar a postagem. Tente novamente.");
        });
    }

    return (
        <>
            <section className={Styles.cardPubli}>
                <div className={Styles.posthead}>
                    <img className={Styles.imgUser} src={"data:image/jpeg;base64," + user?.fotoPerfil || menina} alt="" />
                    <div className={Styles.publis}>
                        <input 
                            className={Styles.entradatxt} 
                            type="text" 
                            placeholder="Escreva algo..." 
                            maxLength={35} 
                            value={text}
                            onChange={handleTextChange}
                        />
                    </div>
                    <img 
                        className={Styles.imgPreview}
                        src={imagePreview || "data:image/jpeg;base64,defaultImageBase64"} 
                        alt={imagePreview ? "Imagem do post" : "Nenhuma imagem selecionada"} 
                    />
                </div>
                <div className={Styles.containerEscreva}>
                    <div className={Styles.escreva}>
                        <input 
                            id="file" 
                            type="file" 
                            style={{ display: "none" }} 
                            onChange={handleFileChange} 
                        />
                        <label className={Styles.labelfileinput} htmlFor="file">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_454_1172)">
                          <path
                            d="M0.00488281 7.5C0.00488281 6.17392 0.531667 4.90215 1.46935 3.96447C2.40703 3.02678 3.6788 2.5 5.00488 2.5H35.0049C36.331 2.5 37.6027 3.02678 38.5404 3.96447C39.4781 4.90215 40.0049 6.17392 40.0049 7.5V32.5C40.0049 33.8261 39.4781 35.0979 38.5404 36.0355C37.6027 36.9732 36.331 37.5 35.0049 37.5H5.00488C3.6788 37.5 2.40703 36.9732 1.46935 36.0355C0.531667 35.0979 0.00488281 33.8261 0.00488281 32.5V7.5ZM2.50488 30V32.5C2.50488 33.163 2.76828 33.7989 3.23712 34.2678C3.70596 34.7366 4.34184 35 5.00488 35H35.0049C35.6679 35 36.3038 34.7366 36.7726 34.2678C37.2415 33.7989 37.5049 33.163 37.5049 32.5V23.75L28.0624 18.8825C27.8279 18.7651 27.5625 18.7243 27.3036 18.766C27.0448 18.8078 26.8056 18.9298 26.6199 19.115L17.3449 28.39L10.6949 23.96C10.4548 23.8001 10.1668 23.7283 9.87973 23.7565C9.59267 23.7848 9.32422 23.9114 9.11988 24.115L2.50488 30ZM15.0049 13.75C15.0049 12.7554 14.6098 11.8016 13.9065 11.0983C13.2033 10.3951 12.2494 10 11.2549 10C10.2603 10 9.30649 10.3951 8.60323 11.0983C7.89997 11.8016 7.50488 12.7554 7.50488 13.75C7.50488 14.7446 7.89997 15.6984 8.60323 16.4017C9.30649 17.1049 10.2603 17.5 11.2549 17.5C12.2494 17.5 13.2033 17.1049 13.9065 16.4017C14.6098 15.6984 15.0049 14.7446 15.0049 13.75Z"
                            fill="white"
                            />
                        </g>
                        <defs>
                          <clipPath id="clip0_454_1172">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                            </svg>
                        </label>
                        <button 
                            className={Styles.botaoo} 
                            onClick={handlePublishClick}
                        >
                            Publicar
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Publicacao;
