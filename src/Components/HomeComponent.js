import React, { useState } from 'react';
import logo from './logo.svg';
import CarouselComp from "./CarouselComponent";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" style={{padding:"0.5% 1%", margin:"0 5%"}}>
        <NavbarToggler onClick={toggle} style={{border:"none", textAlign:"right", textDecoration:"none"}}/>
        <NavbarBrand href="/">Saviour</NavbarBrand>
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">How we Work</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Nav style={{display:"flex"}}>
          <NavItem style={{display:"flex"}}>
              <img src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png" alt="" style={{width:"1rem", height:"1.25rem", marginTop:"11%"}}/>
              <NavLink href="#" style={{color:"grey"}}>Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <br/>
      <div>
      {/* <Card style={{backgroundColor:"#fafbfc", border:"none", padding:"1.5% 1%"}}>
        <CardBody>
          <Row style={{alignItems:"center"}}>
              <Col sm={6}>
                <img src={logo} alt="" style={{width:"60%"}}/>
              </Col>
              <Col sm={6}>
                <CardText style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Button style={{margin:"1%", backgroundColor:"#8a2be2", border:"none"}}>Adopt Now</Button><Button style={{margin:"1%", backgroundColor:"#8a2be2", border:"none"}}>Students</Button>
                </div>
              </Col>
          </Row>
        </CardBody>
      </Card> */}
      <CarouselComp/>
      </div>
      <br/><br/>
      <div style={{padding:"1%"}}>
        <h4 style={{fontWeight:"normal"}}>How we Work</h4>
        <Row>
          <Col sm={1}></Col>
          <Col sm={2}></Col>
          <Col sm={2}>
          <p style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</p>
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}>
          <p style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</p>
          </Col>
          <Col sm={2}></Col>
          <Col sm={1}></Col>
        </Row><br/>
        <Row>
          <Col sm={1}></Col>
          <Col sm={2}>
            <img src={logo} alt=""/>
          </Col>
          <Col sm={2}>
            <img src={logo} alt=""/>
          </Col>
          <Col sm={2}>
            <img src={logo} alt=""/>
          </Col>
          <Col sm={2}>
            <img src={logo} alt=""/>
          </Col>
          <Col sm={2}>
            <img src={logo} alt=""/>
          </Col>
          <Col sm={1}></Col>
        </Row><br/>
        <Row>
          <Col sm={1}></Col>
          <Col sm={2}>
          <p style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</p>
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}>
          <p style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</p>
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}>
          <p style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</p>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </div>
      <br/><br/>
      <div>
      <h4 style={{fontWeight:"normal"}}>Impacted Lives</h4>
      <br/>
      <Card style={{backgroundColor:"#fafbfc", border:"0.5 px solid black", padding:"1% 1%", margin:"1% 2%", borderRadius:"0px"}}>
        <CardBody>
          <Row style={{alignItems:"center"}}>
              <Col sm={3}>
                <img src={logo} alt="" style={{width:"60%"}}/>
              </Col>
              <Col sm={3}>
                <CardText style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </Col>
              <Col sm={3}>
                <img src={logo} alt="" style={{width:"60%"}}/>
              </Col>
              <Col sm={3}>
                <CardText style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </Col>
          </Row>
          <br/>
          <Row style={{alignItems:"center"}}>
              <Col sm={3}>
                <CardText style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </Col>
              <Col sm={3}>
                <img src={logo} alt="" style={{width:"60%"}}/>
              </Col>
              <Col sm={3}>
                <CardText style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </Col>
              <Col sm={3}>
                <img src={logo} alt="" style={{width:"60%"}}/>
              </Col>
          </Row>
        </CardBody>
      </Card>
      </div>
      <br/><br/>
      <div style={{padding:"3%"}}>
        <h4 style={{fontWeight:"normal"}}>Why Us</h4>
        <br/><br/>
        <Row>
          <Col sm={4}>
            <h4 style={{fontWeight:"normal"}}>
              Locations<br/><br/>
              12131313
            </h4>
            <br/>
            <p style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</p>
            <p style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</p>
          </Col>
          <Col sm={4} style={{borderLeft:"1px solid black", borderRight:"1px solid black"}}>
            <h4 style={{fontWeight:"normal"}}>Impact</h4>
            <br/>
            <img src="acad1.png" alt="" style={{width:"30%"}}/><br/><br/>
            <p style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</p>
          </Col>
          <Col sm={4}>
            <h4 style={{fontWeight:"normal"}}>Our Trust!</h4>
            <br/>
            <img src={logo} alt="" style={{width:"70%"}}/>
          </Col>
        </Row>
        <br/>
      </div>
      <br/><br/>
      <div style={{padding:"3%"}}>
        <h4 style={{fontWeight:"normal"}}>Be a Hero!</h4>
        <br/><br/>
        <Row style={{alignItems:"center"}}>
          <Col sm={5} style={{textAlign:"left"}}>
          Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content
          <br/><br/>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content
          </Col>
          <Col sm={1}></Col>
          <Col sm={6}>
          <Form style={{padding:"2% 3% 2% 2%"}}>
          <Row>
            <Col xs={6}>
            <FormGroup>
            <Input type="name" name="fname" id="exampleEmail1" placeholder="First Name" />
            </FormGroup>
            </Col>
            <Col xs={6}>
            <FormGroup>
            <Input type="name" name="lname" id="exampleEmail2" placeholder="Last Name" />
            </FormGroup>
            </Col>
          </Row>
          <br/>
          <FormGroup>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email ID" />
          </FormGroup><br/>
          <FormGroup>
            <Input type="phone" name="phone" id="examplePhone" placeholder="Phone No." />
          </FormGroup><br/>
          <Row style={{display:"flex", justifyContent:"space-evenly"}}>
            <Col xs={3}></Col>
            <Col xs={2}><img src="fac.png" alt="" style={{width:"30%", cursor:"pointer"}}/></Col>
            <Col xs={2}><img src="google-512.png" alt="" style={{width:"30%", cursor:"pointer"}}/></Col>
            <Col xs={2}><img src="link.png" alt="" style={{width:"30%", cursor:"pointer"}}/></Col>
            <Col xs={3}></Col>
          </Row><br/>
          <Button style={{margin:"1%", backgroundColor:"#8a2be2", border:"none"}}>Let's Go</Button>
          </Form>
          </Col>
        </Row>
      </div>
      <br/><br/>
      <div style={{backgroundColor:"#dcdcdc", padding:"2%", textAlign:"left"}}>
      Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content
      Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content
      Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content
      <br/><br/>
      Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content
      Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content
      <br/><br/>
      Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content
      Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content
      </div>
    </div>
  );
}

export default Example;