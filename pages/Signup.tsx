import Navbar from "@/components/Navbar/Navbar";
import styles from '../styles/Signup.module.css';
import Link from 'next/link'
import Footer from "@/components/Footer/Footer";
const Signup = () => {
    return (
        <div>
            <div className={`${styles.widthing}`}>
                <Navbar />
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="card" style={{ width: "30rem" }}>

                    <div className="card-body">
                        <h4 className={`card-title text-center ${styles.paddingtop}`} style={{ color: "blue" }}>Sign Up</h4>
                        <p className="text-center">By signing up, you agree to Mainrx</p>
                        <div className={`${styles.paddingform}`}>


                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" style={{height:"50px"}} placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" style={{height:"50px"}} placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" style={{height:"50px"}} placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control" style={{height:"50px"}} placeholder="Phone Number" />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control" style={{height:"50px"}} placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" style={{height:"50px"}} placeholder="Confirm Password" />
                                </div>
                                <div className={`form-check ${styles.checboxwidth}`} >
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><p className="text-center" style={{color:"lightgray",fontSize:"14px"}}>You must be agree & signature to our Terms & Condtion</p>
                                </div>
                                <div>
                                <button type="button" className="btn btn-primary w-100" style={{height:"50px"}}>Continue</button>
                                </div>

                                <div className="text-center mt-5">
                                    <p>Already have an account? <Link href="/Login">Login</Link></p>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <div className="mt-5">
            <Footer />

            </div>
            

        </div>
    )
}
export default Signup;