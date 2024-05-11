
import "./Navbar.css"

function Navbar() {
    const iconStyles = {
        padding: "5px",
        color: "white",
    };
    return (
        <nav>
            <div>
                <h2 style={{backgroundColor: "red" }}>L</h2>
                <h2 style= {{backgroundColor: "purple" }}>space-app</h2>
            </div>
            <div>
                <p style = {iconStyles}>icon</p>
                <p style = {iconStyles}>icon</p>
                <p style = {iconStyles}>icon</p>
            </div>
        </nav>
    );
}

export default Navbar;