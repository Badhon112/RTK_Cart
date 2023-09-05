import React from "react";
import { Link } from "react-router-dom";
export default function Headers() {
  let count = 0;
  return (
    <div>
      <nav className=" border-gray-200 dark:bg-gray-900 bg-black text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ecommerce
            </span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  to="/cart"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Cart
                  <span className=" rounded-full w-5 h-5 bottom-3 mb-4 relative">
                    {count}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
