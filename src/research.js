import {Container, Row, Col, Form, Button, Table} from 'react-bootstrap'
import './Home.css'
import {data} from './data.js'
import { useState } from 'react'
import article from './samplearticle.pdf' 

function regexTester(str){
        let regex = /(0[1-9]|1[0,1,2])\/(0[1-9]|[12][0-9]|3[01])\/(17|18|19|20)\d{2}/;
    if (regex.test(str)){
        return true;
    }
    return false;
}

function dateValue(str){
    return (parseInt(str.slice(0,2) * 31)) + (parseInt(str.slice(3,5)) + (parseInt(str.slice(6,10) * 365)));
}

//function dateValueConsole(str){
//    let num = (parseInt(str.slice(0,1) * 31)) + (parseInt(str.slice(3,4)) + (parseInt(str.slice(6,10) * 365)));
//    console.log(num);
//    console.log(str.slice(0,1));
//    console.log(str.slice(3,4));
//    console.log(str.slice(6,10));
//    return (parseInt(str.slice(0,1) * 31)) + (parseInt(str.slice(3,4)) + (parseInt(str.slice(6,10) * 365)));
//}

const Research = () => {


    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('samplearticle.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'samplearticle.pdf';
                alink.click();
            })
        })
    }

    const [title,setTitle] = useState('')
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')
    const [author,setAuthor] = useState('')
    const [keywords,setKeywords] = useState('')
    const [type,setType] = useState('')
    console.log(type)


    
    


    return ( 
        <div className="bg-dark">
        <div className="bg-secondary py-2">
            <Container>
            <Row id="banner">
                <Col className='py-4 bg-secondary'>
                    <h1>Start Researching</h1>
                    <h5>Define your search parameters and fetch your articles</h5>
                </Col>
            </Row>
        </Container>
        </div>
        <Container className="text-light text-start p-5">
            <p>There are 6 search parameters to use to refine your search. You may choose to fill all of them or none of them.
                The search options allow you to select which newspaper publication to search through, which date to start looking and which date to stop looking, Which Keywords to prioritize, Which Author's articles to search and which article type to search. Be careful to correctly input the date as mm/dd/yyyy. The website won't break but it will simply ignore a date put in an incorrect format.
                Once you have found the article you are looking for click the download button and begin reading right away.
            </p>
        </Container>
        <Container className="bg-dark pt-4">
            <Row>
               <Col>
                    <Container className="text-light text-start">
                            <Container className="py-4">
                                <p>Enter the newspaper to search through</p>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control onChange={(e) => setTitle(e.target.value)} placeholder="ex: The New York Times" />
                                    </Form.Group>
                            </Container>
                            
                            <Container className="py-2">
                                <p>Select some Keywords to prioritize</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control onChange={(e) => setKeywords(e.target.value)} placeholder="ex: War " />
                                    </Form.Group>
                                </Form>
                            </Container>
                    </Container>
               </Col>
               <Col>
                    <Container className="text-light text-start">
                            <Container className="py-4">
                                <p>Select start date</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control onChange={(e) => setStartDate(e.target.value)} placeholder="mm/dd/yyyy" />
                                    </Form.Group>
                                </Form>
                            </Container>
                            
                            <Container className="py-2">
                                <p>Select Article author</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control onChange={(e) => setAuthor(e.target.value)} placeholder="ex: Lolly Marvelley" />
                                    </Form.Group>
                                </Form>
                            </Container>
                    </Container>
               </Col>
               <Col>
                    <Container className="text-light text-start">
                            <Container className="py-4">
                                <p>Select end date</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">  
                                        <Form.Control onChange={(e) => setEndDate(e.target.value)} placeholder="mm/dd/yyyy" />
                                    </Form.Group>
                                </Form>
                            </Container>
                            
                            <Container className="py-2">
                                <p>Select the type of article</p>
                                <Form.Select onChange={(e) => setType(e.target.value)} aria-label="Default select example">
                                        <option>No Type Selected</option>
                                        <option value="Opinion">Opinion</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Current Events">Current Events</option>
                                        <option value="Advertisements">Advertisements</option>
                                        <option value="Obituaries">Obituaries</option>
                                        <option value="Reviews">Reviews</option>
                                </Form.Select>
                            </Container>
                    </Container>
               </Col>
            </Row>
        </Container>
        
        <Container className="p-4 text-start text-light">
            <p>Results of Search</p>
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Article Title</th>
                    <th>Date Published</th>
                    <th>Author</th>
                    <th>Publication</th>
                    <th>Article Type</th>
                    <th>Download Article</th>
                    </tr>
                </thead>
                <tbody>

                    {data.filter((item => {
                        return title.toLowerCase() === '' && author.toLowerCase() === '' && keywords.toLowerCase() === '' && startDate === '' && endDate === '' && type === '' ? item : 
                        item.publication.toLowerCase().includes(title) && item.author.toLowerCase().includes(author) && item.article_title.toLowerCase().includes(keywords) &&
                         (regexTester(startDate) === true ? (dateValue(item.date_published)) > dateValue(startDate) : true) &&
                         (regexTester(endDate) === true ? (dateValue(item.date_published)) < dateValue(endDate) : true) &&
                         (type === 'No Type Selected' ? true :  item.article_type === type)
                     

                    })).map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.article_title}</td>
                            <td>{item.date_published}</td>
                            <td>{item.author}</td>
                            <td>{item.publication}</td>
                            <td>{item.article_type}</td>
                            <td classname="text-center">
                                <a href={article}
                                download="samplearticle-PDF-document"
                                target="_blank"
                                rel="noreferrer">
                                <Button variant="light">Download</Button>
                            </a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
        <Container className="p-5">

        </Container>
    </div>
    
     );
}
 
export default Research;