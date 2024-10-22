import Styles from './ComponenteFeed.module.css';
function Componentefeed({children, ContainerFeedR}){
    return(
        <div className={`${Styles.ContainerFeed}, {${ContainerFeedR}`}>
            {children}
        </div>
    )
}

export default Componentefeed;