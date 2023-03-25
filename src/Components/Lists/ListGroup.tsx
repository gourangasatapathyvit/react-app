import { Fragment, MouseEvent, useState } from "react";

// CSS in JS
import styled from "styled-components";

interface ListElementProps {
  active: boolean;
}

const LiListElement = styled.li<ListElementProps>`
  background-color: ${(props) => (props.active ? "blue" : "green")};
`;

// pass data vua props
interface Props {
  items: string[];
  header: string;

  // pass func via props
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, header, onSelectItem }: Props) {
  const eventHandler = (event: MouseEvent) => console.log(event);

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h2 className="text-center sm:pb-4">{header}</h2>

      <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              "b-3 sm:pb-4 " +
              (selectedIndex === index ? "bg-red-300" : "bg-orange-300")
            }
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {item}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="text-center sm:pb-4">{"styled components testing"}</h2>

      <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
        {items.map((item, index) => (
          <LiListElement
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {item}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </LiListElement>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
