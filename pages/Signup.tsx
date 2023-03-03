import Navbar from "@/components/Navbar/Navbar";
import styles from '../styles/Signup.module.css';

const Signup = () => {
    return (
        <div>
            <div className={`${styles.widthing}`}>
                <Navbar />
            </div>
            <div className="d-flex justify-content-center">
                <div className="card" style={{ width: "30rem" }}>

                    <div className="card-body">
                        <h4 className={`card-title text-center ${styles.paddingtop}`} style={{ color: "blue" }}>Sign Up</h4>
                        <p className="text-center">By signing up, you agree to Mainrx</p>
                        <div className={`${styles.paddingform}`}>

                        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Signup;