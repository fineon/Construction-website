import React from 'react'
import Image from 'next/image'
import { Nav, Button, Container } from 'react-bootstrap'
import Logo from './logo'

export default function Header() {
    return (
        <header className="container py-5 header">
            <Nav>
                <Logo/>
                <Nav.Link href="">Projects</Nav.Link>
                <Nav.Link href="">Services</Nav.Link>
                <Nav.Link href="">Blog</Nav.Link>
                <Nav.Link href="">News</Nav.Link>
            </Nav>

            <Container className='text-center'>
            <h1 className='my-5'>Your house should be called a home. Construction Crew is here to help</h1>
            <Button className='my-3'>Book A Consultation</Button>
            </Container>
            
        </header>
    )
}
