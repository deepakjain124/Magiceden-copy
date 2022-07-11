import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="section_1">
          <img
            alt="magiced logo"
            src="https://magiceden.io/static/media/logo.ca418d755e6ce4e95fd276056b9285f2.svg"
          />
          <div className="logo_desc">
            <p>Magic Eden the homepage of NFT's</p>
            <p>©2022 Eucpd Labs, Inc. All Rights Reserved.</p>
          </div>
        </div>
        <div className="section_2">
          <div>
            <h4>Marketplace</h4>
            <div>
              <p>Popular collections</p>
              <p>Launchpad</p>
              <p>Auctions</p>
            </div>
          </div>
          <div>
            <h4>Eden Games</h4>
            <div>
              <p>All Games</p>
              <p>Launch With Us</p>
            </div>
          </div>
          <div>
            <h4>Resources</h4>
            <div>
              <p>About Us</p>
              <p>API</p>
              <p>Careers</p>
              <p>System Status</p>
              <p>Terms Of Service</p>
              <p>Support</p>
              <p>Shop</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
