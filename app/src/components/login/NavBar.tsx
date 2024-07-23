/*Login Page Nav Bar*/ 
import React from 'react'
import logo from '../../assets/logo.png'

const Nav: React.FC = ()=>{
    return (
        <div>
            <nav className="bg-white p-4  drop-shadow-xl">
                <div className="contain-size mx-auto flex items-center justify-between p-4">
                    <a href="/" className="flex items-center">
                        <img src={logo} alt="TY Logo" className="h-12 w-auto" />
                    </a>
                </div>
            </nav>
        </div>

    )
}

export default Nav