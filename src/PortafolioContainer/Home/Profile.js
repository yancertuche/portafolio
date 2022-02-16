import React from 'react';
import Typical from 'react-typical';

export default function Profile(){
    return(
        <div className = 'profile-container'>
            <div className='profile-parent'>
                <div className='profile-datails'>
                    <div className='colz'>
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
                                    "Ethusiastiv Dev 👾",
                                     1500,
                                     "Full Stack Developer 👨‍💻",
                                     1500,
                                     "Angular",
                                     1500,
                                     "React",
                                     1500,
                                     "Java ☕",
                                     1500
                                    ]}>
                            </Typical>
                        </h1>
                        <span className='profile-role-tagline'> Soy un programador</span>
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
        </div>
    )
}