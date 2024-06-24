import React from "react";
import Logo from "./logo";
import NavLinks from "./nav-links";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="">
      <div className="con flex items-center justify-between h-[70px] ">
       <Logo/>
       <NavLinks/>
        </div>
    </header>
  );
};

export default Header;
