import React from "react";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "",
    enroll: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      alert("Invalid email format");
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Invalid phone number");
    }

    try {
      const res = await axios.post(`/register`, formData);
      console.log(res.data);
      if (res.data.success) {
        toast.success("Registered successful");
      } else {
        toast.error("Invalid Credentials");
        return;
      }
    } catch (error) {
      console.error("Error during register:", error);
      toast.error("An error occured during registration");
    }
  };

  return (
    <div className="main-register">
      <div className="register-header">Register Now</div>
      <div className="register-div">
        <form onSubmit={handleSubmit}>
          <div id="registerform">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Your Name"
              className="register-input"
              required
            />
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Your Email"
              className="register-input"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="register-input"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              name="batch"
              placeholder="Batch"
              className="register-input"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              name="enroll"
              placeholder="Enrollment Number"
              className="register-input"
              required
            />
          </div>

          <div className="register-btns">
            <button className="register-btn" type="submit">
              Button 1
            </button>
            <button className="register-btn">Button 2</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
