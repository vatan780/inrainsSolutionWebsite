import React from 'react'
import india from '../../images/india.png'
import canada from '../../images/canada.png'
import southAfrica from '../../images/south-africa.png'
import uae from '../../images/uae.png'
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-heading">
                    <p>Taab Solutions: Building Next-Gen Apps & Websites, Real Money Games, and Marketing for Growth.</p>

                </div>
                <div className="footer-upper-secc">

                    <div className="upper-footer-item">
                        <img src={india} alt="" />
                        <div className="country-address">
                            <span>INDIA</span>
                            <p>622, 6th Floor</p>
                            <p>Galleria Tower</p>
                            <p>Gurugram, Haryana- 122002</p>
                        </div>
                    </div>

                    <div className="upper-footer-item">
                        <img src={uae} alt="" />
                        <div className="country-address">
                            <span>UAE</span>
                            <p>Tamouh Tower</p>
                            <p>Marina Square,</p>
                            <p>AL Reem Island Abu Dhabi</p>
                        </div>
                    </div>

                    <div className="upper-footer-item">
                        <img src={southAfrica} alt="" />
                        <div className="country-address">
                            <span>WEST AFRICA</span>
                            <p>Ivory Coast</p>
                            <p>WAKACO 03 BP 2178</p>
                            <p>Abidjan , Côté D’ivoire</p>
                        </div>
                    </div>

                    <div className="upper-footer-item">
                        <img src={canada} alt="" />
                        <div className="country-address">
                            <span>CANADA</span>
                            <p>AAFRICANAA</p>
                            <p>#712 ,92 Caplan Avenue,</p>
                            <p>Barrie, ON, Canada</p>
                        </div>
                    </div>




                </div>
                <div className="footer-middle-line">

                </div>
                <div className="footer-below-sec">
                    <div className="footer-bottom-section">
                        <div className="section-item">
                            <p>+91 124-4705478</p>
                            <p>nfo@taabsolutions.com</p>
                            <p>622, 6th Floor, Galleria Market, DLF Phase4, Gurgaon, Haryana - 122009</p>
                        </div>
                    </div>
                    <div className="footer-bottom-section">
                        <div className="bottom-footer-heading">
                            <p>Our Services</p>
                        </div>
                        <div className="section-item">
                            <p>+91 124-4705478</p>
                            <p>nfo@taabsolutions.com</p>
                            <p>622, 6th Floor, Galleria Market, DLF Phase4, Gurgaon, Haryana - 122009</p>
                        </div>
                    </div>
                    <div className="footer-bottom-section">
                        <div className="bottom-footer-heading">
                            <p>Marketing</p>
                        </div>
                        <div className="section-item">
                            <p>+91 124-4705478</p>
                            <p>nfo@taabsolutions.com</p>
                            <p>622, 6th Floor, Galleria Market, DLF Phase4, Gurgaon, Haryana - 122009</p>
                        </div>
                    </div>
                    <div className="footer-bottom-section">
                        <div className="bottom-footer-heading">
                            <p>Quick Links</p>
                        </div>
                        <div className="section-item">
                            <p>+91 124-4705478</p>
                            <p>nfo@taabsolutions.com</p>
                            <p>622, 6th Floor, Galleria Market, DLF Phase4, Gurgaon, Haryana - 122009</p>
                        </div>
                    </div>

                    <div className="footer-bottom-section">
                        <div className="bottom-footer-heading">
                            <p>Follow Us</p>
                        </div>
                        <div className="section-item">
                            <p>+91 124-4705478</p>
                            <p>nfo@taabsolutions.com</p>
                            <p>622, 6th Floor, Galleria Market, DLF Phase4, Gurgaon, Haryana - 122009</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
