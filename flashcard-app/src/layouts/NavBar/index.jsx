import { Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <main>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Ghost</Navbar.Brand>
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
