import React from "react";
import Card from "./Card";
import GoToTop from "./GoToTop";

// import "./style.css";

const Main = () => {
  return (
    <>
      <div className="header">
        <div className="row1">
          {/* <h1>
            "A room without books is like
            <br /> a body without a soul."
          </h1> */}
        </div>

        <button className="Hamburger-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 18 18"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>

        {/* Card Icon */}
        <button className="shopping-cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 20 20"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
        {/* Profile Icon */}
        <button className="profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 20 20"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </button>
        <div className="row2">
          <div className="Company-name">
            <h1>Earthly</h1>
          </div>
          <h2>Sustainable products at affordable prices</h2>

          <div className="search">
            <img
              src="./images/Lovepik_com-401197568-world-smile-day.png"
              alt="Website_logo"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <Card
          thumbnail="./images/IMG_20230208_112147.jpg"
          amount="2.39"
          title="Plant Based Reusable Cups"
        />
        <Card
          thumbnail="./images/IMG_20230208_112225.jpg"
          amount="10.99"
          title="Plant Based Reusable Cups"
        />
        <Card
          thumbnail="./images/IMG_20230208_112242.jpg"
          amount="1.99"
          title="Plant Based Reusable Cups"
        />
        <Card
          thumbnail="./images/IMG_20230208_112303.jpg"
          amount="2.99"
          title="Plant Based Reusable Cups"
        />
        <Card
          thumbnail="./images/IMG_20230208_112318.jpg"
          amount="3.59"
          title="Plant Based Reusable Cups"
        />
        <Card
          thumbnail="./images/IMG_20230208_112334.jpg"
          amount="2.99"
          title="Plant Based Reusable Cups"
        />
      </div>
      <button class="Contact-Us">Contact-Us</button>
      <GoToTop />
    </>
  );
};

export default Main;
