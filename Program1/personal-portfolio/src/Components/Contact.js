// import { Container, Row, Col, Form } from 'react-bootstrap';
// import contactImg from '../assets/img/contact-img.svg'
// import { memo, useState } from 'react'

// export const Contact = () => {

//     const formInitialDetails = {
//         firstName: '',
//         lastName: '',
//         email: '',
//         phoneNumber: '',
//         message: ''
//     }
//     const [formDetails, setFormDetails] = useState(formInitialDetails)
//     const [buttonText, setButtonText] = useState('Send')
//     const [status, setStatus] = useState({})


//     const onFormUpdate = (category, value) => {
//         setFormDetails({
//             ...formDetails,
//             [category]: value
//         })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setButtonText('Sending...');

//         // 模拟发送请求，这里可以略过真正的网络请求部分
//         setTimeout(() => {
//             setFormDetails(formInitialDetails);
//             setStatus({ success: true, message: 'Message sent successfully' });
//             setButtonText('Send');
//         }, 1000); // 模拟请求成功后的清空表单和状态更新
//     };




//     return (
//         <section id="connect" className="contact">
//             <Container>
//                 <Row className="align-items-center">
//                     <Col size={12} md={6}>
//                         <img src={contactImg} alt='contactImg'></img>
//                     </Col>
//                     <Col size={12} md={6}>
//                         <h2>Get In Touch</h2>
//                         <Form onSubmit={handleSubmit}>
//                             <Row>
//                                 <Col size={12} md={6} sm={6} className="px-1">
//                                     <input type='text' placeholder='FirstName' value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
//                                 </Col>
//                                 <Col size={12} md={6} sm={6} className="px-1">
//                                     <input type='text' placeholder='LastName' value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} ></input>
//                                 </Col>
//                                 <Col size={12} md={6} sm={6} className="px-1">
//                                     <input type='text' placeholder='Email Address' value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} ></input>
//                                 </Col>
//                                 <Col size={12} md={6} sm={6} className="px-1">
//                                     <input type='text' placeholder='Phone Number' value={formDetails.phoneNumber} onChange={(e) => onFormUpdate('phoneNumber', e.target.value)} ></input>
//                                 </Col>
//                                 <Col size={12} className="px-1">
//                                     <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
//                                     <button type='submit'><span>{buttonText}</span></button>
//                                 </Col>
//                                 {status.message &&
//                                     <Col>
//                                         <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
//                                     </Col>
//                                 }
//                             </Row>
//                         </Form>
//                     </Col>
//                 </Row>

//             </Container>
//         </section>
//     )
// }
import { Container, Row, Col, Form } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import { useState } from 'react';

export const Contact = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const validateEmail = (email) => {
        // Basic email validation using regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate inputs
        if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !validateEmail(formDetails.email)) {
            setStatus({ success: false, message: 'Please fill out all required fields correctly.' });
            return;
        }

        setButtonText('Sending...');

        // Simulate sending request (replace with actual fetch call)
        setTimeout(() => {
            setFormDetails(formInitialDetails);
            setStatus({ success: true, message: 'Message sent successfully' });
            setButtonText('Send');
        }, 1000); // Simulated success delay
    };

    return (
        <section id="connect" className="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={contactImg} alt='contactImg'></img>
                    </Col>
                    <Col size={12} md={6}>
                        <h2>Get In Touch</h2>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} md={6} sm={6} className="px-1">
                                    <input type='text' placeholder='FirstName' value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)} required></input>
                                </Col>
                                <Col size={12} md={6} sm={6} className="px-1">
                                    <input type='text' placeholder='LastName' value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} required ></input>
                                </Col>
                                <Col size={12} md={6} sm={6} className="px-1">
                                    <input type='email' placeholder='Email Address' value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} required></input>
                                </Col>
                                <Col size={12} md={6} sm={6} className="px-1">
                                    <input type='text' placeholder='Phone Number' value={formDetails.phoneNumber} onChange={(e) => onFormUpdate('phoneNumber', e.target.value)}></input>
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
