// import React, { useRef } from "react";
// import { Container } from "reactstrap";
// import "./Navbar.css";

// const navLinks = [
//   {
//     display: "Home",
//     url: "home",
//   },
//   {
//     display: "About",
//     url: "about",
//   },

//   {
//     display: "Courses",
//     url: "Courses",
//   },
//   {
//     display: "SignIn",
//     url: "signin",
//   },
//   {
//     display: "SignUp",
//     url: "signup",
//   },
//   // {
//   //   display: "+91 9876543210",
//   //   url: "#",
//   // },
// ];

// const Navbar = () => {
//   const menuRef = useRef();

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");

//   return (
//     <header className="header">
//       <Container>
//         <div className="navigation d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <h2 className=" d-flex align-items-center gap-1">
//               <i class="ri-pantone-line"></i> EnlightenHub.
//             </h2>
//           </div>

//           <div className="nav d-flex align-items-center gap-5">
//             <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
//               <ul className="nav__list">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="nav__item">
//                     <a href={item.url}>{item.display}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="nav__right">
//               <p className="mb-0 d-flex align-items-center gap-2">
//                 <i class="ri-phone-line"></i> +91 9876543210
//               </p>
//             </div>
//           </div>

//           <div className="mobile__menu">
//             <span>
//               <i class="ri-menu-line" onClick={menuToggle}></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Navbar;

// New navbar not refreshing the page

// import React, { useRef } from "react";
// import { Container } from "reactstrap";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const navLinks = [
//   {
//     display: "Home",
//     url: "/home",
//   },
//   {
//     display: "About",
//     url: "/about",
//   },
//   {
//     display: "Courses",
//     url: "/courses",
//   },
//   {
//     display: "SignIn",
//     url: "/signin",
//   },
//   {
//     display: "SignOut",
//     url: "/signout",
//   },
//   {
//     display: "SignUp",
//     url: "/signup",
//   },
// ];

// const Navbar = () => {
//   const menuRef = useRef();

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");

//   return (
//     <header className="header bg-yellow-950">
//       <Container>
//         <div className="navigation d-flex align-items-center justify-content-between ">
//           <div className="logo">
//             <h2 className=" d-flex align-items-center gap-1">
//               <i className="ri-pantone-line"></i> EnlightenHub.
//             </h2>
//           </div>

//           <div className="nav d-flex align-items-center gap-5">
//             <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
//               <ul className="nav__list">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="nav__item">
//                     <Link to={item.url}>{item.display}</Link>
//                     {/* <a href={item.url}>{item.display}</a> */}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="nav__right">
//               <p className="mb-0 d-flex align-items-center gap-2">
//                 <i className="ri-phone-line"></i> +91 9876543210
//               </p>
//             </div>
//           </div>

//           <div className="mobile__menu">
//             <span>
//               <i className="ri-menu-line" onClick={menuToggle}></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Navbar;

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import image from "./../Items/QuickLib logo1.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const location = useLocation();
  const token = sessionStorage.getItem("token");
  const navigation = [
    { name: "Home", display: "Home", url: "/home" },
    { name: "About", display: "About", url: "/about" },
    {
      name: "Courses",
      display: "Courses",
      url: "/courses",
    },
    {
      name: "SignIn",
      display: "SignIn",
      url: "/signin",
    },
    {
      name: "SignOut",
      display: "SignOut",
      url: "/signout",
    },
    {
      name: "SignUp",
      display: "SignUp",
      url: "/signup",
    },
  ];

  // if (token) {
  //   navigation = [
  //     {
  //       display: "Dashboard",
  //       url: "/Profile",
  //       current: location.pathname === "/Profile",
  //     },
  //     {
  //       display: "Search Books",
  //       url: "Search-book",
  //       current: location.pathname === "/Search-book",
  //     },
  //   ];

  const navigate = useNavigate();
  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };
  return (
    <Disclosure as="nav" className="bg-yellow-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-white">
                  {/* <img className="h-8 w-auto" src={image} alt="Quicklib" /> */}
                  <i className="ri-pantone-line "></i> EnlightenHub.
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.display}
                        to={item.url}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.display}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                {token && (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="\Settings"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? "bg-gray-100 " : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={logoutHandler}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.display}
                  to={item.url}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-900 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
