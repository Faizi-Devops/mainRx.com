import Navbar from "../Navbar/Navbar";

const Firstdiv = () => {
    return (
        <div>
            <div className="firstdivbackgroundpicture">
                <div style={{ width: "94%", margin: "auto" }}><Navbar /></div>
                <h1 className="text-center firstdivheas">Your Medication, delivered</h1>
                <p className="text-center firstdivparagraph">Same-day delivery, scheduled shipping, and scheduled pick-ups available.</p>
                <div>
                    <div className="input-group mx-auto" style={{ maxWidth: "40%" }}>
                        <div className="form-outline w-80">
                            <input type="search" id="form1" className="form-control search-input" style={{ height: "45px" }} />
                        </div>
                        <button type="button" className="btn btn-primary">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    {/* <div className="input-group mx-auto" style={{ maxWidth: "40%" }}>
                        <div className="form-outline w-100">
                            <input type="search" id="form1" className="form-control search-input" style={{ height: "45px" }} />
                        </div>
                        <button type="button" className="btn btn-primary">
                            <i className="fas fa-search"></i>
                        </button>
                    </div> */}

                </div>

            </div>
            {/* input box*/}


        </div>
    )
}
export default Firstdiv;