import Styles from './Perfil_empresa_edit.module.css'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import CardEmpresa_edit from '../../components/Perfil_empresa/CardEmpresa_edit'

function Perfil_empresa_edit(){
    return(
        <>
        <Header />
    <section className={Styles.Page}>
        <CardEmpresa_edit  TextoDesc="aa"/>
    </section>
        <Footer />
    </>
    )
}

export default Perfil_empresa_edit