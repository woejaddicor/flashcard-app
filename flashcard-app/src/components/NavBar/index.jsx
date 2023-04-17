import { NavLink, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav as NavLink } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <main>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Ghost</Navbar.Brand>
                        <NavLink>
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/login">Login</NavLink>
                            <NavLink href="/dashboard">Dashboard</NavLink>
                            <NavLink href="/aboutus">About Us</NavLink>
                        </NavLink>
                    </Container>
                </Navbar>
            </header>
            <Outlet/>
        </main>
    )
}
