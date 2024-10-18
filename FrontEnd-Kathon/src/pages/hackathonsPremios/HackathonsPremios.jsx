import Premios from '../../components/Prêmios/Prêmios'
import trofeu from '../../assets/imgs/trofeu.png'
import styles from '../hackathonsPremios/HackathonsPremios.module.css'

function premios (){

    return(

        <div className='container_premio'>
        <Premios img={trofeu} title='1 Lugar' context='Para todos os participantes da equipe:(até 5 pessoas)' desc_premios='- 1 Oculus Quest 2 Advanced All-in-One VR 128 GB (Branco)- 1 Accenture Cloud Fast Academy (1 semana, 100% remoto)- 4 encontros de mentoria com a Aliança Empreendedora (100% remoto)'/>
        </div>
    )
}

export default premios