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
          <div className="search-part">
            <form action="" autoComplete="off">
            <button><Search className='search-part'/></button>
              <input
                id="search_text"
                type="text"
                name="s"
                class="search-input"
                placeholder="جستجو کنید ..."
                autocomplete="off"
              ></input>
            </form>
          </div>
          {/* <span className="inner-btn">۰ تومان</span> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
