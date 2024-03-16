// Webteam.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Webteam.css';
const Webteam = ({ member }) => {
    return (
        <div className="first hero" style={heroStyle}>
            <div className="hero-description-bk" style={heroDescriptionBackground}></div>
            <img src={member.photo} alt={member.name} style={photoStyle} />
            <div className="hero-description" style={heroDescriptionStyle}>
                <h2>{member.name}</h2>
                <h2>{member.surname}</h2>
                <p>{member.designation}</p>
                <div className="social-links">
                    <a href={member.linkedin} >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={member.insta} >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

        </div>
    );
};

const heroStyle = {
    display: 'inline-block',
    position: 'relative',
    width: '400px',
    minWidth: '400px',
    height: '400px',
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: '5px 5px 30px rgba(0, 0, 0, 0.3)',
    margin: '30px',
    border: '2px solid white'
};

const heroDescriptionBackground = {
    backgroundImage: 'linear-gradient(0deg , #3f5efb, #fc466b)',
    borderRadius: '30px',
    position: 'absolute',
    top: '75%',
    left: '6px',
    height: '75%',
    width: '108%',
    transform: 'skew(19deg, -15deg)'
}


const photoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '30px'
};

const heroDescriptionStyle = {
    position: 'absolute',
    color: '#fff',
    fontWeight: '500',
    left: '70%',
    // transform: 'translateX(-50%)',
    bottom: '10%',
    // textAlign: 'center',
    fontSize: '1.2rem',
};


export default Webteam;
