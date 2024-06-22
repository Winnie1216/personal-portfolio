import React from "react";
export const TimelineItem = ({ date, name, description }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-dot">
                <div className="timeline-date">{date}</div>
            </div>
            <div className="timeline-content">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}