import Navbar from '@/components/Navbar/Navbar';
import styles from '../styles/Maining.module.css'
import Image from 'next/image';
const Maining = () => {
    return (
        <div>
            <div className={styles.backgroundimage}>
                <div style={{ width: "96%", margin: "auto" }}>
                    <Navbar />
                    <div className='text-center'>
                        <h1 style={{ fontWeight: "bold", paddingTop: "50px", fontSize: "53px" }} className={styles.head}>Your medication, delivered</h1>
                        <p style={{ color: "#77798c", fontWeight: "bold", fontSize: "18px" }} className={styles.paragraph}>Same-day delivery, scheduled shipping, and scheduled pick-ups available.</p>
                    </div>

                </div>

            </div>

            <div className={styles.backgroundcolor}>
                <div className='row'>
                    <div className='col-lg-3 col-sm-6 col-xs-6 col-md-6'>
                        <div className='pt-3' style={{ padding: "10px 10px 15px 20px", backgroundColor: "white" }}><div className="input-group">
                            <div className="form-outline">
                                <input type="search" id="form1" className="form-control w-100" placeholder='Search Product' />
                            </div>
                            <button type="button" className="btn btn-primary">
                                <i className="fas fa-search"></i>
                            </button>
                        </div></div>
                        <button type="button" className="btn btn-primary w-100" style={{ textAlign: "left", height: "50px" }}><i className="fa-solid fa-reply-all"></i>&nbsp;&nbsp;All </button>
                        <button type="button" className="btn btn-primary w-100" style={{ textAlign: "left", height: "50px", marginTop: "3px" }}><i className="fa-solid fa-reply-all"></i>&nbsp;&nbsp;Al Rehab Perfume </button>
                        <button type="button" className="btn btn-primary w-100" style={{ textAlign: "left", height: "50px", marginTop: "3px" }}><i className="fa-solid fa-reply-all"></i>&nbsp;&nbsp;Baby</button>
                        <button type="button" className="btn btn-primary w-100" style={{ textAlign: "left", height: "50px", marginTop: "3px" }}><i className="fa-solid fa-reply-all"></i>&nbsp;&nbsp;Health </button>
                        <button type="button" className="btn btn-primary w-100" style={{ textAlign: "left", height: "50px", marginTop: "3px" }}><i className="fa-solid fa-reply-all"></i>&nbsp;&nbsp;Healthy Foods</button>
                        <button type="button" className="btn btn-primary w-100" style={{ textAlign: "left", height: "50px", marginTop: "3px" }}><i className="fa-solid fa-reply-all"></i>&nbsp;&nbsp;Home</button>
                        <button type="button" className="btn btn-primary w-100" style={{ textAlign: "left", height: "50px", marginTop: "3px" }}><i className="fa-solid fa-reply-all"></i>&nbsp;&nbsp;Home Decor</button>
                        <button type="button" className="btn btn-primary w-100" style={{ textAlign: "left", height: "50px", marginTop: "3px" }}><i className="fa-solid fa-reply-all"></i>&nbsp;&nbsp;Lattafa</button>
                        <button type="button" className="btn btn-primary w-100" style={{ textAlign: "left", height: "50px", marginTop: "3px" }}><i className="fa-solid fa-reply-all"></i>&nbsp;&nbsp;Medications</button>

                    </div>
                    <div className='col-lg-9'>
                        <h1 style={{ color: "orange", paddingTop: "10px" }}>All Products</h1>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className="card" style={{ width: "18rem" }}>
                                <Image
                                    src="/basicimage.jpeg"
                                    alt="Picture of the author"
                                    style={{ maxWidth: "50%", maxHeight: "285px", paddingTop: "60px" }}
                                    width={100}
                                    height={1}

                                    layout="responsive"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-4'></div>

                    </div>

                </div>

            </div>


        </div>
    )
}
export default Maining;