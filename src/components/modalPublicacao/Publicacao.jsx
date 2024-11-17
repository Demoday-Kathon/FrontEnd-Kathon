import { useState } from "react";
import Styles from "../modalPublicacao/Publicacao.module.css";
import { useUser } from "../contexts/UserContext";
import menina from "../../assets/imgs/Joana.png";

function Publicacao({ closeModal, refreshFeed }) {
    const { user } = useUser();
    const [text, setText] = useState("");  
    const [file, setFile] = useState(null); 

    const handleTextChange = (event) => {
      setText(event.target.value);
  };

  const handleFileChange = (event) => {
      setFile(event.target.files[0]);
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

      const formData = new FormData();
      formData.append("idJovem", user.id);
      formData.append("descricao", text);
      if (file) {
          formData.append("imagemPost", file);
      }

      fetch("https://backend-kathon.onrender.com/api/posts/criar", {
          method: "POST",
          body: formData,
      })
      .then(response => response.json())
      .then(newPost => {
          console.log("Publicação realizada com sucesso:", newPost);
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
                    <img src={"data:image/jpeg;base64," + user?.fotoPerfil || menina} alt="" />
                    <p>{"@" + user.nomeCompleto}</p>
                </div>
                <div className={Styles.publis}>
                    <input 
                        className={Styles.entradatxt} 
                        type="text" 
                        placeholder="Escreva algo..." 
                        maxLength={10} 
                        value={text}
                        onChange={handleTextChange}
                    />
                </div>
                <div className={Styles.containerEscreva}>
                    <div className={Styles.escreva}>
                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_454_1166)">
                          <path
                            d="M20.5 38.4375C15.7427 38.4375 11.1802 36.5477 7.81627 33.1837C4.45234 29.8198 2.5625 25.2573 2.5625 20.5C2.5625 15.7427 4.45234 11.1802 7.81627 7.81627C11.1802 4.45234 15.7427 2.5625 20.5 2.5625C25.2573 2.5625 29.8198 4.45234 33.1837 7.81627C36.5477 11.1802 38.4375 15.7427 38.4375 20.5C38.4375 25.2573 36.5477 29.8198 33.1837 33.1837C29.8198 36.5477 25.2573 38.4375 20.5 38.4375ZM20.5 41C25.9369 41 31.1512 38.8402 34.9957 34.9957C38.8402 31.1512 41 25.9369 41 20.5C41 15.0631 38.8402 9.84881 34.9957 6.00431C31.1512 2.15982 25.9369 0 20.5 0C15.0631 0 9.84881 2.15982 6.00431 6.00431C2.15982 9.84881 0 15.0631 0 20.5C0 25.9369 2.15982 31.1512 6.00431 34.9957C9.84881 38.8402 15.0631 41 20.5 41Z"
                            fill="white"
                          />
                          <path
                            d="M31.5986 24.3438C31.8236 24.7333 31.942 25.1752 31.942 25.625C31.942 26.0748 31.8236 26.5167 31.5986 26.9062C30.4739 28.8543 28.8562 30.472 26.908 31.5965C24.9598 32.7211 22.7499 33.3129 20.5005 33.3125C18.2515 33.3124 16.0421 32.7204 14.0944 31.5959C12.1467 30.4713 10.5293 28.8539 9.40483 26.9062C9.18004 26.5169 9.06164 26.0752 9.06152 25.6257C9.06141 25.1761 9.17958 24.7344 9.40418 24.3449C9.62877 23.9554 9.95188 23.6319 10.3411 23.4068C10.7303 23.1817 11.1718 23.063 11.6214 23.0625H29.3795C29.8293 23.0625 30.2712 23.1809 30.6607 23.4058C31.0503 23.6307 31.3737 23.9542 31.5986 24.3438ZM17.938 16.6562C17.938 18.778 16.79 16.6562 15.3755 16.6562C13.961 16.6562 12.813 18.778 12.813 16.6562C12.813 14.5345 13.961 12.8125 15.3755 12.8125C16.79 12.8125 17.938 14.5345 17.938 16.6562ZM28.188 16.6562C28.188 18.778 27.04 16.6562 25.6255 16.6562C24.211 16.6562 23.063 18.778 23.063 16.6562C23.063 14.5345 24.211 12.8125 25.6255 12.8125C27.04 12.8125 28.188 14.5345 28.188 16.6562Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_454_1166">
                            <rect width="41" height="41" fill="white" />
                          </clipPath>
                        </defs>
                        </svg>
                        
                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                        >
                            <path
                            d="M2.5625 35.875C2.5625 35.875 0 35.875 0 33.3125C0 30.75 2.5625 23.0625 15.375 23.0625C28.1875 23.0625 30.75 30.75 30.75 33.3125C30.75 35.875 28.1875 35.875 28.1875 35.875H2.5625ZM15.375 20.5C17.4139 20.5 19.3692 19.6901 20.8109 18.2484C22.2526 16.8067 23.0625 14.8514 23.0625 12.8125C23.0625 10.7736 22.2526 8.8183 20.8109 7.37662C19.3692 5.93493 17.4139 5.125 15.375 5.125C13.3361 5.125 11.3808 5.93493 9.93912 7.37662C8.49743 8.8183 7.6875 10.7736 7.6875 12.8125C7.6875 14.8514 8.49743 16.8067 9.93912 18.2484C11.3808 19.6901 13.3361 20.5 15.375 20.5Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M34.5938 12.8125C34.9336 12.8125 35.2595 12.9475 35.4997 13.1878C35.74 13.4281 35.875 13.7539 35.875 14.0938V17.9375H39.7188C40.0586 17.9375 40.3845 18.0725 40.6247 18.3128C40.865 18.5531 41 18.8789 41 19.2188C41 19.5586 40.865 19.8844 40.6247 20.1247C40.3845 20.365 40.0586 20.5 39.7188 20.5H35.875V24.3438C35.875 24.6836 35.74 25.0095 35.4997 25.2497C35.2595 25.49 34.9336 25.625 34.5938 25.625C34.2539 25.625 33.928 25.49 33.6878 25.2497C33.4475 25.0095 33.3125 24.6836 33.3125 24.3438V20.5H29.4688C29.1289 20.5 28.803 20.365 28.5628 20.1247C28.3225 19.8844 28.1875 19.5586 28.1875 19.2188C28.1875 18.8789 28.3225 18.5531 28.5628 18.3128C28.803 18.0725 29.1289 17.9375 29.4688 17.9375H33.3125V14.0938C33.3125 13.7539 33.4475 13.4281 33.6878 13.1878C33.928 12.9475 34.2539 12.8125 34.5938 12.8125Z"
                            fill="white"
                          />
                        </svg>
                        
                        
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
                    </div>
                </div>
                
               
                <button 
                    className={Styles.botaoo} 
                    onClick={handlePublishClick}
                >
                    Publicar
                </button>
            </section>
        </>
    );
}

export default Publicacao;