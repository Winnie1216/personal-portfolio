import { Container, Row, Col, Form } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg'
import { memo, useState } from 'react'

export const Contact = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})


    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonText('Sending...')
        let response = await fetch("http://localhost:5000/contact",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(formDetails)
            })

        setButtonText('Send')
        let result = await response.json()
        setFormDetails(formInitialDetails)
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully' })

        } else {
            setStatus({ success: false, message: "Something went wrong, please try again later." })
        }

    }






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
                                    <input type='text' placeholder='FirstName' value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
                                </Col>
                                <Col size={12} md={6} sm={6} className="px-1">
                                    <input type='text' placeholder='LastName' value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} ></input>
                                </Col>
                                <Col size={12} md={6} sm={6} className="px-1">
                                    <input type='text' placeholder='Email Address' value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} ></input>
                                </Col>
                                <Col size={12} md={6} sm={6} className="px-1">
                                    <input type='text' placeholder='Phone Number' value={formDetails.phoneNumber} onChange={(e) => onFormUpdate('phoneNumber', e.target.value)} ></input>
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