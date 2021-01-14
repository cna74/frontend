import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as  Icon from 'react-bootstrap-icons';
import "./index.css";

const Header = () => {
  return (
    <div className="container-fluid" dir="rtl">
      <div className='container'>
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
              <button className='search-part-btn'><Icon.Search /></button>
              <input id="search_text" className='search-input' type="search" name="s" placeholder="جستجو کنید ..." autocomplete="off"></input>
            </form>
            <a href="" className='cart-btn'>0 تومان
            <button className=''><Icon.Cart /></button>
            </a>
          </div>
        </div>
      </div>
      <ul>
        <li><a className='link' href="default.asp">خانه</a></li>
        <li><a className='link' href="news.asp">محصولات</a></li>
        <li><a className='link' href="contact.asp">اخبار</a></li>
        <li><a className='link' href="about.asp">درباره ما</a></li>
      </ul>
    </div>
  );
};

export default Header;
