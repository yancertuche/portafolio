import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile(){
    return(
        <div className = 'profile-container'>
            <div className='profile-parent'>
                <div className='profile-datails'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/YanCarlosCertuche/'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://github.com/yancertuche'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://www.instagram.com/yancarlos.cg/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://twitter.com/YanCertuche'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'>YAN </span> 
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical loop={Infinity}
                                steps ={[
                                    "Enthusiastic Dev 👾",
                                     1800,
                                     "Full Stack Developer 👨‍💻",
                                     1800,
                                     "Angular 😎",
                                     1800,
                                     "React 😃",
                                     1800,
                                     "Java ☕",
                                     1800
                                    ]}>
                            </Typical>
                        </h1>
                        <span className='profile-role-tagline'>
                            I'm always looking for add value on my role so I keep learning and unlearnig to improve my skills
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {" "}Hire Me{" "}
                    </button>
                    <a href='YanCertucheCV.pdf' download='YanCertuche.pdf'>
                        <button className='btn highlighted-btn'>
                            {" "}Get Resume{" "}
                        </button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                    <div className='profile-picture-background'>

                    </div>
            </div>
        </div>
    )
}