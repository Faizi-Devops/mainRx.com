import Image from 'next/image'
const Fourthdiv = () => {
    return (
        <div>
            <div>
                <h2 className="text-center mt-5">We Appreciate <span style={{ color: "blue" }}>Your Reviews!</span></h2>
            </div>
            <div className='text-center'>
                <Image
                    
                    src="/logo.jpg"
                    alt="Picture of the author"
                    width={100}
                    height={15}
                />

            </div>
            <div className='text-center mt-3'>
                <p>Your review will help us to improve quality products, and customer services.</p>
            </div>

        </div>
    )
}
export default Fourthdiv;