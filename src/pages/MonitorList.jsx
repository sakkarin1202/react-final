import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MonitorList = () => {
  const [monitorData, setMonitorData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Monitor")
      .then((res) => res.json())
      .then((data) => {
        setMonitorData(data);
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
      });
  }, []);

  const handleRemove = (id) => {
    fetch(`http://localhost:8000/Monitor/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          alert('ลบข้อมูลสำเร็จ');
          const updatedData = monitorData.filter((item) => item.id !== id);
          setMonitorData(updatedData);
        } else {
          throw new Error('เกิดข้อผิดพลาด');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h1>Monitor List</h1>
        </div>
        <div className="card-body">
          <div>
            <div className="divbtn">
              <Link to="monitor/create" className="btn btn-success">ADD NEW (+)</Link>
            </div>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
                <th>Dimension</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {monitorData &&
                monitorData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.price}</td>
                    <td>{item.dimension}</td>
                    <td>
                      <img
                        src={item.image}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>
                      <Link to={`/monitor/edit/${item.id}`} className="btn btn-success">Edit</Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                    <td>
                      <Link to={`/monitor/detail/${item.id}`} className="btn btn-primary">Detail</Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MonitorList;



