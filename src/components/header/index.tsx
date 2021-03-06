import React from "react";
import Logo from "../../assets/logo";
import Button from "../button";
import Link from "../link";

import "./style.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row ">
          <div>
            <Logo />
          </div>
          <Link bold={"bold"} text={"About"} Color={"#212353"} />
          <Link bold={""} text={"Help"} Color={"#212353"} />
          <Link bold={""} text={"Features"} Color={"#212353"} />
          <Link bold={""} text={"Signup"} Color={"#212353"} />
        </div>

        <div className="Button">
          {" "}
          <Button
            children={"Request Demo"}
            backgroundColor={"#fff"}
            Color={"#000"}
            icon={true}
            shadow={true}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
