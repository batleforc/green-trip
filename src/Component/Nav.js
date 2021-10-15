import React from "react";
import { AiFillHome, AiFillGift } from "react-icons/ai";
import { MdOutlineLeaderboard } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import NavItem from "./nav/NavItem";
const Nav = () => {
  return (
    <div className="fixed inset-x-0  bottom-0 flex bg-white justify-center w-screen">
      <NavItem Icon={AiFillHome} to={"/"} />
      <NavItem Icon={MdOutlineLeaderboard} to={"/leaderboard"} />
      <NavItem Icon={AiFillGift} to={"/reward"} />
      <NavItem Icon={RiUserSettingsFill} to={"/param"} />
    </div>
  );
};

export default Nav;
