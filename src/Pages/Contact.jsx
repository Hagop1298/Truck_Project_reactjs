import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            from_name: `${formData.firstName} ${formData.lastName}`,
            email_id: formData.email,
            message: formData.message,
        };

        emailjs.send('service_9tekiyu', 'template_ujxc3kq', templateParams, '8xdEm1j69SvFVjtJN')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email. Please try again.');
            });
        e.target.reset();
    };

    return (
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.1506790987937!2d146.9466085!3d-36.0654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b23e047d2a25aab%3A0x4b9cc410e1023c10!2sJETIS%20Truck%20Wreckers%20Albury!5e0!3m2!1sen!2sam!4v1728133328091!5m2!1sen!2sam"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <p className="text-center pt-5" style={{ color: "#184374", fontWeight: "700", fontSize: "40px", paddingBottom: "64px" }}>
                Contact Us
            </p>

            <div className="row container d-flex justify-content-between align-items-start">
                <div className="col-12 col-md-5">
                    <div className="list-unstyled pt-4" style={{ color: "#184374", fontWeight: "500", fontSize: "18px" }}>
                        <div className="mb-2">
                            <p style={{ fontSize: "30px", fontWeight: "700" }}>Jetis Pty Ltd</p>
                        </div>
                        <div className="mb-2">
                            <p style={{ fontWeight: "600", fontSize: "16px" }}>ABN  57 075 050 118</p>
                        </div>
                        <div className="mb-2 d-flex align-items-center">
                            <FaPhoneAlt className="me-2 text-red" />
                            <span>02 6075 9999</span>
                        </div>
                        <div className="mb-2 d-flex align-items-center">
                            <FaEnvelope className="me-2 text-red" />
                            <span>admin@jetis.com.au</span>
                        </div>
                        <div className="mb-2 d-flex align-items-center">
                            <FaMapMarkerAlt className="me-2 text-red" />
                            <span>83 Fallon ST, North Albury NSW 2640</span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <form onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-12 col-md-6 mb-3">
                                <input type="text"
                                       name="firstName"
                                       placeholder="First Name"
                                       required
                                       onChange={handleChange}
                                       className="form-control" />
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <input type="text"
                                       name="lastName"
                                       placeholder="Last Name"
                                       required
                                       onChange={handleChange}
                                       className="form-control" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <input type="email"
                                   className="form-control"
                                   name="email"
                                   placeholder="Example@gmail.com"
                                   required
                                   onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                name="message"
                                placeholder="Message"
                                required
                                onChange={handleChange} />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-danger btn-lg">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
