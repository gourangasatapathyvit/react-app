import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface loginForm {
  email: String;
  pwd: String;
  isChecked: boolean;
}

interface Props {
  // pass func via props
  jsonItem: (item: object) => void;
}

const Form = ({ jsonItem }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<loginForm>();
  // console.log(errors);
  const [totalList, setTotalList] = useState<loginForm[]>([]);

  const deleteItem = (item: object) => {
    const updatedList = totalList.filter((value) => value !== item);
    setTotalList(updatedList);
  };

  return (
    <>
      <div className="w-1/2 m-auto">
        <form
          onSubmit={handleSubmit((data: loginForm) => {
            setTotalList([...totalList, data]);
          })}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              {...register("email", { required: true })}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
            {errors.email?.type == "required" && (
              <p className="text-red-600">it's a required field</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              {...register("pwd")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                {...register("isChecked")}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                {"email"}
              </th>
              <th scope="col" className="px-6 py-3">
                {"Password"}
              </th>
              <th scope="col" className="px-6 py-3">
                {"Action"}
              </th>
            </tr>
          </thead>
          <tbody>
            {totalList.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.email}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.pwd}
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    onClick={() => deleteItem(item)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
