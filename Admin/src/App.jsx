// import React from 'react'
// import {Route, Routes} from 'react-router-dom'
// import AdminNavbar from './Components/Navbar/AdminNavbar'
// import SideBar from '../src/Components/Sidebar/SideBar'
// import Add from './Pages/Add/Add.jsx';
// import List from './Pages/List/List.jsx';
// import Orders from './Pages/Orders/Orders.jsx';
// const App = () => {
//   return (
//     <div>
//       <AdminNavbar/>
//       <SideBar/>
//       <Routes>
//         <Route path="/add" element={<Add/>}/>
//         <Route path="/list" element={<List/>}/>
//         <Route path="/orders" element={<Orders/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminNavbar from "./Components/Navbar/AdminNavbar";
import SideBar from "./Components/Sidebar/SideBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";
import Orders from "./Pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "http://localhost:4000";

  return (
    <div className="d-flex flex-column vh-100">
      <ToastContainer />
      <AdminNavbar />
      <div className=" d-flex flex-grow-1">
        <SideBar />
        <main className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
