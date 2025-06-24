import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    };

    return (
        <section className="contact-section">
            <h2>Get in Touch</h2>
            <p
                style={{
                    textAlign: "center",
                    maxWidth: "600px",
                    margin: "0 auto 2rem"
                }}
            >
                Have a question or want to discuss your next project? We'd love
                to hear from you!
            </p>

            <div className="contact-info">
                <p>
                    <strong>Email:</strong> info@stephenvisual.com
                </p>
                <p>
                    <strong>Phone:</strong> +234 80X XXX XXXX (Replace with your
                    actual number)
                </p>
                <p>
                    <strong>Location:</strong> Abuja, Nigeria
                </p>
                <p>
                    <strong>Business Hours:</strong> Mon - Sat: 9:00 AM - 6:00
                    PM WAT
                </p>
            </div>

            <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Your Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Your Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
