import { Link } from 'react-router-dom';
import logo from './finallogo.png';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

const Navbar = () => {
    const a = "Join"
    return ( 
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
            <Container>
                <Row>
                    <Col md={4}>
                        <div >
                            <Link to="/"><img src={logo} alt="Logo" id="logo"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        </div>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} className="align-middle">
                        <div className="collapse navbar-collapse pt-5" id="navmenu">
                            <ul className="navbar-nav ms-auto column-gap-4 " id="navbaritems">
                                <li className="nav-item px-3">
                                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link to="/Mission" style={{ textDecoration: 'none', color: 'white' }}>Mission</Link>    
                                </li>
                                <li className="nav-item px-3">
                                    <Link to="/Joinus" style={{ textDecoration: 'none', color: 'white' }}>{a}</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link to="/report" style={{ textDecoration: 'none', color: 'white' }}>Report</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link to="/research" style={{ textDecoration: 'none', color: 'white' }}>Research</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
                
        </nav>
     );
}
 
export default Navbar;