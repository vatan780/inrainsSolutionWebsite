import React, { useState }  from 'react'
// import applogo from '../../images/app-logo.png'
import invis1 from '../../images/invis1.jpeg'
// import invis1 from '../../images/'
import invins2 from '../../images/invins2.jpeg'
import invins3 from '../../images/invins3.jpeg'
import './navbar.css'
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Function to toggle menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className='header'>
                <div className="logo">
                    <a href="/">
                        {/* <img src={applogo} alt="" height={"100px"} width={"100px"} /> */}
                        {/* <img src={invis1} alt="" height={"100px"} width={"100px"} /> */}
                        {/* <img src={invins2} alt="" height={"100px"} width={"100px"} /> */}
                        <img src={invins3} alt="" height={"100px"} width={"100px"} />
                        {/* <span>Inviciblebrains</span> */}
                    </a>
                </div>


                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>


                <div className={isOpen ? "header-menu active" : "header-menu"}>
                {/* <div className="header-menu">className={isOpen ? "nav-links active" : "nav-links"} */}
                    <div className="menu_inner">
                        <ul>
                            <li class="menu-item">
                                <span>Technology</span>
                                <div className='submenu_wrap'>
                                    <ul>
                                        <li>
                                            <a href="/meanStack">Mean Stack</a>
                                        </li>
                                        <li>
                                            <a href="/mearnStack">Mern Stack</a>
                                        </li>
                                        <li>
                                            <a href="/">React Native</a>
                                        </li>
                                        <li>
                                            <a href="/">cocos</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item">
                                <span>Marketing Services</span>
                                <div className='submenu_wrap'>
                                    <ul>
                                        <li>
                                            <a href="/">Social Media Marketing</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="menu-item">
                                <span>Games</span>
                                <div className='submenu_wrap'>
                                    <ul>
                                        <li>
                                            <h3>Traditional Card Games</h3>
                                        </li>
                                        <li>
                                            <a href="/poker">Poker</a>
                                        </li>
                                        <li>
                                            <a href="/">Rummy</a>
                                        </li>
                                        <li>
                                            <a href="/">Black Jack</a>
                                        </li>
                                        <li>
                                            <h3>Regional Card Games</h3>
                                        </li>
                                        <li>
                                            <a href="/">ChinCon</a>
                                        </li>
                                        <li>
                                            <a href="/">7 and a Half</a>
                                        </li>
                                        <li>
                                            <a href="/">Cato</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>


                            <li class="menu-item">
                                <span>Testing</span>
                                <div className='submenu_wrap'>
                                    <ul>
                                        <li>
                                            <a href="/">Load and performance Testing</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="mobile_button">
                        <button><a href="/contact">Contact Us</a></button>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Navbar
