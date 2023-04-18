import { Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";

const logoStyle = {
    width: "50px",
    height: "50px"
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
            return <Nav.Link href="/login">Login</Nav.Link>
        } else {
            return <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        }
    }

    return (
        <main>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/"><img src={logo} 
                        style={logoStyle}/></Navbar.Brand>
                        <Nav.Link href="/">Home</Nav.Link>
                        { displayLoginLogout() }
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                    </Container>
                </Navbar>
            </header>
            <Outlet/>
        </main>
    )
}
