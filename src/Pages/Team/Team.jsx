// Team.js
import React from 'react';
import Events from '../../assets/Data/EventsData.js' // Import your Member data

import './Team.css'; // Import your CSS file
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function MemberCard({ member }) {
    const { imgsrc, name, role, social } = member;


    return (
        <div className="member-card">
            <div className="content">
                <div className="img">
                    <img src={imgsrc} />
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

function Team({ id }) {
    const team = Events[id].OrgTeam;


    return (
        <div className="team-container">


            <div className="team-members">
                {team.map((member, memberIndex) => (
                    <MemberCard key={memberIndex} member={member} />
                ))}
            </div>

        </div>
    );
}

export default Team;
