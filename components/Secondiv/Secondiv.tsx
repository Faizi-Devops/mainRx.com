import Image from 'next/image'
import Firstdiv from '../Firstdiv/Firstdiv';
import Footer from '../Footer/Footer';
import Fourthdiv from '../Fourthdiv/Fourthdiv';
import Navbar from '../Navbar/Navbar';
import Thirdiv from '../Thirdiv/Thirdiv';
const Secondiv = () => {
    return (
        <div>
            <div>
                <Firstdiv />

            </div>



            <div className="completediv">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="backgroundone"></div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="backgroundsecond"></div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="backgroundthree"></div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="backgroundfour"></div>
                    </div>


                </div>
                <div>

                    <h1 className="text-center secondivheading">How <span style={{ color: "blue" }}>MainRx Works</span></h1>

                    <div className="text-center">
                        <Image

                            src="/logo.jpg"
                            alt="Picture of the author"
                            width={100}
                            height={15}
                        />



                    </div>


                </div>



            </div>
            <div className='thirdiv'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{paddingTop:"30px"}}>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className='text-center'>
                                <Image 

                                    src="/basicimage.jpeg"
                                    alt="Picture of the author"
                                    style={{ maxWidth: "50%", maxHeight: "285px",paddingTop:"60px" }}
                                    width={100}
                                    height={1}
                                    
                                    layout="responsive"
                                />
                                </div>

                                <div className="card-body">
                                    <p className="card-title text-center" style={{fontWeight:"bold"}}>The user will upload the prescription.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{paddingTop:"30px"}}>

                        <div className="card" style={{ width: "18rem" }}>
                                <div className='text-center'>
                                <Image 

                                    src="/basicimage.jpeg"
                                    alt="Picture of the author"
                                    style={{ maxWidth: "50%", maxHeight: "285px",paddingTop:"60px" }}
                                    width={100}
                                    height={1}
                                    
                                    layout="responsive"
                                />
                                </div>

                                <div className="card-body">
                                    <p className="card-title text-center" style={{fontWeight:"bold"}}>Our pharmacist will verify, creating order for you.</p>
                                    
                                </div>
                            </div>
                            


                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12' >
                        <div className="card" style={{ width: "18rem" }}>
                                <div className='text-center'>
                                <Image 

                                    src="/basicimage.jpeg"
                                    alt="Picture of the author"
                                    style={{ maxWidth: "50%", maxHeight: "285px",paddingTop:"60px" }}
                                    width={100}
                                    height={1}
                                    
                                    layout="responsive"
                                />
                                </div>

                                <div className="card-body">
                                    <p className="card-title text-center" style={{fontWeight:"bold"}}>Delivery status will update on the app</p>
                                    
                                </div>
                            </div>



                        </div>

                    </div>

                </div>



            </div>
            <div className='container fouthdiv coloring'>
                <h1 className='text-center fourthdivH1'>MainRX <span style={{ color: "blue" }}>Benefits</span></h1>
                <div className="text-center">
                    <Image

                        src="/logo.jpg"
                        alt="Picture of the author"
                        width={100}
                        height={15}
                    />



                </div>


                <div className='row mt-5 mb-5'>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>


                        <div className="wrapper">
                            <div className="single-card">
                                <div className="front"></div>
                                <div className="back">
                                    <div className="content">
                                        <h2>Mark Jones</h2>
                                        <h4>Web Developer</h4>


                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className="wrapper">
                            <div className="single-card">
                                <div className="frontingone"></div>
                                <div className="back">
                                    <div className="content">
                                        <h2>Mark Jones</h2>
                                        <h4>Web Developer</h4>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className="wrapper">
                            <div className="single-card">
                                <div className="frontingtwo"></div>
                                <div className="back">
                                    <div className="content">
                                        <h2>Mark Jones</h2>
                                        <h4>Web Developer</h4>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className="wrapper">
                            <div className="single-card">
                                <div className="frontingthree"></div>
                                <div className="back">
                                    <div className="content">
                                        <h2>Mark Jones</h2>
                                        <h4>Web Developer</h4>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
            <Thirdiv />
            <div>
                <div>
                    <Fourthdiv />
                </div>
                <div className='pt-5'>
                    <Footer />
                </div>


            </div>
        </div>
    )
}
export default Secondiv;