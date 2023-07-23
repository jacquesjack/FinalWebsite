import {Container, Row, Col, Form,} from 'react-bootstrap'
import './Home.css'
import lib from './librarypng.png';
import translation from './language.json'
import { useState, useEffect } from 'react'

const Home = () => {
    const [language,setLanguage] = useState('English')
    const [content,setContent] = useState({})

    useEffect (() => {

        if (language === 'English'){
            setContent(translation.English)
        }else if (language === "Français"){
            setContent(translation.Français)
        }
    })

    return ( 
        <div className="bg-dark">

            
            <div className="bg-secondary py-2">
            <Container>
                <Row id="banner">
                    <Col className='py-4 bg-secondary' aria-label="Title and Subtitle">
                        <h1>{content.Title}</h1>
                        <h5>{content.Subtitle}</h5>
                    </Col>
                </Row>
            </Container>
            </div>

            <Container>
                <Row>
                    <Col className="pt-3">
                        
                        <Form.Select  value={language} onChange={(e)=>{setLanguage(e.target.value)}} aria-label="Language Selector English French">
                                <option>English</option>
                                <option value="Français">Français</option>
                        </Form.Select>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
            
            <Container className="bg-dark py-4" aria-label="home page text and image">
                <Row >
                    <Col md={6} className="text-light " >
                        <p id="textbox">{content.textbox1}</p>
                        <p>

                        </p>
                        <p id="textbox">
                        {content.textbox2}
                        </p>
                    </Col>
                    <Col md={6}>
                        <img src={lib} alt="Pictured is the interior of a large libary" id="lib"/>
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
 
export default Home;