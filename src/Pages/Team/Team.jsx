// Team.js
import React from 'react';
import MemberData from './Teammember'; // Import your Member data
import './Team.css'; // Import your CSS file
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function MemberCard({ member }) {
    const { img, name, role, social } = member;

    return (
        <div className="member-card">
            <div className="content">
                <div className="img">
                    <img src={img} alt={name} />
                </div>
                <div className="card-content">
                    <h3>
                        {name}
                        <br />
                        <span>{role}</span>
                    </h3>
                </div>
            </div>
            <ul className="social-icons">
                {social.map((link, index) => (
                    <li key={index} style={{ '--i': index + 1 }}>
                        <a className='icons-linkscolor' href={link} >
                            {link.includes('instagram') ? (
                                <FaInstagram />
                            ) : link.includes('linkedin') ? (
                                <FaLinkedin />
                            ) : (
                                <FaGithub />
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Team() {
    return (
        <div className="team-container">
            <div className="team-members">
                {MemberData.map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
}

export default Team;
