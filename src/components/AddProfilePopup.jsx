import React, { useState } from "react";
import "../Dashboard.css";

const AddProfilePopup = ({ onClose, onSubmit }) => {
  const [step, setStep] = useState("basic");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleNext = () => {
    setStep("social");
  };

  const handleBack = () => {
    setStep("basic");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!profile.name) newErrors.name = "This item is required";
    if (!profile.email) newErrors.email = "This item is required";
    if (!profile.phone) newErrors.phone = "This item is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStep("basic");
    } else {
      onSubmit(profile);
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h3>Add New Profile</h3>
          <button onClick={onClose} className="close-button">X</button>
        </div>
        <div className="separator"></div>
        <div className="tabs">
          <button
            className={step === "basic" ? "active" : ""}
            onClick={() => setStep("basic")}
          >
            Basic
          </button>
          <button
            className={step === "social" ? "active" : ""}
            onClick={() => setStep("social")}
          >
            Social
          </button>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          {step === "basic" && (
            <>
              <label>
                Enter Name*
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={errors.name || "Eg. John Doe"}
                  value={profile.name}
                  onChange={handleChange}
                  style={{ borderColor: errors.name ? 'red' : '' }}
                />
              </label>
              <label>
                Enter Email*
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={errors.email || "Eg. john@xyz.com"}
                  value={profile.email}
                  onChange={handleChange}
                  style={{ borderColor: errors.email ? 'red' : '' }}
                />
              </label>
              <label>
                Enter Phone*
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder={errors.phone || "Eg. 9876543210"}
                  value={profile.phone}
                  onChange={handleChange}
                  style={{ borderColor: errors.phone ? 'red' : '' }}
                />
              </label>
              <button type="button" className="next" onClick={handleNext}>Next</button>
            </>
          )}
          {step === "social" && (
            <>
              <label>
                Instagram<small> (Optional)</small>
                <input
                  type="text"
                  name="instagram"
                  placeholder="Eg. username"
                  value={profile.instagram}
                  onChange={handleChange}
                />
              </label>
              <label>
               YouTube<small> (Optional)</small>
                <input
                  type="text"
                  name="youtube"
                  placeholder="Eg. johndoe"
                  value={profile.youtube}
                  onChange={handleChange}
                />
              </label>
              <div className="buttons">
                <button type="button" className="button back" onClick={handleBack}>Back</button>
                <button type="submit" className="button submit">Submit</button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProfilePopup;
