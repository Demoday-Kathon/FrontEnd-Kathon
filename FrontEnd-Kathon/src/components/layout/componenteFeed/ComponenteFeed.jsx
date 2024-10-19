import Styles from './ComponenteFeed.module.css';
function Componentefeed({children}){
    return(
        <div className={Styles.ContainerFeed}>
            {children}
        </div>
    )
}

export default Componentefeed;