// import React from "react";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <h1 className="text-center">All Right Reserved &copy; Techinfoyt</h1>
//       <p className="text-center mt-3">
//         <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
//         <Link to="/policy">Privacy Policy</Link>
//       </p>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (

        <>
            <div className="Contact-Us-Section-card d-flex flex-column justify-content-center">
                <h1 className="Contact-Us-Section-heading text-center">Let us Join Together</h1>
                <div className="text-center">
                    <Link to="/Contact"><button className="Contact-Us-Section-button">CONTACT US</button></Link>
                </div>
            </div>
            <div className="Ecommerce-Website-Footer-Section pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 ">
                            <div className="text-center text-md-left">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png" className="Footer-Section-logo mb-2" alt="..." />
                                <div className="d-flex flex-row justify-content-center justify-content-md-start">
            
                                    <div className="Footer-Section-icon-container mr-2">
                                        <i class="bi bi-twitter-x"></i>
                                    </div>
                                    <div className="Footer-Section-icon-container mr-2">
                                    <i class="bi bi-instagram"></i>
                                    </div>
                                    <div className="Footer-Section-icon-container mr-2">
                                    <i class="bi bi-linkedin"></i>
                                    </div>
                                </div>
                                <p className="Footer-Section-add-description">BKT Lucknow UP.</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3">
                            <h1 className="Footer-Section-add-sub-title">Get to know us</h1>
                            <ul>
                                <li>About us</li>
                                <li>Career</li>
                                <li>Press Releasse</li>
                                <li>Gift a smile</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3">
                            <h1 className="Footer-Section-add-sub-title">Contact with Us</h1>
                            <ul>
                                <li>Facebok</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3">
                            <h1 className="Footer-Section-add-sub-title">Let Us Help You</h1>
                            <ul>
                                <li>100% Purchase Protection</li>
                                <li>Your Account</li>
                                <li>Return Center</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="hr-line" />
                    <div className="text-center">
                        <p className="Footer-Section-add-description">© 2023 by Kalendra Singh. All right reverved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
