import Navbar from "@/components/Navbar/Navbar";
import styles from '../styles/Login.module.css';
import Link from 'next/link'
import Footer from "@/components/Footer/Footer";

const Login = () => {
    return (
        <div>
            <div className={`${styles.widthing}`}>
                <Navbar />
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="card" style={{ width: "25rem" }}>

                    <div className="card-body">
                        <h3 className={`card-title text-center fontsize ${styles.fontsize}`} style={{ color: "blue" }}>Welcome Back</h3>
                        <p className="text-center">Login with your email & password</p>
                        <div className={`${styles.formcenter}`}>
                            <div className="mb-3">
                                <input type="email" className="form-control"  placeholder="Your Email" style={{height:"50px"}}/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control"  placeholder="Password" style={{height:"50px"}}/>
                            </div>
                            <div>
                            <button type="button" className="btn btn-primary w-100" style={{height:"50px"}}>Continue</button>
                            </div>
                            <p className="text-center pt-3">Don't have any account? <Link href="/">Sign Up</Link></p>
                            <p className="text-center">Forgot Your password? <Link href="/">Reset It</Link></p>
                        </div>

                    </div>
                </div>



            </div>
            <div className="pt-5">
            <Footer/>

            </div>
            
        </div>
    )
}
export default Login;