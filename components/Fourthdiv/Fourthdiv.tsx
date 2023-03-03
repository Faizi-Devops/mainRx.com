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
            <div className='d-flex justify-content-center mt-5'>
                <div className="card shadow" style={{ width: "40rem" }}>

                    <div className="card-body">
                        <div className="mb-3">
                        <p style={{fontWeight:"bold"}}>Email</p>
                            <input type="email" className="form-control"  placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                        <p style={{fontWeight:"bold"}}>Write your Feedback</p>
                            <textarea className="form-control"  rows={3} placeholder="Please write here......."></textarea>
                        </div>
                        <div className='pt-4 mb-3'>
                        <button type="button" className="btn btn-primary">Primary</button>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}
export default Fourthdiv;