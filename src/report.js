import {Container, Row, Col, Form, InputGroup, Button} from 'react-bootstrap'
import './Home.css'


const Report = () => {
    return ( 
        <div className="bg-dark">
        <div className="bg-secondary py-2">
            <Container>
            <Row id="banner">
                <Col className='py-4 bg-secondary'>
                    <h1>Report Issues</h1>
                    <h5>did something not work properly? Tell us!</h5>
                </Col>
            </Row>
        </Container>
        </div>
        
        <Container className="bg-dark py-4">
            <Row>
                <Col md={6} className="text-light p-5" >
                    <Container className="py-4"> 

                    </Container>
                    <p id="textbox"> Our website is new and many issues may arise in the use of it. We are constantly trying to improve
                    what we can do for you. Write down what kind of issue you faced and we will review it and respond as quickly as we can.
                    If the issue is because you cannot find an article that you know exists you can send it to us and we will gladly add it 
                    to our database. </p>
                    <Container className="py-2"> 

                    </Container>
                    <p id="textbox">If you would like to contact us for any other reason email us at theResearcher@gmail.com</p>
                </Col>
                <Col md={6}>
                    <Container className="text-light">
                        <h3>Report Issue</h3>
                        
                        <Form>
                            <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlTextarea1">
                                <Form.Label >describe the issue you faced in the text box below.</Form.Label>
                                <Form.Control as="textarea" rows={10} />
                            </Form.Group>
                        </Form>
                        <Row>
                            <Col>
                                <Button variant="secondary" className="mb-3 px-3 py-2">Report</Button>
                            </Col>
                        </Row>
                    </Container>
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
 
export default Report;