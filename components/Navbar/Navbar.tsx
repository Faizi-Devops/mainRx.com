import Image from 'next/image';
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image
                           
                            src="/mainlogo.png"
                            alt="Picture of the author"
                            width={120}
                            height={50}
                        />

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Hi Guest</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><i className="fa-brands fa-shopify" ></i>Shop</a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-user" style={{color:"blue"}}></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Checkout</a></li>
                                    <li><a className="dropdown-item" href="#">Track Order</a></li>
                                    <li><a className="dropdown-item" href="#"><Link href="/Signup">Register</Link></a></li>
                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                    <li><a className="dropdown-item" href="#"><Link href="/Login">Login</Link></a></li>
                                   
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Navbar;