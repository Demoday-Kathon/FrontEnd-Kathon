import Styles from './Perfil_empresa.module.css'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import CardEmpresa from '../../components/Perfil_empresa/CardEmpresa'

function Perfil_empresa(){
    return(
        <>
        <Header />
    <section className={Styles.Page}>
        <CardEmpresa />
    </section>
        <Footer />
    </>
    )
}

export default Perfil_empresa