import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <header class="header">
            <div class="container">
                <h1 className='custom-heading'>西电计科院数据可视化项目展示</h1>
            </div>
            <div class="mid">
                <ul class="navbar">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/ThreeDBar'>ThreeDBar</Link></li>
                    <li><Link to='/SpiralCurve'>SpiralCurve</Link></li>
                    <li><Link to='/NormalSurface'>NormalSurface</Link></li>
                    <li><Link to='/Sphere'>Sphere</Link></li>
                    <li><Link to='/MapGraph'>MapGraph</Link></li>
                    <li><Link to='/FlowMap'>FlowMap</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;