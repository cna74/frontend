import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
} from "@material-ui/core/styles";
import CustomTheme from "./assets/CustomTheme";

import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import * as Icon from "react-bootstrap-icons";

// import Header from "./Header";

const jss = create({ plugins: [...jssPreset().plugins, rtl] });

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
      <div className="container-fluid">
      <div className="container">
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
            <form action="" className="search-part" autoComplete="off">
              <button className="search-part-btn">
                <Icon.Search />
              </button>
              <input
                id="search_text"
                className="search-input"
                type="search"
                name="s"
                placeholder="جستجو کنید ..."
                autocomplete="off"
              ></input>
            </form>
            <a href="" className="cart-btn">
              0 تومان
              <button className="">
                <Icon.Cart />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='container-fluid bottom-nav'>
        <ul>
          <li>
            <a href="default.asp">
              خانه
            </a>
          </li>
          <li>
            <a href="news.asp">
              محصولات
            </a>
          </li>
          <li>
            <a href="contact.asp">
              اخبار
            </a>
          </li>
          <li>
            <a href="about.asp">
              درباره ما
            </a>
          </li>
        </ul>
      </div>
    </div>
        {/* <section className="container-fluid" dir="rtl">
        <div className="row">
          <div className="col-3">
            <h5>Filters</h5>
            <hr />
            <h6 className="text-info">Brands</h6>
            <h6 className="text-info">Type</h6>
            <h6 className="text-info">Width</h6>
            <h6 className="text-info">color</h6>
          </div>
          <div className="col-9 row">
            <Card img={"Black.png"} title={"Hello"} />
            <Card img={"Blue.png"} title={"Hello"} />
            <Card img={"Red.png"} title={"Hello"} />
            <Card img={"White.png"} title={"Esun PLA 1.75 White"} />
          </div>
        </div>
      </section> */}
      </StylesProvider>
    </ThemeProvider>
  );
}

const Card = ({ img, title }) => {
  return (
    <article className="card col-sm-3 m-2">
      <img className="card-img-top" src={img} alt="" />
      <div className="card-body">
        <p>{title}</p>
      </div>
    </article>
  );
};
ReactDom.render(<App />, document.getElementById("root"));
