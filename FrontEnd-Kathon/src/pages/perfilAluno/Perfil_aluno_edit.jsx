import Styles from './Perfil_aluno_edit.module.css'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import CardPerfilEdit from '../../components/Perfil_aluno/CardPerfilEdit';

function Perfil_aluno_edit(){
    return(
        <>
            <Header />
        <section className={Styles.Page}>
            <CardPerfilEdit />
        </section>
            <Footer />
        </>
    )
}

export default Perfil_aluno_edit;