import React, { useState } from 'react';
import logo from './logo.svg';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  Row,
  Col,
  Button,
  CardText
} from 'reactstrap';

const items = [
  {
    src: `${logo}`,
    altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: `${logo}`,
    altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: `${logo}`,
    altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{width:"60%"}}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Card style={{backgroundColor:"#fafbfc", border:"none", padding:"1.5% 1%"}}>
    <CardBody>
      <Row style={{alignItems:"center"}}>
          <Col sm={6}>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
          </Col>
          <Col sm={6}>
            <CardText style={{textAlign:"left"}}>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Button style={{margin:"1%", backgroundColor:"#8a2be2", border:"none"}}>Adopt Now</Button><Button style={{margin:"1%", backgroundColor:"#8a2be2", border:"none"}}>Students</Button>
            </div>
          </Col>
      </Row>
    </CardBody>
  </Card>
  );
}

export default Example;