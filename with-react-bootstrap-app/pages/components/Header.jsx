import React, {useState } from 'react'
import Image from 'next/image'
import { Nav, Button, Container, Modal } from 'react-bootstrap'
import Logo from './logo'

export default function Header() {
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

    return (
        <header className="py-5">
            <Nav>
                <Logo />
                <Nav.Link href="">Projects</Nav.Link>
                <Nav.Link href="">Services</Nav.Link>
                <Nav.Link href="">Blog</Nav.Link>
                <Nav.Link href="">News</Nav.Link>
            </Nav>
            <Container className='darktint'> </Container>
            <Container className='text-center'>
                <h1 className='my-5'>Your house should be called a home. Construction Crew is here to help</h1>

                <Button className='my-3' onClick={showModal}>Book A Consultation</Button>

                <Modal show={show} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Book an appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form action="">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control"/>
                            <label htmlFor="" className="form-label">Phone number</label>
                            <input type="text" className="form-control"/>
                            </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>Cancel</Button>
                        <Button variant="primary" onClick={closeModal}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </header>
    )
}
