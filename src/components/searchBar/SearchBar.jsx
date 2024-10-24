import Styles from '../../components/searchBar/Search.module.css'
import Lupa from '../../assets/imgs/icones/search.png'

function SearchBar(){
    return(
        <div className={Styles.container}>
            <div className={Styles.containerInput}>
                <input type="text" placeholder='Procurar Hackathon' className={Styles.input}/>
                <img src={Lupa} alt="barra de pesquisa" className={Styles.lupa}/>
            </div>
        </div>
    )
}

export default SearchBar