import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navBar">
                    <ul>
                    <h1>NAUTILUS</h1>
                        <li><b>ISSUES</b></li>
                        <li><b>TOPICS</b></li>
                        <li><b>BLOG</b></li>
                        <li><b>NEWSLETTER</b></li>
                        <li><FaFacebookF /></li>
                        <li><FaTwitter /></li>
                        <li><b>LOGIN</b></li>
                        <button>SUBSCRIBE</button>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default NavBar;