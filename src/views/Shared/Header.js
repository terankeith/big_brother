import React from "react"
import Navbar from "react-bootstrap/Navbar"

export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" style={{ marginBottom: "10px" }}>
        <Navbar.Brand>Everything Big Brother!</Navbar.Brand>
      </Navbar>
    </header>
  )
}
