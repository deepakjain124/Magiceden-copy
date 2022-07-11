import React from "react";
const Smallslider = ({ toggle, text, open ,info}) => {
  return (
    <>
      <header className="headername">
        <div className="heading">
          <h1>{text}</h1>
          {toggle && (
            <div className="toggle">
              <p>Next 7 days</p>
              <p>Coming Soon</p>
              <p>Live</p>
            </div>
          )}
          {info&&
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            color="#e42575"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "rgb(228, 37, 117)",marginLeft:"20px" }}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
}
        </div>
        {open && <button>See All</button>}
      </header>
    </>
  );
};

export default Smallslider;
