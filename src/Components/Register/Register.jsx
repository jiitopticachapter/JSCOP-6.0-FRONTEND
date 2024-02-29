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
    branch: "",
    enroll: "",
  });

  const [status, setStatus] = useState({});

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
      // const res = await axios.post(`/register`, formData);
      // console.log(res.data);
      // if (res.data.success) {
      //   toast.success("Registered successful");
      // } else {
      //   toast.error("Invalid Credentials");
      //   return;
      // }
      let response = await fetch("http://localhost:4000/api/register-new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });
      let result = await response.json();
       setFormData(formData);
        if (result.code == 200) {
          console.log("done!!!")
            setStatus({ succes: true, message: 'User Saved successfully!!'});
        }
        else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
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
              name="branch"
              placeholder="Branch"
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
              Submit Form
             
            </button>
            <button className="register-btn">
            {
                        status.message && 
                        <p className={status.success === false ? "danger": "success"}>{status.message}</p>
                    }
            </button>
          </div>
                     
        </form>
      </div>
    </div>
  );
}

export default Register;
