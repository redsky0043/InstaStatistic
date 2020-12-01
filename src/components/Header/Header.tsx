import React from 'react';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook.svg';
import './Header.scss';

export const Header:React.FC = () => {
    return (
        <div className="header">
            <a className="header__logo" href="#" >
                <h3 className="header__text">
                    Insta<span className="header__text-wrapper">Statistic</span>
                </h3>
            </a>
            <ul className="header__contacts">
                <li className="social-item">
                    <a className="social-link" href="#" target="_blank" >
                        <img className="social-img" src={github} alt="social" />
                    </a>
                </li>
                <li className="social-item">
                    <a className="social-link" href="#" target="_blank" >
                        <img className="social-img" src={linkedin} alt="social" />
                    </a>
                </li>
                <li className="social-item">
                    <a className="social-link" href="#" target="_blank" >
                        <img className="social-img" src={instagram} alt="social" />
                    </a>
                </li>
                <li className="social-item">
                    <a className="social-link" href="#" target="_blank" >
                        <img className="social-img" src={facebook} alt="social" />
                    </a>
                </li>
            </ul>
        </div>
    );
}
