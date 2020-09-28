import React from "react"
import Container from "react-bootstrap/Container"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

export const Week = () => {
  return (
    <Container>
      <section>
        <DropdownButton title="Select Week">
          <Dropdown.Item href="#/1">Week 1</Dropdown.Item>
          <Dropdown.Item href="#/2">Week 2</Dropdown.Item>
          <Dropdown.Item href="#/3">Week 3</Dropdown.Item>
        </DropdownButton>
      </section>
      <section>Week Stats</section>
    </Container>
  )
}
