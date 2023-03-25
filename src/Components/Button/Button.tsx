import { IoLogoGameControllerB } from "react-icons/Io";
import { IoGameControllerOutline } from "react-icons/io5";
import { useState } from "react";

const Button = () => {
  const [selectedIndex, setSelectedIndex] = useState(true);
  const toggle = () => {
    setSelectedIndex(!selectedIndex);
    console.log(selectedIndex);
  };

  if (selectedIndex) {
    return (
      <IoLogoGameControllerB
        color={"green"}
        size={40}
        className="m-auto"
        onClick={toggle}
      />
    );
  }
  return (
    <IoGameControllerOutline
      color={"red"}
      size={40}
      className="m-auto"
      onClick={toggle}
    />
  );
};

export default Button;
