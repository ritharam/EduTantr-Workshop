import React from 'react'
import { Carousel, Container } from 'react-bootstrap'

const slider = [
  { quote: "Loved every moment!", author: "– Priya, Mumbai" },
  { quote: "Outstanding service", author: "– Rajesh, Delhi" },
  { quote: "A truly memorable trip", author: "– Sneha, Bangalore" },
];

const Testimonials = () => {
  return (
    <Container id="testimonials" className='py-5'>
        <h2 className='text-center mb-4'>Testimonials</h2>
        <Carousel indicators={false}>
            {slider.map((s,i) => (
                <Carousel.Item>
                    <p className='blockquote text-center'>{s.quote}</p>
                    <p className='text-center text-muted'>{s.author}</p>
                </Carousel.Item>
            ))}
        </Carousel>
    </Container>    
  )
}

export default Testimonials