import React from "react";
import "./About.css";


import stephenPhoto from "../assets/teammembers/stephen.jpg"; // Create src/assets/stephen.jpg
import editor1Photo from "../assets/teammembers/stephen.jpg"; // Create src/assets/editor1.jpg
import editor2Photo from "../assets/teammembers/stephen.jpg"; // Create src/assets/editor2.jpg

const About = () => {
    const team = [
        {
            name: "Stephen Okoro",
            role: "Founder & Lead Photographer",
            bio: "With over a decade of experience, Stephen is the visionary behind StephenVisual, bringing passion and creativity to every project. He specializes in capturing authentic moments and leading the creative direction.",
            photo: stephenPhoto
        },
        {
            name: "Chinedu Eze",
            role: "Senior Photo Editor",
            bio: "Chinedu is a master of post-production, ensuring every photo is meticulously retouched and perfectly color-graded. His attention to detail is unparalleled.",
            photo: editor1Photo
        },
        {
            name: "Funke Alabi",
            role: "Event Photographer & Editor",
            bio: "Funke brings a vibrant energy to event coverage and a keen eye for storytelling in her editing. She ensures every client's story is told beautifully.",
            photo: editor2Photo
        }
    ];

    return (
        <section className="about-section">
            <h2>About StephenVisual</h2>
            <p
                style={{
                    textAlign: "center",
                    maxWidth: "800px",
                    margin: "0 auto 2rem"
                }}
            >
                StephenVisual is a leading photo editing and event coverage
                brand based in Nigeria, dedicated to creating stunning visuals
                and preserving precious memories. Founded by Stephen Okoro, our
                mission is to deliver excellence in every frame.
            </p>

            <h3>Our Philosophy</h3>
            <p
                style={{
                    textAlign: "center",
                    maxWidth: "800px",
                    margin: "0 auto 2rem"
                }}
            >
                We believe that every moment holds a unique story, and it's our
                privilege to tell that story through compelling imagery. Our
                approach combines artistic vision with technical precision,
                ensuring each client receives a personalized and unforgettable
                visual experience.
            </p>

            <h3>Meet the Team</h3>
            <div className="team-members">
                {team.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.photo} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p className="role">{member.role}</p>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
