import React from 'react';

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
                            
                        </h1>
                    </span>
                </div>
            </div>
        </div>
    )
}