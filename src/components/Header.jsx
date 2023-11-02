import React from "react";
const Header = () => {
    return<>
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar scroll</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" >


                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    <b>Coureses</b>
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr  className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>


                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    <b>Resources</b>
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr  className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>



                
                </ul>
                <form className="d-flex">
                <input className="form-control"  type="search" placeholder="Search" aria-label="Search" />


                <a href="https://cyclobold.com/login" className="ml-5 w-25" style={{color: "black", textDecoration: "none", textTransform: "none", marginRight: "1em", textAlign: "center", display: "flex", alignItems: "center"}}>
            Log in 
          </a>


          <li class="nav-item d-none d-lg-inline-block m-auto w-50">
          <a href="/contact-us" className="btn btn-sm btn-danger" style={{color: "#fff", textDecoration: "none", textTransform: "none", textAlign: "center"}}>
             Contact Us
          </a>
        </li>
                
                </form>
            </div>
            </nav>
    </div>
    
    </>
}

export default Header