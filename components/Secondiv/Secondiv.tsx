import Image from 'next/image'
const Secondiv = () => {
    return (
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
    )
}
export default Secondiv;