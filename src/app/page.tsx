"use client";

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState([true, false, false]);
  const [barPosition, setBarPosition] = useState('0%');
  const [color1, setColor1] = useState('#373737'); // main color for side content
  const [color2, setColor2] = useState('#919090'); // secondary color for side content when hovered

  const onScroll = (event:any) => {
    if (window.scrollY >= 0 && window.scrollY <= 319) {
      setIsItemSelected([true, false, false]);
      setBarPosition('0%');
    }
    if (window.scrollY >= 320 && window.scrollY < 606) {
      setIsItemSelected([false, true, false]);
      setBarPosition('30%');
    }
    if (window.scrollY < 803 && window.scrollY >= 606) {
      setIsItemSelected([false, false, true]);
      setBarPosition('62%');
    }    
  }

  // explicitly set the css for light mode to make website compatible with dark mode on mobile
  useEffect(() => {
    if (isDarkMode) {
      setColor1('#ffffff');
      setColor2('#919090');
      document.querySelector('body')?.classList.remove('light-container');
      document.querySelector('body')?.classList.add('dark-container');
    } else {
      setColor1('#373737');
      setColor2('#919090');
      document.querySelector('body')?.classList.remove('dark-container');
      document.querySelector('body')?.classList.add('light-container');
    }
  }, [isDarkMode])

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, [])
  

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  const handleClick = (e:any) => {
    if (e == 0) {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth'});
    }
    if (e == 1) {
      window.scrollTo({ left: 0, top: 320, behavior: 'smooth'});
    }
    if (e == 2) {
      window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth'});
    }
  }

  return (
    <div className={"container"}>
      <div className="nav">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
          moonColor={'white'}
        />
        <div className={`vline-break ${isDarkMode ? 'dark-line' : ''}`}></div>
        <a href='/portfolio/Michael-Cordero-Resume.pdf' className={`resume ${isDarkMode ? 'dark' : 'light'}`}>Resume</a>
      </div>
      <div className="left"></div>
      <div className="main">
        <Image 
          src="/portfolio/profile-pic.jpeg"
          className="profile-pic"
          width={200}
          height={200}
          alt='profile'
        />
        <div className={`profile-name ${isDarkMode ? 'dark-header' : ''}`}>Michael Cordero</div>
        <div>
          <a href="https://github.com/michaelgcord">
            <Image 
              src={isDarkMode ? '/portfolio/github-white.png' : '/portfolio/github.png'} 
              width={42}
              height={42}
              alt="github" 
            />
          </a>
          <a href="https://www.linkedin.com/in/michael-cordero-213b0a202/">
            <Image 
              className="linkedin-icon" 
              src={isDarkMode ? '/portfolio/linkedin-white.png' : '/portfolio/linkedin.png'} 
              width={32}
              height={32}
              alt="linkedin" 
            />
          </a>
        </div>
        <div className={`line-break ${isDarkMode ? 'dark-line' : ''}`}></div>
        <div className={`header ${isDarkMode ? 'dark-header' : ''}`}>Hello, my name is</div>
        <div className={`body ${isDarkMode ? 'dark' : 'light'}`}>
          <span className={isDarkMode ? 'michael-dark' : 'michael-light'}>Michael Cordero</span>
          . I’m a software engineer located in the bay area. Currently, I am 
          looking for opportunities to build and grow my skill set in full stack engineering. 
          Previously, I was building solutions at <span className={isDarkMode ? 'highlight-dark' : 'highlight-light'}><a href="https://www.care.coach/">care.coach</a></span> to 
          enrich the health and livelihood of clients by advancing the technology of digital healthcare.
        </div>
        <div className={`line-break ${isDarkMode ? 'dark-line' : ''}`}></div>
        <div className={`header ${isDarkMode ? 'dark-header' : ''}`}>Experience</div>
        <div className={`work-item ${isDarkMode ? 'dark' : 'light'}`}>
          <div className="date">Aug 2021 — Oct 2022</div>
          <div className="item">
            <div className="work-header">Software Engineer @ <span className={isDarkMode ? 'highlight-dark' : 'highlight-light'}><a href="https://www.care.coach/">care.coach</a></span></div>
            <div className={`work-body ${isDarkMode ? 'dark' : 'light'}`}>
              Developed highly robust code to improve UI and UX of system dashboard and 
              refactor legacy code to React. Designed and built a web application to demo
              care.coach's latest machine learning AI project—FARA. Worked on a multitude
              of projects focused on research and development to achieve company objectives.
            </div>
            <div className="work-footer">React Javascript Django MySQL</div>
          </div>
        </div>
        <div className={`work-item ${isDarkMode ? 'dark' : 'light'}`}>
          <div className="date">Sep 2019 — Apr 2020</div>
          <div className="item">
            <div className="work-header">Computer Engineer Intern @ <span className={isDarkMode ? 'highlight-dark' : 'highlight-light'}><a href="https://ece.ucdavis.edu/">UC Davis Computer Engineering Depart.</a></span></div>
            <div className={`work-body ${isDarkMode ? 'dark' : 'light'}`}>
              Collaborated with a team of student engineers to build a mini automatic racecar to
              compete at the annual UC Davis NATCAR competition — from designing the pcb, to 
              assembling the car, to writing the algorithm.
            </div>
            <div className="work-footer">Altium Robotics Python</div>
          </div>
        </div>
        <div className={`work-item ${isDarkMode ? 'dark' : 'light'}`}>
          <div className="date">May 2019 — Aug 2020</div>
          <div className="item">
            <div className="work-header">Software Engineer Intern @ <span className={isDarkMode ? 'highlight-dark' : 'highlight-light'}><a href="https://bae.ucdavis.edu/">UC Davis Biological Engineering Depart.</a></span></div>
            <div className={`work-body ${isDarkMode ? 'dark' : 'light'}`}>
              Helped improve the local farms at UC Davis by designing and coding an algorithmic 
              irrigation system that would automatically water crops based on their criteria, and 
              presented the prototype at the annual engineering showcase event.
            </div>
            <div className="work-footer">Python RasberryPi</div>
          </div>
        </div>
        <div className={`line-break ${isDarkMode ? 'dark-line' : ''}`}></div>
        <div className={`header ${isDarkMode ? 'dark-header' : ''}`}>Projects</div>
        <div className="project-container">
          <a href="https://github.com/michaelgcord/kigen-next" className={`card ${isDarkMode ? 'dark-card' : ''}`}>
            <div className={`card-content ${isDarkMode ? 'dark' : 'light'}`}>
              <div className={`card-header ${isDarkMode ? 'dark' : 'light'}`}>Kigen</div>
              <div className="card-body">
                A search engine that crafts a randomized list of anime based on
                selected genre.
              </div>
              <div className="card-footer">
                Next.js React.js Kitsu API
              </div>
            </div>
            <div className='card-photo'>
              <Image
                src="/portfolio/kigen-next.png" 
                alt="kigen"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}                 
              />
            </div>
          </a>
          <a href="https://github.com/michaelgcord/dailyjournal" className={`card ${isDarkMode ? 'dark-card' : ''}`}>
            <div className={`card-content ${isDarkMode ? 'dark' : 'light'}`}>
                <div className={`card-header ${isDarkMode ? 'dark' : 'light'}`}>Daily Journal</div>
                <div className="card-body">
                  My first full stack project that let's users journal about their daily lives.
                </div>
                <div className="card-footer">
                  Javascript Express.js MySQL
                </div>
              </div>
              <div className='card-photo'>
                <Image 
                  src="/portfolio/dailyjournal.png" 
                  alt="dailyjournal"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '138px' }}                   
                />          
              </div>              
          </a>          
          <a href="https://github.com/michaelgcord/chatapp-next" className={`card ${isDarkMode ? 'dark-card' : ''}`}>
            <div className={`card-content ${isDarkMode ? 'dark' : 'light'}`}>
                <div className={`card-header ${isDarkMode ? 'dark' : 'light'}`}>Chatbox</div>
                <div className="card-body">
                  A simple chat app to interact with other users across the web.
                </div>
                <div className="card-footer">
                  Next.js React.js WebSocket
                </div>
              </div>
              <div className='card-photo'>
                <Image 
                  src="/portfolio/chatapp-next.png" 
                  alt="chatapp"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}                   
                />          
              </div>              
          </a>
          <a href="https://michaelgcord.github.io/connect-4/" className={`card ${isDarkMode ? 'dark-card' : ''}`}>
            <div className={`card-content ${isDarkMode ? 'dark' : 'light'}`}>
              <div className={`card-header ${isDarkMode ? 'dark' : 'light'}`}>Connect 4</div>
              <div className="card-body">
                My first web app ever - coding one of favorite childhood board games.
              </div>
              <div className="card-footer">
                HTML CSS Javascript
              </div>
            </div>
            <div className='card-photo'>
              <Image
                src="/portfolio/connect4.png" 
                alt="connect-4"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} 
              />
            </div>
          </a>
        </div>
        <div className="spacer"></div>
      </div>
      <div className="right">
        <div className="side-container">
          <div className={`v-line ${isDarkMode ? 'dark-line' : ''}`}>
            <div className="v-line-top" style={{top: barPosition}}></div>
          </div>
          <div className="side-content">
            <div
              className="side-item" 
              onClick={() => {handleClick(0)}}
              style={{color: isItemSelected[0] ? color1 : color2}}
            >
              Hello, my name is
            </div>
            <div 
              className="side-item" 
              onClick={() => {handleClick(1)}}
              style={{color: isItemSelected[1] ? color1 : color2}}
            >
              Experience
            </div>
            <div 
              className="side-item" 
              onClick={() => {handleClick(2)}}
              style={{color: isItemSelected[2] ? color1 : color2}}
            >
              Projects
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Home;