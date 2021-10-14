import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ Icon, to }) => {
  return (
    <Link className="w-1/4 flex justify-center my-2" to={to}>
      <Icon size="2em " />
    </Link>
  );
};

export default NavItem;
