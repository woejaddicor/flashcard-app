import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/crammer-logo.png'
import { useNavigate } from "react-router-dom";

const logoStyle = {
    width: "100%",
    height: "100%"
}

export default function NavBar({token}) {
    const navigate = useNavigate();
    
    function handleLogout() {
        localStorage.clear()
        navigate("/")
        window.location.reload(false)
    }

    function displayLoginLogout() {
        if(!token) {
            return <Nav.Link className="login-out-btn" href="/login">Login</Nav.Link>
        } else {
            return <Nav.Link className="login-out-btn" onClick={handleLogout}>Logout</Nav.Link>
        }
    }

    function displayRegisterOption() {
        if (!token) {
            return <Nav.Link className="nav-link" href="/register">Register</Nav.Link>
        }

        else {
            return
        }
    }

    return (
        <main>
            <header>
                <Navbar className="color-nav" variant="light">
                    <Container className="color-nav" >
                        <Navbar.Brand className="nav-logo" href="/"><img src={logo} 
                        style={logoStyle}/></Navbar.Brand>
                        <Nav.Link className="nav-link" href="/about">About Us</Nav.Link>
                        <Nav.Link className="nav-link" href="/dashboard">Dashboard</Nav.Link>
                        { displayRegisterOption() }
                        { displayLoginLogout() }
                    </Container>
                </Navbar>
            </header>
            <Outlet/>
        </main>
    )
}
