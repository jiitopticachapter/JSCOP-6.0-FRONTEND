import React, { useRef, useState } from "react";
import "./RegisterForm.scss";

// import { motion } from "framer-motion";
// import SectionHeader from "../../Components/SectionHeader/SectionHeader";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enroll: "",
    batch: "",
    branch: "",
    enrollmentType: "",
  });
  const formRef = useRef(null);
  const [image, setImage] = useState([]);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    enroll: "",
    batch: "",
    branch: "",
    screenshot: "",
    enrollmentType: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkEmailExists = async (email) => {
    try {
      //write code for checking email existance
    } catch (error) {
      console.error("Error checking email existence: ", error);
      // Log the specific error for better debugging
      //   toast.error("Error checking email existence. See console for details", {
      //     position: toast.POSITION.TOP_CENTER,
      //     className: "custom-toast-error",
      //   });
      return false; // Assume email doesn't exist in case of an error
    }
  };

  const handleImage = (f) => {
    const file = f.target.files[0];
    setFileToBase(file);
    if (file.size > 500000) {
      alert("File size is too large, please upload a file less than 500kb");
    }
  };
  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.enroll.trim()) {
      errors.enroll = "Enrollment number is required";
    }
    if (!formData.enrollmentType.trim()) {
      errors.enrollmentType = "Enrollment Type is required";
    }
    if (!formData.branch.trim()) {
      errors.branch = "Branch is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form data submitted:", formData);
      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        // toast.error(`User Already Registered`, {
        //   position: toast.POSITION.TOP_CENTER,
        //   className: "custom-toast-error",
        // });
        return; // Stop execution if email exists
      }

      const formDataObj = {
        data: formData,
      };
      const Img = {
        image: image,
      };
      const Final = {
        ...formDataObj,
        ...Img,
      };
      console.log(Final);

      try {
        let response = await fetch("http://localhost:4000/api/register-new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(Final),
        });
        let result = await response.json();
        setFormData(formData);
        if (result.code == 200) {
          console.log("done!!!");
          setStatus({ succes: true, message: "User Saved successfully!!" });
        } else {
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      } catch (error) {
        console.error("Error during register:", error);
        toast.error("An error occured during registration");
      }

      //reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        enroll: "",
        batch: "",
        branch: "",
      });
    }
  };
  return (
    <>
      {/* <ToastContainer /> */}
      <div className="registerr-header">Register Now</div>
      <div className="RegistrationPage">
        <div className="RegistrationPageSection">
          <div className="regisGuidelineSection">
            <div className="GuidelineContainer">
              <div className="RegistrationPageHeader">
                <div className="RegistrationPageHeaderSectionHeader_text">
                  <div className="RegistrationPageHeaderSectionHeader_text_text-content">
                    Rules of JSCOP 6.0
                  </div>
                  <div className="RegistrationPageHeaderUnderline"></div>
                </div>
              </div>
              <div className="regisGuidelines">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla atque dolorum ab delectus praesentium soluta labore
                  aliquid ipsam! Dolor, veniam.
                </p>
                <br />

                <span className="regis-sub-heading">Registration</span>

                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur, aliquam.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iste, libero quisquam! Eveniet consequatur vitae quisquam?
                  </li>

                  {/* </ol> */}
                  <br />

                  <span className="regis-sub-heading">Entry</span>

                  {/* <ol style={{ listStyleType: "decimal" }}> */}
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere, maxime!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    blanditiis repellendus nostrum voluptatum molestiae,
                    temporibus neque incidunt?
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quod voluptas ullam iure praesentium natus?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos nobis esse aperiam?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto modi odio aliquid consectetur distinctio qui rem?
                    Magnam, natus.
                  </li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>

                  <br />

                  {/* <div className="regis-sub-heading">General</div>

                  <li>
                    Kindly observe general discipline and decorum. Be mindful of
                    the classes ongoing during the Literature Fest.
                  </li>
                  <li>
                    Parking at the venue is highly limited. We strongly
                    encourage attendees to use public transport.
                  </li>
                  <li>
                    Entry to the Statue Lawn, Stadium and the SRCC Main building
                    is restricted for outsiders.
                  </li>
                  <li>
                    We are aiming for a 100% ecologically sustainable event.
                    Kindly do not litter in the venue.
                  </li>
                  <li>
                    Please carry your own water bottles to help us further
                    reduce the ecological footprint of the event.
                  </li>
                  <li>
                    This is an event for appreciation of literature and literary
                    thought. Therefore, political activity of any kind is highly
                    prohibited during the course of the festival.
                  </li>
                  <li>
                    For smooth and meaningful functioning of the programme,
                    kindly follow the instructions as given by the Organizing
                    team.
                  </li>
                  <li>
                    The discretion of the Organizing team and SRCC over any
                    issue pertaining to the festival shall be final.
                  </li> */}
                </ol>
              </div>
            </div>
          </div>
          <div className="regis">
            <div className="RegistrationPageHeader">
              <div className="RegistrationPageHeaderSectionHeader_text">
                <div className="RegistrationPageHeaderSectionHeader_text_text-content">
                  Registration Form
                </div>
                <div className="RegistrationPageHeaderUnderline"></div>
              </div>
            </div>

            <form
              ref={formRef}
              //   initial={{ opacity: 0 }}
              //   whileInView={{ opacity: 1 }}
              //   transition={{ duration: 1.5, delay: 0.3 }}
              //   viewport={{ once: true }}
              className="registration-form"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label htmlFor="name">
                  Name <span className="registernecessary"> * </span>:
                </label>
                <input
                  className="reginput"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.name}</p>
              </div>

              <div>
                <label htmlFor="email">
                  Email <span className="registernecessary"> * </span>:
                </label>
                <input
                  className="reginput"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.email}</p>
              </div>

              <div>
                <label htmlFor="phone">
                  Phone <span className="registernecessary"> * </span>:
                </label>
                <input
                  className="reginput"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.phone}</p>
              </div>

              {/* <div>
                <label htmlFor="age">Age:</label>
                <input
                  className="reginput"
                  type="text"
                  id="age"
                  name="age"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.age}</p>
              </div>
              <div>
                <label htmlFor="gender">Gender:</label>
                <select
                  className="reginput"
                  id="gender"
                  name="gender"
                  placeholder="Select Gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                  <option value="Perfer Not To Say">Prefer Not to Say</option>
                </select>
                <p className="error">{formErrors.gender}</p>
              </div> */}

              <div>
                <label htmlFor="enroll">
                  Enrollment Number
                  <span className="registernecessary"> * </span>:
                </label>
                <input
                  className="reginput"
                  type="text"
                  id="enroll"
                  name="enroll"
                  placeholder="Enter your Enrollment number"
                  value={formData.enroll}
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.enroll}</p>
              </div>

              <label htmlFor="phone">
                Enrollment Type <span className="registernecessary"> * </span>:
              </label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  {" "}
                  <label
                    style={{ display: "flex", alignItems: "center" }}
                    htmlFor="dayscholar"
                  >
                    Day Scholar &nbsp;
                    <input
                      type="radio"
                      id="dayscholar"
                      name="enrollmentType"
                      value="dayScholar"
                      // checked={formData.enrollmentType === "day_scholar"}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                &nbsp; &nbsp;
                <div>
                  {" "}
                  <label
                    style={{ display: "flex", alignItems: "center" }}
                    htmlFor="hosteller"
                  >
                    Hosteller &nbsp;
                    <input
                      type="radio"
                      id="hosteller"
                      name="enrollmentType"
                      value="hosteller"
                      // checked={formData.enrollmentType === "day_scholar"}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
              <p className="error">{formErrors.enrollmentType}</p>

              <div>
                <label htmlFor="batch">
                  Batch <span className="registernecessary"> * </span> :
                </label>
                <input
                  className="reginput"
                  type="text"
                  id="batch"
                  name="batch"
                  placeholder="Enter your batch"
                  value={formData.batch}
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.batch}</p>
              </div>

              <div>
                <label htmlFor="branch">
                  Branch <span className="registernecessary"> * </span>:
                </label>
                <input
                  className="reginput"
                  type="text"
                  id="branch"
                  name="branch"
                  placeholder="Enter your branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.branch}</p>
              </div>

              <div>
                <label htmlFor="screenshot">
                  Upload Screenshot of Payment
                  <span className="registernecessary">* </span>:
                </label>
                <input
                  className="reginput2"
                  type="file"
                  id="screenshot"
                  name="screenshot"
                  //   placeholder="Enter your college/profession"
                  value={formData.screenshot}
                  onChange={handleImage}
                />
                <p className="error">{formErrors.screenshot}</p>
              </div>

              {/* <div className="form-group">
                <label>Days you will be attending the fest:</label>
                <div className="checkbox-group">
                  <label className="dayylab">
                    <div className="dareg">
                      <li className="reglist">Day 1</li>
                    </div>
                    <input
                      className="dayregi"
                      type="checkbox"
                      name="checkboxes"
                      value="option1"
                      checked={formData.checkboxes.option1}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="checkbox-group">
                  <label className="dayylab">
                    <div className="dareg">
                      <li className="reglist">Day 2</li>
                    </div>
                    <input
                      className="dayregi"
                      type="checkbox"
                      name="checkboxes"
                      value="option2"
                      checked={formData.checkboxes.option2}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="checkbox-group">
                  <label className="dayylab">
                    <div className="dareg">
                      <li className="reglist">Day 3</li>
                    </div>
                    <input
                      className="dayregi"
                      type="checkbox"
                      name="checkboxes"
                      value="option3"
                      checked={formData.checkboxes.option3}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <p className="error">{formErrors.checkboxes}</p>
              </div> */}

              <div className="heyreg">
                <button className="regbtn" onClick={handleFormSubmit}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
