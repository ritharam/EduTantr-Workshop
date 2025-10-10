import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import {FaStar, FaPlane, FaShieldAlt} from 'react-icons/fa';

const reasons = [
  { icon: <FaStar size={40} />, title: 'Trusted Service', desc: 'Years of excellence' },
  { icon: <FaPlane size={40} />, title: 'Flexible Itineraries', desc: 'Your pace, your way' },
  { icon: <FaShieldAlt size={40} />, title: 'Safety First', desc: 'Worry-free travel' },
];

const WhyChooseUs = () => {
  return (
    <Container id="why-us" className="py-5 bg-light">
        <h2 className='text-center mb-4'>Why Choose Us</h2>
        <Row>
            {reasons.map((r,i) => (
                <Col md={4} key={i} className='text-center mb-3'>
                    <div className='mb-2'>{r.icon}</div>
                    <h5>{r.title}</h5>
                    <p>{r.desc}</p>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default WhyChooseUs