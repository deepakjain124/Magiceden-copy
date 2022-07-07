import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="topheader">
        <p className="first">
          Volume 24h:<span className="second">111,588 SOL</span>
        </p>
        <p className="first">
          Volume total:
          <span className="second">17,070,175 SOL</span>
        </p>
        <p className="first">
          SOL/USD <span className="second">$42.19</span>
        </p>
        <p className="first">
          Solana Network:<span className="yellow">1,509 TPS</span>
        </p>
      </div>
    </>
  );
};

export default TopHeader;
