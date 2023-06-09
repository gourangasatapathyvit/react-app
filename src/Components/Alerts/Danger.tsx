import { ReactNode } from "react";
import styles from "./Danger.module.css";

// CSS in JS
import styled from "styled-components";

const UlElement = styled.div`
  background-color: green;
`;

interface Props {
  //  ? represents that it's a optional element
  // if you want to send HTML like structure from parent
  children?: ReactNode;

  //   from parent you can pass from given options which defined here ie from (a/b/c) , if you pass any different it will throw error
  name?: "a" | "b" | "c";
}

const Alert = ({ children = "lorem default value" }: Props) => {
  return (
    <>
      <div
        className={`m-auto w-fit flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400 ${[
          styles.bgColor,
        ].join("")}`}
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>

        <div className="hover:bg-sky-700">
          <span className="font-medium"></span>

          {children}
        </div>
      </div>

      <UlElement
        className={`m-auto w-fit flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400`}
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>

        <div className="hover:bg-sky-700">
          <span className="font-medium"></span>

          {children}
        </div>
      </UlElement>
    </>
  );
};

export default Alert;
