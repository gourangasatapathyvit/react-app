import { Fragment } from "react";
function ListGroup() {
  const items = ["a", "b", "c"];
  return (
    <>
      <h2 className="text-center sm:pb-4">lorem</h2>

      <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
        {items.map((item) => (
          <li key={item} className="pb-3 sm:pb-4">
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
    </>
  );
}

export default ListGroup;
