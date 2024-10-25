import React, { useState,useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegMessage, FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from '../../images/images.jpeg';
import { useEffect } from "react";
export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to handle dropdown visibility
  const dropdownRef = useRef(null); // Ref to track the dropdown element
  const [upIcon,setupIcon]=useState(false)
  const [downIcon,setdownIcon]=useState(true)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setupIcon(!upIcon)
    setdownIcon(!downIcon)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setupIcon(!upIcon)
        setdownIcon(!downIcon) // Close dropdown if clicked outside
      }
    };

    // Add event listener to the whole document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="fixed top-0 right-0 left-[0px] z-[1] pl-[290px] pr-[40px] bg-white py-[10px] flex justify-between items-center ">
      <div className="flex items-center">
        <NavLink to="/">
          <FiMenu className="text-[22px] mx-2" style={{ color: "#334155" }} />
        </NavLink>
        <NavLink to="/">
          <CiSearch className="text-[22px] mx-2" style={{ color: "#334155" }} />
        </NavLink>
      </div>
      <div className="flex items-center relative">
        <NavLink to="/">
          <MdOutlineShoppingCart className="text-[22px] mx-2" style={{ color: "#334155" }} />
        </NavLink>
        <NavLink to="/">
          <FaRegMessage className="text-[22px] mx-2" style={{ color: "#334155" }} />
        </NavLink>
        <NavLink to="/">
          <IoMdNotificationsOutline className="text-[22px] mx-2" style={{ color: "#334155" }} />
        </NavLink>

        {/* User avatar and name */}
        <img alt="user" src={avatar} className="h-[40px] w-[40px] border-solid rounded-[100%] mx-2" />
        <div className="mx-2">
          <span className="text-[15px] text-gray-400">Hi,</span> <span className="text-gray-700">User Name</span>
        </div>

        {/* Dropdown toggle */}
        <button onClick={toggleDropdown} className="relative">
          {downIcon &&  <FaChevronDown className="cursor-pointer" />}
          {upIcon && <FaChevronUp/>}
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div ref={dropdownRef} className="absolute right-0 top-[40px] mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
            <NavLink
              to="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </NavLink>
            <NavLink
              to="/settings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </NavLink>
            <NavLink
              to="/logout"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
