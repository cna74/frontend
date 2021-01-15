import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
} from "@material-ui/core/styles";
import CustomTheme from "./CustomTheme";
import Header from "./components/header_footer/Header";
import ReactDom from "react-dom";
import "./assets/styles.css"

const jss = create({ plugins: [...jssPreset().plugins, rtl] });

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
        <Header>

        </Header>
      </StylesProvider>
    </ThemeProvider>
  );
}

// const Card = ({ img, title }) => {
//   return (
//     <article className="card col-sm-3 m-2">
//       <img className="card-img-top" src={img} alt="" />
//       <div className="card-body">
//         <p>{title}</p>
//       </div>
//     </article>
//   );
// };
ReactDom.render(<App />, document.getElementById("root"));
