import React from 'react'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container, Col, Row, Image, Card, Button } from 'react-bootstrap'

export async function getStaticProps(context) {
    // const url = process.env.NODE_ENV == 'production' ? `https://${process.env.WORDPRESS_URL}` : 'http://localhost:3000'
    //festching post data from WordPress CMS, with secrets hidden in .env.local file
    const posts = await fetch('https://heythereian.com/wp-json/wp/v2/posts')
    const postData = await posts.json()

    // console.log(data)
    if (!postData) {
        return { notFound: true }
    } else {
        return {
            props: {
                postData
            }
        }
    }
}

function BlogPosts(props) {
    return (
        <Card className='m-4 p-3'>
            <Card.Title>
                <h2>{props.content.title.rendered}</h2>
                <h5>{new Date(props.content.date).toLocaleDateString()}</h5>
            </Card.Title>
            <Card.Body>
                <div dangerouslySetInnerHTML={{ __html: props.content.content.rendered }} />
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
            <Header blog={true} />

            <h1 className='my-5 text-center'>Blog</h1>
            {/* rendering posts with Bootstrap cards, with data returning from getStaticProps */}
            {props.postData ? props.postData.map(item => <BlogPosts key={item.id} content={item} />) : null}

            <Footer />
        </>
    )
}
