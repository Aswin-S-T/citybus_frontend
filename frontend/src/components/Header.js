import React from "react";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-light">
        <span class="navbar-brand mb-0 h1">
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "#ff317e",
              fontWeight: "bold",
            }}
          >
            <i className="fa fa-bus m-2" style={{ color: "#444" }}></i>
            City Bus
          </a>
        </span>
      </nav>
    </div>
  );
}

export default Header;
