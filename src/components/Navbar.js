import React, { useState } from 'react'
import './Navbar.css'


function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        // <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
        //     <div className="logoImg">
        //         <img src={final} alt=''/>
               
        //     </div>
        //     <ul className="nav-menu">
        //         <Link to="/"><li>Home</li></Link>
        //         <Link to="/teacher"><li>Teachers</li></Link>
        //         <Link to="/student"><li>Students</li></Link>
        //         <Link to="/teacher/viewScore"><li>Scores</li></Link>
        //     </ul>
            
        //     <div className="nav-icons">
                
        //         <BiSearch className='icon' style={{ marginRight: '1rem' }} />
        //         <BsPerson className='icon' />
        //     </div>
        //     <div className="hamburger" onClick={handleNav}>
        //         {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

        //     </div>

        //     <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        //         <ul className="mobile-nav">
        //          <Link to="/"><li>Home</li></Link>
        //             <Link to="/teacher"><li>Teachers</li></Link>
        //             <Link to="/student"><li>Students</li></Link>
        //             <Link to="/viewScore"><li>Scores</li></Link>
        //         </ul>
        //         <div className="mobile-menu-bottom">
        //             <div className="menu-icons">
        //                 <button>Search</button>
        //                 <button>Account</button>
        //             </div>
        //             <div className="social-icons">
        //                 <FaFacebook className='icon' />
        //                 <FaInstagram className='icon' />
        //                 <FaTwitter className='icon' />
        //                 <FaPinterest className='icon' />
        //                 <FaYoutube className='icon' />
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div>

        </div>
    )
}

export default Navbar