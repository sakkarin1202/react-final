import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const MonitorRemove = () => {
  const { monitorid } = useParams();
  const navigate = useNavigate(); // จำเป็นต้อง import `useNavigate` เพื่อใช้การเปลี่ยนหน้า

  const handleRemove = () => {
    fetch(`http://localhost:8000/Monitor/${monitorid}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("ลบข้อมูลสำเร็จ");
          navigate("/");
        } else {
          throw new Error("เกิดข้อผิดพลาด");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h2>ลบ Monitor</h2>
      <p>คุณแน่ใจหรือว่าต้องการลบ Monitor นี้?</p>
      <button className="btn btn-danger" onClick={handleRemove}>
        ลบ
      </button>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        ยกเลิก
      </button>
    </div>
  );
};

export default MonitorRemove;
