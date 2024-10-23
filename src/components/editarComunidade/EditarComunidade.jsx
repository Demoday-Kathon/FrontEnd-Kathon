import EditarIcon from "../../assets/imgs/PencilFill.png";
import CancelIcon from "../../assets/imgs/XCircleFill.png";
import SaveIcon from "../../assets/imgs/CheckCircleFill.png";
import Download from "../../assets/imgs/Download.png";
import Styles from "./EditarComunidade.module.css";
import lapis from "../../assets/imgs/lapis.png";

function EditarComunidade() {
  return (
    <div className={Styles.ContainerEditar}>
      <div className={Styles.ContainerEditarSecondary}>
        <div className={Styles.Download}>
          <img src={Download} alt="Download" />
          <p>Carregar Imagem</p>
        </div>

        <div className={Styles.ContainerWritePrincipal}>
          <div className={Styles.ContainerWrite}>
            <div className={Styles.Write}>
              <img
                className={Styles.EditarIcon}
                src={EditarIcon}
                alt="Editar Ícone"
              />
              <p>#...</p>
            </div>
          </div>
        </div>
      </div>
      {/* MEIO DO COMPONENTE */}
      <div className={Styles.menuComp}>
        <div className={Styles.menuRosa}>
          <p>De que forma deseja a sua comunidade?</p>
        </div>
        <div className={Styles.menuAzul}>
          <p>Adicione uma descrição</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M24.1014 0.274487C23.9256 0.0987332 23.6872 0 23.4386 0C23.19 0 22.9516 0.0987332 22.7757 0.274487L19.6876 3.36261L26.6382 10.3132L29.7264 7.22699C29.8137 7.1399 29.8829 7.03645 29.9302 6.92255C29.9775 6.80865 30.0018 6.68655 30.0018 6.56324C30.0018 6.43992 29.9775 6.31782 29.9302 6.20392C29.8829 6.09003 29.8137 5.98657 29.7264 5.89949L24.1014 0.274487ZM25.3126 11.6389L18.362 4.68824L6.1745 16.8757H6.56262C6.81126 16.8757 7.04972 16.9745 7.22554 17.1503C7.40135 17.3261 7.50012 17.5646 7.50012 17.8132V18.7507H8.43762C8.68626 18.7507 8.92472 18.8495 9.10054 19.0253C9.27635 19.2011 9.37512 19.4396 9.37512 19.6882V20.6257H10.3126C10.5613 20.6257 10.7997 20.7245 10.9755 20.9003C11.1514 21.0761 11.2501 21.3146 11.2501 21.5632V22.5007H12.1876C12.4363 22.5007 12.6747 22.5995 12.8505 22.7753C13.0264 22.9511 13.1251 23.1896 13.1251 23.4382V23.8264L25.3126 11.6389ZM11.3101 25.6414C11.2707 25.5365 11.2503 25.4253 11.2501 25.3132V24.3757H10.3126C10.064 24.3757 9.82553 24.277 9.64971 24.1011C9.4739 23.9253 9.37512 23.6869 9.37512 23.4382V22.5007H8.43762C8.18898 22.5007 7.95053 22.402 7.77471 22.2261C7.5989 22.0503 7.50012 21.8119 7.50012 21.5632V20.6257H6.56262C6.31398 20.6257 6.07553 20.527 5.89971 20.3511C5.7239 20.1753 5.62512 19.9369 5.62512 19.6882V18.7507H4.68762C4.57554 18.7505 4.46441 18.7302 4.3595 18.6907L4.02387 19.0245C3.93453 19.1145 3.86437 19.2216 3.81762 19.3395L0.0676247 28.7145C-0.000570332 28.8849 -0.0172644 29.0715 0.0196121 29.2513C0.0564886 29.431 0.145314 29.596 0.275076 29.7258C0.404838 29.8555 0.569831 29.9444 0.749599 29.9812C0.929367 30.0181 1.116 30.0014 1.28637 29.9332L10.6614 26.1832C10.7792 26.1365 10.8864 26.0663 10.9764 25.977L11.3101 25.6414Z"
              fill="black"
            />
          </svg>
        </div>
        {/* FIM */}
      </div>
      {/* Começo do radio */}
      <div className={Styles.radioMenu}>
        <input type="radio" name="" id="" />
        <label htmlFor="" className={Styles.radios}>
          Pública
        </label>
        <br />

        <input type="radio" name="" id="" />
        <label htmlFor="" className={Styles.radios}>
          Apenas para convidados
        </label>
      </div>
      {/* Fim do radio */}
      <div className={Styles.ContainerButtom}>
        <div className={Styles.Cancelar}>
          <img
            className={Styles.ImageIcones}
            src={CancelIcon}
            alt="Cancelar Ícone"
          />
          <a href="">Cancelar</a>
        </div>

        <div className={Styles.Alterar}>
          <img
            className={Styles.ImageIcones}
            src={SaveIcon}
            alt="Salvar Ícone"
          />
          <a href="">Alterar</a>
        </div>
      </div>
    </div>
  );
}

export default EditarComunidade;
