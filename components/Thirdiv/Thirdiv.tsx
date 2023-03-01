import Image from 'next/image'
const Thirdiv = () => {
    return (
        <div>
            <div className="thirdivback">
                <h1 className='text-center pt-5'>Featured <span style={{ color: "blue" }}>Products</span></h1>
                <div className="text-center">
                    <Image

                        src="/logo.jpg"
                        alt="Picture of the author"
                        width={100}
                        height={15}
                    />
                </div>
                <div className='row pt-5'>
                    <div className='col-lg-3'>
                        <div className='thirdivonediv'>
                            <div className='text-center'>
                            <Image pt-5

                                src="/thirdone.jpg"
                                alt="Picture of the author"
                                width={250}
                                height={270}
                            />
                            <h5 className='pt-5'>$33.95</h5>
                            <p>Bade'e Al Oud</p>
                            <p>quantity:15</p>

                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='thirdivonediv'>

                        </div>

                    </div>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-3'></div>

                </div>


            </div>

        </div>
    )
}
export default Thirdiv;