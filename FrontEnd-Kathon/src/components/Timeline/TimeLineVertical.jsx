import React, { useEffect, useState } from 'react';
import '../../components/Timeline/TimelineVertical.css';
import iconClock from '../../assets/imgs/icones/clock.png'
import iconCalendar from '../../assets/imgs/icones/calendar.png'
import { IconBase } from 'react-icons/lib';

const TimelineVertical = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const maxScrollHeight = 2140;
  const delay = 1400;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      let progress = (scrollTop / documentHeight) * 100;

      if (scrollTop >= maxScrollHeight){
        progress = (maxScrollHeight / documentHeight) * 100;
      }

      setScrollProgress(progress);
    };

    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);


  return (
    <div className="timeline-container">
      <div className="progress-bar" style={{ height: `${scrollProgress}%` }}></div>

      <div className="timeline">

        <div className="event">
          <div className="event-content">
            <h3>Inicio das Inscrições</h3>
            <div className="icon-content">
              <img src={iconCalendar} alt="" srcset="" />
              <p>27 de setembro de 2024</p>
            </div>
            <div className="icon-content">
              <img src={iconClock} alt="" srcset="" />
              <p>09:00hrs ás 22:00hrs</p>
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-content">
            <h3>Inicio das Inscrições</h3>
            <div className="icon-content">
              <img src={iconCalendar} alt="" srcset="" />
              <p>27 de setembro de 2024</p>
            </div>
            <div className="icon-content">
              <img src={iconClock} alt="" srcset="" />
              <p>09:00hrs ás 22:00hrs</p>
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-content">
            <h3>Inicio das Inscrições</h3>
            <div className="icon-content">
              <img src={iconCalendar} alt="" srcset="" />
              <p>27 de setembro de 2024</p>
            </div>
            <div className="icon-content">
              <img src={iconClock} alt="" srcset="" />
              <p>09:00hrs ás 22:00hrs</p>
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-content">
            <h3>Inicio das Inscrições</h3>
            <div className="icon-content">
              <img src={iconCalendar} alt="" srcset="" />
              <p>27 de setembro de 2024</p>
            </div>
            <div className="icon-content">
              <img src={iconClock} alt="" srcset="" />
              <p>09:00hrs ás 22:00hrs</p>
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-content">
            <h3>Inicio das Inscrições</h3>
            <div className="icon-content">
              <img src={iconCalendar} alt="" srcset="" />
              <p>27 de setembro de 2024</p>
            </div>
            <div className="icon-content">
              <img src={iconClock} alt="" srcset="" />
              <p>09:00hrs ás 22:00hrs</p>
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-content">
            <h3>Inicio das Inscrições</h3>
            <div className="icon-content">
              <img src={iconCalendar} alt="" srcset="" />
              <p>27 de setembro de 2024</p>
            </div>
            <div className="icon-content">
              <img src={iconClock} alt="" srcset="" />
              <p>09:00hrs ás 22:00hrs</p>
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-content">
            <h3>Inicio das Inscrições</h3>
            <div className="icon-content">
              <img src={iconCalendar} alt="" srcset="" />
              <p>27 de setembro de 2024</p>
            </div>
            <div className="icon-content">
              <img src={iconClock} alt="" srcset="" />
              <p>09:00hrs ás 22:00hrs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineVertical;