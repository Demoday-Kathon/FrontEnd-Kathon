import Styles from '../hackathonsCalendarioInterno/HackCalendarioInterno.module.css'
import IconTempo from '../../assets/imgs/backgrounds/iconTempo.png'
import HeaderInterno from '../../components/layout/headerInterno/HeaderInterno'
import Footer from '../../components/layout/footer/Footer'
import TimelineVertical from '../../components/Timeline/TimeLineVertical'
import {React, useEffect, useState} from "react";
import HeaderMobile from "../../components/HeaderFeedInterno/HeaderFeedInterno";

function HackCalendario(){

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 868px)");
      const handleMediaQueryChange = (e) => setIsMobile(e.matches);
  
      handleMediaQueryChange(mediaQuery);
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    return(
        <>
            {isMobile? <HeaderMobile /> : <HeaderInterno />}
                <div className={Styles.container}>
                    <div className={Styles.content}>
                        <div className="navBar">
                        </div>
                        <div className={Styles.titulo}>
                            < img src={IconTempo} alt="icone de ampulheta"/>
                            <h1>Linha do tempo</h1>
                        </div>
                        <div className={Styles.timeline}>
                            <TimelineVertical />
                        </div>
                    </div>
                </div> 
            <Footer />
        </>
    ) 
}

export default HackCalendario

