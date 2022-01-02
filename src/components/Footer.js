import React from 'react';
import "../App.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-tagline">
                <h4>Maya Murphy</h4>
                <p>A creative who delivers value through leadership, development, and design.</p>
                <p className="copyright">&copy;2022 Maya Murphy. All rights reserved.</p>
            </div>
           <div className="footer-explore">
               <h6>Follow</h6>
               <a href="https://www.instagram.com/mayalivvy_/"><p>Instagram</p></a>
               <a href="https://www.linkedin.com/in/maya-and-tech/"><p>LinkedIn</p></a>
               <a href="https://www.youtube.com/channel/UCHgzNgvOYjTWcMbBqdbwTJQ"><p>YouTube</p></a>
           </div>
           <div className="footer-explore">
               <h6 id="business-inquires">Business Inquiries</h6>
               <p>techwithmaya@gmail.com</p>
           </div>
        </div>
    )
}
