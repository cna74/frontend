import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Search} from 'react-bootstrap-icons';import "./index.css";

const Header = () => {
  return (
    <div className="container-fluid nav-back" dir="rtl">
      <div className="row">
        <div className="col-4 col-sm-3 col-md-3 col-lg-3 text-right">
          <a className="logo-head" href="#">
            <img
              className="img-fluid logo-head"
              src="logo.png"
              alt=""
              width="25%"
              height="25%"
            />
          </a>
        </div>
        <div className="col-12 col-sm-9 col-md-9 col-lg-9 d-flex justify-content-end align-items-center btn-head-holder">
            <form action="" className='search-part' autoComplete="off">
            <button><Search /></button>
              <input id="search_text" type="text" name="s" placeholder="جستجو کنید ..." autocomplete="off"></input>
            </form>
            
        </div>
      </div>
    </div>
  );
};

export default Header;
