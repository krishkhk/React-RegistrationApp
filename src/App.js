import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navbar,Nav,Container } from "react-bootstrap";

import Home from "./component/Home";
import Loging from "./component/Loging";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";

export default function App() {
  return (
    <div>
      
     < BrowserRouter>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React JSON Registration App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Loging/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>

    </div >
  );
}