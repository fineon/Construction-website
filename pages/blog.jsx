import React from 'react'
import Header from './components/Header'
import {Container, Col, Row} from 'react-bootstrap'

export async function getStaticProps(context) {
    const res = await fetch('http://heythereian.com/wp-json/')
    const data = await res.json()
    // console.log(data)
    if (!data) {
        return null
    } else {
        return {
            props: data
        }
    }

}

export default function blog(props) {
    console.log(props)
    return (
        <>
            <Header />
            <Container>
                <h1>{props.url}</h1>
            </Container>
        </>
    )
}
