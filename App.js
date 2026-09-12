import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Designing food app
 * Header
 * - Logo
 * - Nav Items
 * - Cart icon
 * Body
 * - Search
 * - Restaurant container
 *  - Restaurant card
 *      - Image
 *      - Name
 *      - Cuisine
 *      - star rating
 * footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img height="100px" width="100px" src="https://dineshinaublog.wordpress.com/wp-content/uploads/2026/09/food-app.png" />
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const StyleCard = {
    background: "#ccc",
    align: "center",
    padding:"10px 0 10px 35px"
}
const RestoCard = ({restName, cuisine, rating, delivery}) => {
    // console.log(props);
    // const {restName, cuisine, rating, delivery} = props; 
    return (
        <div className="resto-card" style={StyleCard}>
            <img style={{width:"300px", height:"250px"}} src="https://dineshinaublog.wordpress.com/wp-content/uploads/2026/09/restaurant-logo.jpg" />
            <h3>{restName}</h3>
            <p>{cuisine}</p>
            <span>{rating}</span>
            <h5>{delivery}</h5>
        </div>
    )
}

const Body = () => {
    return (
        <div className="rest-container">
            <RestoCard restName="BMW" cuisine="North Indian, Chineese, Sweets" rating="4.01" delivery="30 minutes" />
            <RestoCard restName="KFC" cuisine="Burger, Pizza" rating="4.05" delivery="25 minutes" />
        </div>
    )
}

const Footer = () => {
    return (
        <p style={{textAlign:"center"}} className="footer">Copyright ©️ 2000-2026</p>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
