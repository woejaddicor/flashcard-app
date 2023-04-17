import { Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/logo.png'


const logoStyle = {
    width: "50px",
    height: "50px"
}

export default function NavBar() {
    return (
        <main>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/"><img src={logo} 
                        style={logoStyle}/></Navbar.Brand>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                    </Container>
                </Navbar>
            </header>
            <Outlet/>
        </main>
    )
}
