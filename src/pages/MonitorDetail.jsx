import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MonitorDetail = () => {
  const { id } = useParams();
  const [monitorData, setMonitorData] = useState({});
  const [loading, setLoading] = useState(true); // เพิ่ม state สำหรับ loading
  const [error, setError] = useState(null); // เพิ่ม state สำหรับ error

  useEffect(() => {
    fetch(`http://localhost:8000/Monitor/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("ไม่สามารถดึงข้อมูลได้");
        }
        return res.json();
      })
      .then((data) => {
        setMonitorData(data);
        setLoading(false); // เมื่อดึงข้อมูลเสร็จแล้วกำหนด loading เป็น false
      })
      .catch((err) => {
        setError(err); // หากเกิดข้อผิดพลาดกำหนด error
        setLoading(false); // เมื่อเกิดข้อผิดพลาดกำหนด loading เป็น false
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>Monitor Detail</h2>
            </div>
            {monitorData && (
              <div className="card-body">
                <img src={monitorData.image} alt="monitor" />
                <div className="card-text">
                  <h3>
                    {monitorData.brand} - {monitorData.model} (ID: {monitorData.id})
                  </h3>
                  <h4>Details:</h4>
                  <h5>Price: ${monitorData.price}</h5>
                  <h5>Dimension: {monitorData.dimension}</h5>
                </div>
                <Link className="btn btn-danger" to="/">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorDetail;


