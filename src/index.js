import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./Header";

function Greeting() {
  return (
    <React.Fragment>
      <Header />
      <section className="container-fluid" dir="rtl">
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
      </section>
    </React.Fragment>
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
ReactDom.render(<Greeting />, document.getElementById("root"));
