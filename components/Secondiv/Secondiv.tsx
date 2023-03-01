import Image from 'next/image'
const Secondiv = () => {
    return (
        <div>


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


            </div>
            <div className='container fouthdiv'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <body>
                            <div className="wrapper">
                                <div className="single-card">
                                    <div className="front"></div>
                                    <div className="back">
                                        <div className="content">
                                            <h2>Mark Jones</h2>
                                            <h4>Web Developer</h4>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit, <br />hic totam illum deleniti veniam nemo alias, rem doloremque porro optio vel officia, tempore ducimus!</p>
                                            <p className="socials">
                                                
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </body>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Secondiv;