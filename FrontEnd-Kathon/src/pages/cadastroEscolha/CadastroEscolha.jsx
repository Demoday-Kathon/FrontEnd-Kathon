import styles from './CadastroEscolha.module.css'

import Header from '../../components/layout/header/Header';
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase';
import CardBrancoBase from '../../components/CardBrancoBase/CardBrancoBase';

import Footer from '../../components/layout/footer/Footer';

function CadastroEscolha() {
    return (
        <>
            <Header />
            <CardPretoBase customClass="cardPretoForms">
                <h1 className={styles.tituloCadastroEscola}> Escolha seu tipo de conta </h1>
                <div className={styles.areaCardsBrancos}>
                    <CardBrancoBase customClass="cardBrancoEscolha">
                        Testando Card Branco

                    </CardBrancoBase>

                    <CardBrancoBase customClass="cardBrancoEscolha">
                        Testando Card Branco

                    </CardBrancoBase>

                </div>

            </CardPretoBase>
            <Footer /> 
        </>
    )
}

export default CadastroEscolha;