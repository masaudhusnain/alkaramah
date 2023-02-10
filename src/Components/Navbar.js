import React  from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">alkaramah architects & interior designers</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            
                            <li className="nav-item"><Link className="nav-link" to="/Residential">Residential Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Commercial">Commercial Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Services">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Meettheteam">Meet The Team</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact Us</Link></li>
                            {/*<li className="nav-item"><Link className="nav-link" to="/CCalendar">Calendar</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Appointments">Booked Appointments</Link></li>*/}

                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar

