import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SocialShare = () => {
    return (
        <>
            <li><Link to="https://www.instagram.com/techspark_innovations?igsh=NzRwampyenZyZ3Nv&utm_source=qr" target='_blank' ><i className="fab fa-instagram"></i></Link></li>
            {/* <li><Link to="http://facebook.com" target='_blank' ><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="https://www.linkedin.com" target='_blank' ><i className="fab fa-linkedin-in"></i></Link></li> */}
        </>
    );
};

export default SocialShare;