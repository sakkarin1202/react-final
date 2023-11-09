import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MonitorList from "./pages/MonitorList";
import AddMonitor from "./pages/AddMonitor";
import MonitorDetail from './pages/MonitorDetail';
import MonitorEdit from './pages/MonitorEdit';


function App() {
  return (
    <div className="container">
      <h1>React.js CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MonitorList />} />
          <Route path="monitor/create" element={<AddMonitor />} />
          <Route path="/monitor/:id" element={<MonitorDetail />} />
          <Route path="/monitor/edit/:monitorid" element={<MonitorEdit />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


