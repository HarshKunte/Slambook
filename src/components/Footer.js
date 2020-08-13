import React from 'react';
import linkedin from '../assets/icons/linkedin.png'
import github from '../assets/icons/github.png'
const Footer = () => {
    return (
        <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center bg-danger py-1 mt-5 footer">
            <label className='text-white pt-1'>Made by Harsh Kunte
                <a className='mx-2' href="https://www.linkedin.com/in/harshkunte"><img src={linkedin} alt="linkedin" /></a>
                <a className='mx-2' href="https://github.com/HarshKunte/"><img src={github} alt="linkedin" /></a>
            </label>
        </div>
    );
}

export default Footer;