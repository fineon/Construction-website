import React from 'react'
import {Row, Col, Button, Image} from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className='p-5 mt-5'>
            <Row>
                <Col>
                    <Image src='/images/logo.png' />
                </Col>

                <Col>
                    <form action="">
                        <label className='form-label'>Subscribe to our newsletter</label>
                        <input type="text" className='form-control' />
                        <Button>Subscribe</Button>
                    </form>
                </Col>
                <Col>
                    <Row className='justify-content-between'>
                        <a href="">Contact</a>
                        <a href="">Career</a>
                        <a href="">Blog</a>
                    </Row>
                </Col>
            </Row>
        </footer>
    )
}
