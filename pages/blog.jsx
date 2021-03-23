import React from 'react'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container, Col, Row, Image, Card, Button} from 'react-bootstrap'

export async function getStaticProps(context) {

    const posts = await fetch(process.env.WORDPRESS_URL)
    const postData = await posts.json()

    // console.log(data)
    if (!postData) {
        return {notFound: true}
    } else {
        return {
            props: {
                postData
            }
        }
    }
}

function BlogPosts(props) {
    return(
        <Card className='m-3 p-3'>
            <Card.Title>
            <h2>{props.content.title.rendered}</h2>
            <h5>{new Date(props.content.date).toLocaleDateString()}</h5>
            </Card.Title>
            <Card.Body>
            <div dangerouslySetInnerHTML={{__html: props.content.content.rendered}}/>
            </Card.Body>
        </Card>
    )
}

export default function blog(props) {
    console.log(props)
    return (
        <>
            <Head>
                <title>Construction Co. Blog</title>
            </Head>
            <Header blog={true}/>

           <h1 className='my-5 text-center'>Blog</h1>

            {props.postData? props.postData.map(item => <BlogPosts key={item.id} content={item}/>) : null}

            <Footer/>
        </>
    )
}
