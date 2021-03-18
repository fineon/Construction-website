import Head from 'next/head'
import { Container, Row, Col, Card, Button, Carousel, CarouselItem } from 'react-bootstrap'
import Header from './components/Header'

// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
// console.log(vw)

export default function Home() {

  return (
    <Container className="md-container">
      <Head>
        <title>Construction Co.</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Header/>

    <Container className='services'>
      <Row>
      <Col>
          <img src="" alt=""/>
        </Col>
        <Col>
        <Container>
            <h3>Planning</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, provident blanditiis repellat atque tempore quae aliquid nisi doloremque, assumenda id iste quod rem iure deserunt officia reiciendis dolorum excepturi totam!</p>
          </Container>
        </Col>
      </Row>
      <Button>Learn More</Button>
    </Container>

    <Container className='past-projects'>
      <h2>Past Projects</h2>
      <Carousel>
        <Carousel.Item>
          <h1>hi</h1>
        </Carousel.Item>
        <Carousel.Caption>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic totam asperiores beatae minus aspernatur temporibus dolores itaque in, non saepe, aperiam assumenda exercitationem, possimus veritatis commodi deserunt eaque sequi veniam!</p>
        </Carousel.Caption>

        <Carousel.Item>
          <h1>hi</h1>
        </Carousel.Item>
        <Carousel.Caption>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic totam asperiores beatae minus aspernatur temporibus dolores itaque in, non saepe, aperiam assumenda exercitationem, possimus veritatis commodi deserunt eaque sequi veniam!</p>
        </Carousel.Caption>
      </Carousel>

      <Button>Learn More</Button>
    </Container>

    <Container>
      <h2>Company News</h2>
      <Container>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Container>
      <Button>Learn More</Button>
    </Container>

      <footer className="cntr-footer">
        <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
        </a>
      </footer>
    </Container>
  )
}
