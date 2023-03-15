import React from "react";
import "./styles.scss";
import logo from "../../assets/icons/logo.png";
export const Header = () => {
  return (
    <header>
      <div className="header__block">
        <img src={logo} alt="logo" className="header__logo"></img>
        <nav className="header__nav">
          <a href="https://www.google.com/" className="header__link">
            Features
          </a>
          <a href="https://www.google.com/" className="header__link">
            Partners
          </a>
          <a href="https://www.google.com/" className="header__link">
            Stories
          </a>
        </nav>
        <button className="header__btn">Download for free</button>
      </div>
    </header>
  );
};

// export const Header = () => {
//     return (
//       <header>
//         <div className="header__block">
//         <img src={logo} alt="logo" className="header__logo"></img>
//         </div>
//     </header>
//   );
// };
// export default Header