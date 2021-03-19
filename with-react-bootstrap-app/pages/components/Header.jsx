import React from 'react'
import Image from 'next/image'
import { Nav, Button } from 'react-bootstrap'
import Logo from './logo'

export default function Header() {
    return (
        <header className="container header">
            <Nav>
                <Logo/>
                <Nav.Link href="">Projects</Nav.Link>
                <Nav.Link href="">Services</Nav.Link>
                <Nav.Link href="">Blog</Nav.Link>
                <Nav.Link href="">News</Nav.Link>
            </Nav>

            <h1>Your house should be called a home. Construction Crew is here to help</h1>

            <Button>Book A Consultation</Button>
        </header>
    )
}
