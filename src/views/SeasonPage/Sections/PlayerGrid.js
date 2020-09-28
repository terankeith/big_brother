import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const PlayerGrid = () => {
  const playerImage = {
    border: "5px dotted tomato",
    height: "250px"
  }

  const playerImageEvicted = {
    border: "5px dotted gray",
    height: "250px",
    backgroundColor: "lightgray"
  }
  return (
    <Container>
      <Row>
        <Col style={playerImage}></Col>
        <Col style={playerImage}></Col>
        <Col style={playerImage}></Col>
        <Col style={playerImage}></Col>
      </Row>
      <Row>
        <Col style={playerImage}></Col>
        <Col style={playerImage}></Col>
        <Col style={playerImage}></Col>
        <Col style={playerImage}></Col>
      </Row>
      <Row>
        <Col style={playerImageEvicted}></Col>
        <Col style={playerImage}></Col>
        <Col style={playerImage}></Col>
        <Col style={playerImage}></Col>
      </Row>
      <Row>
        <Col style={playerImage}></Col>
        <Col style={playerImageEvicted}></Col>
        <Col style={playerImage}></Col>
        <Col style={playerImage}></Col>
      </Row>
    </Container>
  )
}
