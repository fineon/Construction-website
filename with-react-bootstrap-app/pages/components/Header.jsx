import React from 'react'
import Image from 'next/image'
import { Nav, Button } from 'react-bootstrap'

export default function Header() {
    return (
        <header>
            <Nav>
                <img src="" alt="" />
                <a href="">Projects</a>
                <a href="">Services</a>
                <a href="">Blog</a>
                <a href="">News</a>
            </Nav>

            <h1>Your house should be called a home. Construction Crew is here to help</h1>

            <Button>Book A Consultation</Button>
        </header>
    )
}
