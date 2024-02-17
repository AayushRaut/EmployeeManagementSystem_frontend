import React from "react";

const HeaderComponet = () => {
  return (
    <>
      <div>
        <header>
          <nav
            className="navbar bg-dark border-bottom border-body"
            data-bs-theme="dark"
          >
            <div className="container-fluid">
              <a className="navbar-brand " href="#">
                Employee Management System
              </a>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default HeaderComponet;
