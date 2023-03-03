import Image from 'next/image';

const Thirdiv = () => {
    return (
        <div>
            <div className="thirdybackgroundcolor">

                <h2 className="text-center pt-5 ">Featured <span style={{ color: "blue" }}> Products</span></h2>
                <div className='text-center'>
                    <Image

                        src="/logo.jpg"
                        alt="Picture of the author"
                        width={100}
                        height={15}
                    />

                </div>
                <div className='thirdycardingwidth'>
                    <div className='container-fluid mt-5'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div className="card" style={{ width: "18rem" }}>
                                    <Image className=''

                                        src="/thirdone.jpg"
                                        alt="Picture of the author"
                                        style={{ maxWidth: "100%" }}
                                        width={100}
                                        height={100}
                                        layout="responsive"
                                    />
                                    <div className="card-body" style={{backgroundColor:"lightgray"}}>
                                        
                                        <p className='text-center' style={{fontWeight:"bold"}}>$33.95</p>
                                        <p className='text-center'>Bade'e Al Qud</p>
                                        <p className='text-center'>quantity:15</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                            <div className="card" style={{ width: "18rem" }}>
                                    <Image className=''

                                        src="/third2.jpg"
                                        alt="Picture of the author"
                                        style={{ maxWidth: "100%" }}
                                        width={100}
                                        height={100}
                                        layout="responsive"
                                    />
                                    <div className="card-body" style={{backgroundColor:"lightgray"}}>
                                        
                                        <p className='text-center' style={{fontWeight:"bold"}}>$24.99</p>
                                        <p className='text-center'>Ameer Al Oudh Intense Oud</p>
                                        <p className='text-center'>quantity:12</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className='text-center'>

                                
                                    <Image

                                        src="/third3.jpg"
                                        alt="Picture of the author"
                                        style={{ maxWidth: "50%",maxHeight:"285px" }}
                                        width={100}
                                        height={1}
                                        layout="responsive"
                                    />
                                    </div>
                                    <div className="card-body" style={{backgroundColor:"lightgray"}}>
                                        
                                        <p className='text-center' style={{fontWeight:"bold"}}>$32.29</p>
                                        <p className='text-center'>Asad</p>
                                        <p className='text-center'>quantity:15</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'></div>
                            <br /><br />
                            <br /><br /><br /><br /><br />

                        </div>

                    </div>

                </div>



            </div>
            

        </div>
    )
}
export default Thirdiv;