import { Divider } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Searchheader = ({ open }) => {
  return (
    <>
    {!open?
      <div className="small_device">
        <div className="logo">
          <MenuIcon style={{color:"white",fontSize:"40px"}} />
          <img src="https://magiceden.io/static/media/short-logo.99020817cd591c893d502838a61c78e8.svg" />
        </div>
        <div className="search_icon">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            color="#f8f7f8"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "rgb(248, 247, 248)" }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>:
      <div className="second_header">
        <div className="searchbar">
          <img src="https://magiceden.io/static/media/search.48a682a639f3023f1afd96a01fadeeca.svg" />
          <input
            className="inputfield"
            type="text"
            placeholder="Search Collections and Creators"
          />
        </div>
        <div className="connect_wallet">
          <button>
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
              style={{ color: "rgb(228, 37, 117)", background: "transparent" }}
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button>Connect Wallet</button>
        </div>
      </div>
}
    </>
  );
};

export default Searchheader;
