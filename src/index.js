import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import { Route } from "react-router-dom";
import {
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Courses from "./Components/Courses";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";
import Student from "./Components/Student/Student";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="courses" element={<Courses />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signout" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="student" element={<Student />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
