import {Container, Row, Col} from 'react-bootstrap'
import './Home.css'
import lib from './deveydefeatsbb.png';


const Mission = () => {
    return ( 
        <div className="bg-dark">
            <div className="bg-secondary py-2">
                <Container>
                <Row id="banner">
                    <Col className='py-4 bg-secondary'>
                        <h1>Our Mission Statement</h1>
                        <h5>Why we do what we do</h5>
                    </Col>
                </Row>
            </Container>
            </div>
            
            <Container className="bg-dark py-4">
                <Row>
                    <Col md={6} className="text-light" >
                        <p id="textbox"> Newspapers have been documenting historical happenings for over 200 years. Anything important
                        that has ever happened in the modern era is written down in a newspaper somewhere, somewhen. Our mission is to 
                        archive and serve these articles to our users. Our goal is to have the largest database of archived Newspapers
                        in the world and be able to search through them to find the articles you want instantaneously. We have archived 
                        newspapers of existing publishers like the New York Times as well as newspapers that are no longer in print.</p>
                        <p>

                        </p>
                        <p id="textbox">
                        We are open-source and free to use. As time goes on our databases will only grow in size with the added newspapers
                        added by you, our users. In this ecosystem we will be able to react to the needs of our users because we are our users.
                        We are just as interested in history as you are and we hope to create a shared experience of being able to quickly research
                        any article from any era from any publication.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img src={lib} alt="Logo" id="lib"/>
                    </Col>
                </Row>
            </Container>
            <Container className="p-5">

            </Container>
             <Container className="p-5">

            </Container>
            <Container className="p-5">

            </Container>
        </div>
        
     );
}
 
export default Mission;