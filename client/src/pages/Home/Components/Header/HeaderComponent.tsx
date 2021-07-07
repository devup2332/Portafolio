import React from "react";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="subcontainer_header">
        <div className="h1">OASIS</div>
        <div className="btn_menu_container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
          >
            <path
              
              fillRule="evenodd"
              d="M101.9 57.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 97.653 53h3.15c.58 0 1.097.458 1.097 1.009v3zM100.803 51h-3.15c-1.74 0-3.103 1.352-3.103 3.009v3c0 1.657 1.363 2.991 3.103 2.991h3.15c1.74 0 3.197-1.334 3.197-2.991v-3c0-1.657-1.457-3.009-3.197-3.009zM90.35 57.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 86.103 53h3.15c.58 0 1.097.458 1.097 1.009v3zM89.253 51h-3.15C84.363 51 83 52.352 83 54.009v3C83 58.666 84.363 60 86.103 60h3.15c1.74 0 3.197-1.334 3.197-2.991v-3c0-1.657-1.457-3.009-3.197-3.009zm12.647-4.991c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 97.653 42h3.15c.58 0 1.097.458 1.097 1.009v3zM100.803 40h-3.15c-1.74 0-3.103 1.352-3.103 3.009v3c0 1.657 1.363 2.991 3.103 2.991h3.15c1.74 0 3.197-1.334 3.197-2.991v-3c0-1.657-1.457-3.009-3.197-3.009zM90.35 46.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 86.103 42h3.15c.58 0 1.097.458 1.097 1.009v3zM89.253 40h-3.15C84.363 40 83 41.352 83 43.009v3C83 47.666 84.363 49 86.103 49h3.15c1.74 0 3.197-1.334 3.197-2.991v-3c0-1.657-1.457-3.009-3.197-3.009z"
              transform="translate(-83 -40)"
            />
          </svg>
        </div>
      </div>

      <nav className="nav">
        <ul className="nav_menu_options">
          <li className="option">Home</li>
          <li className="option">Projects</li>
          <li className="option">About</li>
          <li className="option">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
