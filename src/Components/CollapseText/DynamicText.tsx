import React, { ReactNode, useState } from "react";

interface CollapseTextProps {
  children: string;
  maxChar: number;
}

const Text = ({ children, maxChar }: CollapseTextProps) => {
  const [isActive, setActive] = useState(true);
  if (children.length <= maxChar) {
    return <p>{children}</p>;
  }

  const onToggle = () => {
    setActive(!isActive);
  };

  let text = isActive ? `${children.substring(0, maxChar)}` : children;

  return (
    <>
      <p>
        {text}
        <span>
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={onToggle}
          >
            lorem
          </button>
        </span>
      </p>
    </>
  );
};

export default Text;
