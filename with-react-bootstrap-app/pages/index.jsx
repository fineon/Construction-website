import Head from 'next/head'
import { Container, Row, Col, Card, Button, Carousel, Image } from 'react-bootstrap'
import Header from './components/Header'
import Logo from './components/logo'
// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
// console.log(vw)

export default function Home() {

  return (
    <>
      <Head>
        <title>Construction Co.</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Header />

      <Container className='my-3 services' fluid>
        <h2 className='my-4 text-center'>Our Services</h2>
        <Row className='m-2'>
          <Col sm>
            <Image src="/images/daniel-mccullough.jpg" fluid alt="" />
          </Col>
          <Col sm>
            <h3>Planning</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, provident blanditiis repellat atque tempore quae aliquid nisi doloremque, assumenda id iste quod rem iure deserunt officia reiciendis dolorum excepturi totam!</p>
          </Col>
        </Row>

        <Row className='m-2'>
          <Col sm={{ order: 2 }}>
            <Image src="/images/annie-gray.jpg" fluid alt="" />
          </Col>

          <Col sm={{ order: 1 }}>
            <h3>Customizing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, provident blanditiis repellat atque tempore quae aliquid nisi doloremque, assumenda id iste quod rem iure deserunt officia reiciendis dolorum excepturi totam!</p>
          </Col>
        </Row>

        <Row className='m-2'>
          <Col sm >
            <Image src="/images/greyson-joralemon.jpg" fluid alt="" />
          </Col>
          <Col sm>
            <h3>Building</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, provident blanditiis repellat atque tempore quae aliquid nisi doloremque, assumenda id iste quod rem iure deserunt officia reiciendis dolorum excepturi totam!</p>
          </Col>
        </Row>

        <Button className='m-3'>Learn More</Button>
      </Container>

      <Container className='my-3 past-projects' fluid={true}>
        
        <h2 className='my-3 text-center'>Past Projects</h2>

        <Container sm>
          <Carousel>
            <Carousel.Item>
              <Image src='/images/avi-werde.jpg' fluid />

              <Carousel.Caption>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic totam asperiores beatae minus aspernatur temporibus dolores itaque in, non saepe, aperiam assumenda exercitationem, possimus veritatis commodi deserunt eaque sequi veniam!</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image src='/images/stephan-bechert.jpg' fluid />

              <Carousel.Caption>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic totam asperiores beatae minus aspernatur temporibus dolores itaque in, non saepe, aperiam assumenda exercitationem, possimus veritatis commodi deserunt eaque sequi veniam!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Button className='m-3'>Learn More</Button>
      </Container>

      <Container className='my-3 news'>
        <h2 className='my-3 text-center'>Company News</h2>
        <Container>
          <Row>
            <Col>
              <Image src="/images/cytonn-photography.jpg" alt="" fluid />
              <h3>Construction Co. announces new partnership with Building Co.</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
            <Col>
              <Image src="/images/scott-graham.jpg" alt="" fluid />
              <h3>Book A Phone Consultation Today!</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
            <Col>
              <Image src="/images/20off.png" alt="" fluid />
              <h3>20% discount when you refer our services!</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
          </Row>
        </Container>
        <Button className='m-3'>Learn More</Button>
      </Container>

      <Container className='my-3 blog'>
        <h2>Blog and Resources</h2>
        <Container>
          <Row>
            <Col>
              <Image src="/images/lucian-novosel.jpg" alt="" fluid />
              <h3>What to know about your personal projects and renovation finance</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
            <Col>
              <Image src="/images/avinash-kumar.jpg" alt="" fluid />
              <h3>What to look for signs of mold in your home</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
            <Col>
              <Image src="/images/kelly-sikkema.jpg" alt="" fluid />
              <h3>How to set a reasonable budget for home rennovation</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident sed ut aspernatur dolorum quo dolores adipisci quae, ea, explicabo earum voluptatum ex maxime nemo repellat illo quod tenetur non.</p>
            </Col>
          </Row>
        </Container>
        <Button className='m-3'>Learn More</Button>
      </Container>

      <footer className='p-3'>
        <Row>
          <Col>
            <Logo />
          </Col>

          <Col>
            <h2>Newsletter</h2>
            <input type="text" />
            <Button>Subscribe</Button>
          </Col>
          <Col>
            <a href="">Contact</a>
            <a href="">Career</a>
            <a href="">Blog</a>
          </Col>
        </Row>
      </footer>

    </>
  )
}
