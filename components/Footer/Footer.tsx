import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () =>{
    return(
        <div className="container-fluid footerbackgroundcolor">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 firstdivmargin">
                        <h3>MainRx</h3>
                        <p className="all paddtop">Home</p>
                        <p className="all">Shop</p>
                        <p className="all">Need Help</p>
                        <p className="all">Profile</p>
                        <p className="all">Blog</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 seconddivmargin">
                        <h3 >More Pages</h3>
                        <p className="all paddtop">Orders</p>
                        <p className="all">Your Prescriptions</p>
                        <p className="all">Prescription Invoices</p>
                        <p className="all">Shop Invoices</p>
                        <p className="all">Notifications</p>
                        <p className="all">Track Order</p>
                        
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 thirddivmargin">
                        <h3>Contact Us</h3>
                        <p className="paddtop"><i className="fa-solid fa-phone color"></i> &nbsp;&nbsp;(973) 914 0427</p>
                        <p><i className="fa-solid fa-envelope color"></i> &nbsp;&nbsp;(973) 914 0427</p>
                        <p><i className="fa-solid fa-location-dot color"></i> &nbsp;&nbsp;594 Main Avenue Passaic New Jersey</p>
                        
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 thirddivmargin">
                        <h3>Newsletter</h3>
                        <p className="all paddtop">Signup for alters on saving and specials of the month</p>
                        <button type="button" className="btn btn-primary">Subscribe</button>
                        <p ><i className="fa-brands fa-facebook color"></i> <i className="fa-brands fa-instagram color"></i> <i className="fa-brands fa-pinterest color"></i> <i className="fa-brands fa-whatsapp color"></i></p>
                    </div>

                </div>

            </div>
            <br /><br />


        </div>
    )
}
export default Footer;