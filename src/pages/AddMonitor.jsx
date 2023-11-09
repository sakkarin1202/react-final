import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const AddMonitor = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    id: '',
    brand: '',
    model: '',
    price: '',
    dimension: '',
    image: 'https://source.unsplash.com/random/200x200/?portrait',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/Monitor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), 
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(() => {
        alert("Saved successfully");
        navigate("/"); // 
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <div className="container">
            <div className="card">
              <div className="card-title">
                <h2>Add Monitor</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>ID</label>
                        <input
                          type="text"
                          name="id"
                          value={formData.id}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Brand</label>
                        <input
                          type="text"
                          name="brand"
                          value={formData.brand}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Model</label>
                        <input
                          type="text"
                          name="model"
                          value={formData.model}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Price</label>
                        <input
                          type="text"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Dimension</label>
                        <input
                          type="text"
                          name="dimension"
                          value={formData.dimension}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Image</label>
                        <input
                          type="text"
                          name="image"
                          value={formData.image}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMonitor;
