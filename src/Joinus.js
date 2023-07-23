import {Container, Row, Col, Form, InputGroup, Button} from 'react-bootstrap'
import './Home.css'


const Joinus = () => {
    return ( 
        <div className="bg-dark">
        <div className="bg-secondary py-2">
            <Container>
            <Row id="banner">
                <Col className='py-4 bg-secondary'>
                    <h1>Join The Team</h1>
                    <h5>be part of something greater</h5>
                </Col>
            </Row>
        </Container>
        </div>
        
        <Container className="bg-dark py-4">
            <Row>
                <Col md={6} className="text-light" >
                    <Container className="py-5"> 

                    </Container>
                    <p id="textbox"> It does not take much to join us. We are open-source and made by passionate people 
                    who care about history and the stories and events that are conatined in newspapers. We would like people
                    with basic computer science backround or who are interested in history to join us. don't be shy and don't
                    expect to work full time. this is more of a hobby than true job. Join at your own risk!</p>
                    <p>

                    </p>
                </Col>
                <Col md={6}>
                    <Container className="text-light">
                        <h3>Apply Now</h3>
                        <InputGroup className="mb-3 py-4">
                            <Form.Control
                            placeholder="Enter Name"
                            aria-label="Name"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3 py-4">
                            <Form.Control
                            placeholder="Enter Email"
                            aria-label="Email"
                            aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                        <Form>
                            <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write why you want to join and what would make you a good fit.</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                        </Form>
                        <Row>
                            <Col>
                                <Button variant="secondary" className="mb-3 text-start px-3 py-2">Submit</Button>
                            </Col>
                            <Col> </Col><Col> </Col><Col></Col><Col></Col><Col></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        <Container className="p-5">
        </Container>
        <Container className="p-5">
        </Container>
    </div>
    
     );
}
 
export default Joinus;