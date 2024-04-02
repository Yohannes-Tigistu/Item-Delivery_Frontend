import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import { InCard } from "./InCard";
import "./a.css";

export const MainCard = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPopoverOpen(false);
  };

  return (
    <div
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:text-white dark:bg-gray-800 dark:border-gray-700"
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-wrap gap-2 items-center">
        <img
          src={logo}
          onMouseEnter={handleMouseEnter}
          className="w-[60px] h-[60px] bg-cover rounded-[100%]"
        />
        <p>ayele</p>
      </div>

      {isPopoverOpen && (
        <div
          id="popover-user-profile"
          role="tooltip"
          className="absolute z-10 visible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
        >
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <a href="#">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Jese Leos"
                />
              </a>
              <div>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Follow
                </button>
              </div>
            </div>
            <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
              <a href="#">Jese Leos</a>
            </p>
            <p className="mb-3 text-sm font-normal">
              <a href="#" className="hover:underline">
                @jeseleos
              </a>
            </p>
            <p className="mb-4 text-sm">
              Open-source contributor. Building{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                flowbite.com
              </a>
              .
            </p>
            <ul className="flex text-sm">
              <li className="me-2">
                <a href="#" className="hover:underline">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    799
                  </span>
                  <span>Following</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    3,758
                  </span>
                  <span>Followers</span>
                </a>
              </li>
            </ul>
          </div>
          <div data-popper-arrow></div>
        </div>
      )}
      <div className="mt-2">
        Departure to Estimated arrival time
        <span class="bg-gray-100  text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
          <svg
            class="w-2.5 h-2.5 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
          </svg>
          Mar 3, 2024 {"->"} Mar 5, 2024
        </span>
      </div>
      <div className="mt-2">
        Maximum Goods Capacity <b>3</b>
      </div>
      <div className="overflow-x-auto mt-4 flex space-x-4">
        <InCard />
        <InCard />
        <InCard />
        <InCard />
      </div>

      {/* Right button */}
      <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 absolute right-0 top-[50%] transform -translate-y-1/2">
        &gt;
      </button>
    </div>
  );
};
