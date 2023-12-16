import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <h1>TECHNICAL SKILL DEVELOPMENT PROJECT</h1>
        <h2>Name:Srushti Mehare</h2>
        <h2>Roll No.:26</h2>

      </div>
      <div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
          }}>
          <div>
            <Link to="/books">
            <button data-label="Register" class="rainbow-hover">
              <span class="sp">GET BOOK DETAILS</span>
            </button>
            </Link>
          </div>
          <div>
            <Link to="/author">
            <button data-label="Register" class="rainbow-hover">
              <span class="sp">GET AUTHOR DETAILS</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
