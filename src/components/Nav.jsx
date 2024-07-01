import "./Nav.css"
import nature from "../images/Hello_Fresh.png"

function Nav() {
    return (
        <nav>
                <img src={nature} alt="img"/>
                <ul>
                    <a href="#"><li>Our Plans</li></a>
                    <a href="#"><li>How It Works</li></a>
                    <a href="#"><li>Our Menus</li></a>
                    <a href="#"><li>Gift Cards</li></a>
                    <a href="#"><li>Sustainability</li></a>
                    <a href="#"><li>Thanksgiving Box</li></a>
                </ul>

                <button className="btn">Log In</button>

        </nav>

    )
}

export default Nav