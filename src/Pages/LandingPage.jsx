import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <div>
     <Container>
     <Row className='p-5'>
        <Col className='p-4'>
        <h1 className='my-1'>Media Player</h1>
        <p className='my-2 fs-4' style={{textAlign:"justify"}}>MelodySphere is a dynamic music streaming platform offering a vast library of songs, playlists, and podcasts. Discover new tracks, enjoy personalized recommendations, and share playlists with friends. With high-quality audio streaming and seamless navigation, MelodySphere elevates your music experience.</p>
        <div className='my-5'>
          <Button className="btn btn-warning"><Link to='/home'style={{textDecoration:"none" ,color:"white"}}>Get Started</Link></Button>
        </div>
        </Col>
        <Col className='p-5'>
        <Col className='pt-2'><img src="https://media.tenor.com/uP7Vrv4O_9EAAAAi/listening-to-music-%E3%83%95%E3%82%B8%E3%83%AD%E3%83%83%E3%82%AF.gif" alt="" height={"400px"} width={"500px"} className='m-3' style={{ borderRadius: "50px" }} /></Col>
        </Col>
      </Row>
      <Row>
        <h1 className='text-center mb-4'><u>Top Features</u></h1>
        <Col>
        <Card style={{ width: '18rem'}} className='mb-5'>
      <Card.Img variant="top" src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1035.gif" height={"300px"}/>
      <Card.Body>
        <Card.Title><h2>Personalized Playlists</h2>
        </Card.Title>
        <Card.Text>
        Whether working, relaxing, or partying, MelodySphere curates playlists based on your habits, ensuring the soundtrack.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '19rem'}} className='mb-5'>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg?t=st=1735637978~exp=1735641578~hmac=0de90dd4f821084e45d6b68be84ea67fbb92684f06d42474136357f834ef9bf8&w=1060" height={"300px"}/>
      <Card.Body>
        <Card.Title><h2>On-Demand Streaming</h2></Card.Title>
        <Card.Text>
        Access millions of songs, albums, and podcasts, and stream your favorite tracks whenever you want, without interruptions or ads.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem'}} className='mb-5'>
      <Card.Img variant="top" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTZ4NDRvbGZiZjBqZDczOHR1NjBwcDRtN2kzMmdwbmhzZjkzZWs5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EwKfD3kAzUghvQiTuw/giphy.webp" height={"300px"}/>
      <Card.Body>
        <Card.Title><h2>Discover New Music</h2></Card.Title>
        <Card.Text>
        Explore new genres, trending tracks, and emerging artists. Stay ahead of the curve and find fresh music that suits your taste.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <Row className='m-5 p-5 border-rounded shadow'>
        <Col>
        <h1 className='text-center'>Simple and powerful Music</h1>
        <p>MelodySphere brings the power of music to your fingertips. Explore a wide range of songs, curated playlists, and podcasts with a user-friendly interface. Whether you're working, relaxing, or on the go, enjoy high-quality sound and personalized music experiences. Elevate your listening with MelodySphere.</p>
        </Col>
        <Col className='mt-3'><iframe width="560" height="350" src="https://www.youtube.com/embed/h-ile9tMNM0?si=YiaVlgpBb6Uw2aot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
      </Row>
     </Container>
    </div>
  )
}

export default LandingPage