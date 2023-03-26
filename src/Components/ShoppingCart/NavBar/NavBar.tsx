import React from "react";

interface navBarProps {
  itemCount: number;
}

const NavBar = ({ itemCount }: navBarProps) => {
  return <div>item: {itemCount}</div>;
};

export default NavBar;
