import React from 'react'
import { Link } from 'react-router-dom'
import brand from '../../images/download15.png';
import navStyle from './Navbar.module.css'
export default function Navbar() {
    return (
        <nav className={`${navStyle.navbar} navbar navbar-expand-lg `}>
            <div className='container'>


                <Link className="navbar-brand" to={''}><img src={brand} /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">

                            <Link className={`${navStyle.navBarLink} nav-link`} to={''}>Home</Link>
                        </li>
                        <li className="nav-item">

                            <Link className={`${navStyle.navBarLink} nav-link`} to={'About'}>About party</Link>
                        </li>
                        <li className="nav-item">

                            <Link className={`${navStyle.navBarLink} nav-link`} to={'Artist'}>Artist</Link>
                        </li>
                        <li className="nav-item">

                            <Link className={`${navStyle.navBarLink} nav-link`} to={'Gallery'}>Gallery</Link>
                        </li>
                        <li className="nav-item">

                            <Link className={`${navStyle.navBarLink} nav-link`} to={'Testimonials'}>Testimonials</Link>
                        </li><li className="nav-item">

                            <Link className={`${navStyle.navBarLink} nav-link`} to={'Contact'}>Contact</Link>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    )
}
