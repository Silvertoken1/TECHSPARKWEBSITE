import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleForm = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/api/send-email', formData);

            if (response.data.success) {
                toast.success("Thanks For Your Message! We'll get back to you soon.");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                event.target.reset();
            } else {
                throw new Error(response.data.message || 'Failed to send message');
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || 'Something went wrong. Please try again later.';
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="contact-form-style-one">
                <h4 className="sub-title">Have Questions?</h4>
                <h2 className="title">Send us a Message</h2>
                <form className="contact-form contact-form" onSubmit={handleForm}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input 
                                    className="form-control" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Name" 
                                    type="text" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete='off' 
                                    required 
                                />
                                <span className="alert-error"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input 
                                    className="form-control" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email*" 
                                    type="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete='off' 
                                    required 
                                />
                                <span className="alert-error"></span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input 
                                    className="form-control no-arrows" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="Phone" 
                                    type="number" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    autoComplete='off' 
                                    required 
                                />
                                <span className="alert-error"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group comments">
                                <textarea 
                                    className="form-control" 
                                    id="message" 
                                    name="message" 
                                    placeholder="Message *" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    autoComplete='off' 
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    {error && (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        <div className="col-lg-12">
                            <button 
                                type="submit" 
                                name="submit" 
                                id="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <i className="fa fa-spinner fa-spin"></i> Sending...
                                    </>
                                ) : (
                                    <>
                                        <i className="fa fa-paper-plane"></i> Get in Touch
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-12 alert-notification">
                        <div id="message" className="alert-msg"></div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;