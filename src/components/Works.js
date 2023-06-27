import React, { useState } from "react";
import {
  Modal,
  Button,
  Badge,
  Image,
  Container,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";
import works from "../data/works.json";

const Work = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="work-item mb-4">
      <Row>
        <Col md={6}>
          <Image src={item.thumbnailImage} fluid alt="Work item thumbnail" />
        </Col>
        <Col md={6}>
          <h2>{item.title}</h2>
          <div className="mb-3">
            {item.topics.map((topic, index) => (
              <Badge key={index} pill className="bg-success me-2">
                {topic}
              </Badge>
            ))}
          </div>
          <p>{item.description}</p>
          <Button variant="primary" onClick={handleShow}>
            Details
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {item.innerImages && (
            <Carousel
              activeIndex={activeIndex}
              onSelect={handleSelect}
              interval={null}
            >
              {item.innerVideos && (
                <Carousel.Item>
                  <video class="carousel-vid-custom" controls>
                    <source src={item.innerVideos} type="video/mp4" />
                  </video>
                </Carousel.Item>
              )}
              {item.innerImages.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block mx-auto carousel-img-custom"
                    src={img}
                    alt={`slide ${index}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          {item.innerImages && (
            <>
              {item.innerVideos ? (
                activeIndex === 0 ? (
                  <p className></p>
                ) : (
                  <div class="bd-callout bd-callout-info">
                    <p>{item.innerImagesAlt[activeIndex - 1]}</p>
                  </div>
                )
              ) : (
                <p>{item.innerImagesAlt[activeIndex]}</p>
              )}
            </>
          )}
          <h3>About {item.title}</h3>
          <p>{item.detailExplanation}</p>
          <hr></hr>
          <h3>Third-party Library Used</h3>
          {item.libraryUsed.map((library, index) => (
            <li>{library}</li>
          ))}
          <hr></hr>
          {item.githubRepoURL ? (
            <p>
              <Button variant="info" href={item.githubRepoURL} target="_blank">
                GitHub Repo
              </Button>
            </p>
          ) : (
            <Button variant="secondary" disabled>
              The source code for this project is not available publicly.
            </Button>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Works = () => (
  <section id="works">
    <Container>
      <h3 className="text-center" style={{ paddingBottom: "10px" }}>
        Works
      </h3>
      {works.items.map((item, index) => (
        <div key={index}>
          <Work item={item} />
          {index < works.items.length - 1 && <hr />}
        </div>
      ))}
    </Container>
  </section>
);

export default Works;
