import React from "react";
// import "./_header.scss"
const Header = () => (
  <>
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-2">
            <div className="header__logo">
              <font>eStore</font>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">

            <div className="input-group mt-3">
              <div className="input-group-prepend">
                <select className="form-control btn btn-success dropdown-toggle">
                  <option>ALL</option>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option>
                </select>

              </div>

              <input type="text" className="form-control" />

              <div className="input-group-append">
                <button className="btn btn-success">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>

          </div>
          <div className="col-lg-3">
            <div className="header__right">
              <div className="auth">
                <a href="#">Sign-in/</a>
                <a href="#">Sign-up</a>
              </div>
              <ul className="widget">
                <li><i className="fa fa-heart"></i> </li>
                <li><i className="fa fa-shopping-cart"></i> </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </header>
    
  </>
)

export default Header;