// Webteam.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Webteam.css';
const Webteam = ({ member }) => {
    return (
        <div className="first hero web-member-card" style={heroStyle}>
            {/* <div className='hero-description-bk' style={heroDescriptionBackgroundouter}> */}
            <div className="hero-description-bk" style={heroDescriptionBackground}></div>
            {/* </div> */}
            <img src={member.photo} alt={member.name} style={photoStyle} />
            <div className="hero-description" style={heroDescriptionStyle}>
                <div>
                    <h2 style={{ textAlign: "center" }}>{member.name}</h2>
                    <h2 style={{ textAlign: "center" }}>{member.surname}</h2>
                    <p style={{ textAlign: "center" }}>{member.designation}</p>
                    <div className="social-links webteam-icons">
                        <a href={member.linkedin} >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href={member.insta} >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
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
    border: '2px solid  rgba(255, 255, 255, 0.9)'
};

const heroDescriptionBackground = {
    // backgroundImage: 'linear-gradient(0deg , #3f5efb, #fc466b)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(4px)',
    borderRadius: '30px',
    position: 'absolute',
    top: '75%',
    left: '6px',
    height: '75%',
    width: '108%',
    transform: 'skew(19deg, -15deg)'
}

const heroDescriptionBackgroundouter = {
    // backgroundImage: 'linear-gradient(0deg , #3f5efb, #fc466b)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(4px)',
    border: '6px solid white',
    padding: '6px',
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
