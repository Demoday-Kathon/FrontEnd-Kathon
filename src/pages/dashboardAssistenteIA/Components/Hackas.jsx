import './Hackas.css'
import { Link } from 'react-router-dom'

function Hackas({ logo, desc }){
    return(
        <div className="container">
            <div className="logo">
                <img src={logo} alt="" srcset="" />
                <Link to='/dashboardanalisegeral' className='btn-view'>Selecionar</Link>
            </div>
            <div className="desc">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Hackas