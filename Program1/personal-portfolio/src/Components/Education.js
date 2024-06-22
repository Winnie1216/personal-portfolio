import { useState, useEffect } from "react"
import { TimelineItem } from "../Components/TimelineItem";

export const Education = () => {
    const educationData = [
        { date: '2018-2022', name: 'Jingdezhen Ceramic University', description: `Major:\u00A0\u00A0Visual Communication Design`, },
        {
            date: '2023.7-2023.12', name: 'Monash University', description: `Major:\u00A0\u00A0Business Information System(First Semester)`
        },
        { date: '2024.2', name: 'University Of Wollongong', description: `Major:\u00A0\u00A0Information Technology` },
    ];


    return (
        <section className='Education' id="education">
            <div className="heading">
                <div>Education</div>
            </div>
            <div className="timeline-items">
                {educationData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        date={item.date}
                        name={item.name}
                        description={item.description}
                    />
                ))}
            </div>
        </section>

    )


}