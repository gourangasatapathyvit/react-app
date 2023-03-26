import React from "react";

interface AllItemsProps {
  items: string[];
  clearItem: () => void;
}

const AllItems = ({ items, clearItem }: AllItemsProps) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={clearItem}
      >
        clear
      </button>
    </>
  );
};

export default AllItems;
