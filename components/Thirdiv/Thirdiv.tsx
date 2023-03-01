import Image from 'next/image'
const Thirdiv = () => {
    return (
        <div>
            <div className="thirdivback">
                <h1 className='text-center pt-5'>Featured <span style={{color:"blue"}}>Products</span></h1>
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
    )
}
export default Thirdiv;