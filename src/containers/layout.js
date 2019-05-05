import React from "react";
import "./layout.scss";
import Logo from "../components/logo";
import SideNavigation from "./side_navigation";
import MainArea from "./main_area";

function Layout() {
  return (
    <div className="App">
      <Logo />
      <SideNavigation />
      <MainArea />
    </div>
  );
}

export default Layout;
