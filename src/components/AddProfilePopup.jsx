import React, { useState } from "react";
import "./AddProfilePopup.css";

const AddProfilePopup = ({ onClose, onSubmit }) => {
  const [step, setStep] = useState("basic");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(profile);
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
                Name:
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              </label>
            </>
          )}
          {step === "social" && (
            <>
              <label>
                Instagram:
                <input
                  type="text"
                  name="instagram"
                  value={profile.instagram}
                  onChange={handleChange}
                />
              </label>
              <label>
                YouTube:
                <input
                  type="text"
                  name="youtube"
                  value={profile.youtube}
                  onChange={handleChange}
                />
              </label>
            </>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddProfilePopup;
