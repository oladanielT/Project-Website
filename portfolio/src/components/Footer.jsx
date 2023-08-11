import React from 'react';

function Footer(){

    return(
    <footer className="relative bottom-0 w-full p-4 text-gray-300 text-center bg-[#01060cee]">
            <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} danFabCode. All rights reserved.</p>
            </div>
    </footer>
    )
}

export default Footer;