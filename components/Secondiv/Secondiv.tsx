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
                        <div className='col-lg-4'>
                            <div className="card" style={{width: "18rem"}}>
                                
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
                    <div className='col-lg-3'>


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
                    <div className='col-lg-3'>
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
                    <div className='col-lg-3'>
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
                    <div className='col-lg-3'>
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