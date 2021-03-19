import Head from 'next/head'
import { Container, Row, Col, Card, Button, Carousel, Image } from 'react-bootstrap'
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

      <Container className='services' fluid>
        <Row>
          <Col>
            <Image src="/images/annie-gray.jpg" fluid alt="" />
          </Col>
          <Col>
              <h3>Planning</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, provident blanditiis repellat atque tempore quae aliquid nisi doloremque, assumenda id iste quod rem iure deserunt officia reiciendis dolorum excepturi totam!</p>
          </Col>
        </Row>
        <Button>Learn More</Button>
      </Container>

      <Container className='past-projects' fluid>
        <h2>Past Projects</h2>
        <Carousel>
          <Carousel.Item>
            <Image src='/images/avi-werde.jpg' fluid/>
        
          <Carousel.Caption>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic totam asperiores beatae minus aspernatur temporibus dolores itaque in, non saepe, aperiam assumenda exercitationem, possimus veritatis commodi deserunt eaque sequi veniam!</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image src='/images/stephan-bechert.jpg' fluid/>
         
          <Carousel.Caption>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic totam asperiores beatae minus aspernatur temporibus dolores itaque in, non saepe, aperiam assumenda exercitationem, possimus veritatis commodi deserunt eaque sequi veniam!</p>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Button>Learn More</Button>
      </Container>

      <Container className='news'>
        <h2>Company News</h2>
        <Container>
          <Row>
            <Col>
              <Image src="" alt="" />
              <h3>Construction Co. announces new partnership with Building Co.</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
            <Col>
              <Image src="" alt="" />
              <h3>Book A Phone Consultation Today!</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
            <Col>
              <Image src="" alt="" />
              <h3>20% discount when you refer our services!</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
          </Row>
        </Container>
        <Button>Learn More</Button>
      </Container>

      <Container className='blog'>
        <h2>Blog and Resources</h2>
        <Container>
          <Row>
            <Col>
              <Image src="" alt="" />
              <h3>What to know about your personal projects and renovation finance</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
            <Col>
              <Image src="" alt="" />
              <h3>What to look for signs of mold in your home</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
            <Col>
              <Image src="" alt="" />
              <h3>How to set a reasonable budget for home rennovation</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
          </Row>
        </Container>
        <Button>Learn More</Button>
      </Container>

      <footer className="cntr-footer">
        <Image src="" alt="logo" />
        <Container>
          <h2>Newsletter</h2>
          <input type="text" />
          <Button>Subscribe</Button>
        </Container>
        <Container>
          <a href="">Contact</a>
          <a href="">Career</a>
          <a href="">Blog</a>
        </Container>
      </footer>
    </Container>
  )
}
