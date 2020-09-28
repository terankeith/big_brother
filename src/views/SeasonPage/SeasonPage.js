import React from "react"
import { PlayerGrid } from "./Sections/PlayerGrid"
import { Week } from "./Sections/Week"
import Container from "react-bootstrap/Container"

export const SeasonPage = () => {
  return (
    <Container>
      <Week />
      <PlayerGrid />
    </Container>
  )
}
