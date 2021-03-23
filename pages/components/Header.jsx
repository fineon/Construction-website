import React, { useState } from 'react'
import Link from 'next/link'
import { Row, Col, Nav, Button, Container, Modal, Image } from 'react-bootstrap'

export default function Header(props) {
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

    return (
        <header className="py-5">

            <Nav className='d-flex flex-wrap justify-content-between'>
                {/* <Nav className='justify-content-end'> */}
                <Link href='/'>
                    <Image src='/images/logo.png' />
                </Link>

                <Nav.Item className='d-flex flex-wrap justify-content-between'>
                    <Nav.Link href="">Services</Nav.Link>
                    <Link href='/blog' passHref>
                        <Nav.Link href="">Blog</Nav.Link>
                    </Link>
                    <Nav.Link href="">Log In</Nav.Link>
                </Nav.Item>
            </Nav>

            <Container className='text-center p-5'>
                <h1 className='my-5'>{props.blog ? 'The Building Blog' : 'Your house should be called a home. Construction Crew is here to help'}</h1>
                <Row className='d-flex flex wrap justify-content-center align-items-center'>
                    <Col>
                        <Button onClick={showModal}>Book A Consultation</Button>
                    </Col>
                    {props.blog ? null : <Col><Button variant='outline-light'>See What We Offer</Button></Col>}
                </Row>

                <Modal show={show} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Book an appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form action="">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" />
                            <label htmlFor="" className="form-label">Phone number</label>
                            <input type="text" className="form-control" />
                            <label htmlFor="" className="form-label">Notes</label>
                            <input type="text" className="form-control" />
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
