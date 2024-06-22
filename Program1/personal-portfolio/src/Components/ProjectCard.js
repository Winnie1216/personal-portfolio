import { Col } from "react-bootstrap";

import { useState } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Col size={12} sm={6} md={4}>
            <div
                className="proj-imgbx"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    {isHovered && (
                        <a href={link} className="arrow-icon">
                            <ArrowRightCircle size={25} />
                        </a>
                    )}
                </div>
            </div>
        </Col>
    )
}
