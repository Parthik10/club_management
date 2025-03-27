import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMoneyBill, FaCalendarCheck } from "react-icons/fa";

function EventRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    paytmStatus: "",
    eventId: ""
  });
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="container mt-4">
      <div className="card register-card mx-auto p-4" style={{ maxWidth: "400px" }}>
        <h4 className="text-center mb-3">Register for Event</h4>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Name", name: "name", icon: <FaUser /> },
            { label: "Email", name: "email", icon: <FaEnvelope /> },
            { label: "Contact Number", name: "contactNumber", icon: <FaPhone /> },
            { label: "Paytm Status", name: "paytmStatus", icon: <FaMoneyBill /> },
            { label: "Event ID", name: "eventId", icon: <FaCalendarCheck /> }
          ].map(({ label, name, icon }) => (
            <div className="mb-3" key={name}>
              <label className="form-label">{label}</label>
              <div className="input-group">
                <span
                  className={`input-group-text animated-icon ${
                    focusedField === name ? "rotate-icon" : ""
                  }`}
                >
                  {icon}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(name)}
                  onBlur={() => setFocusedField("")}
                  required
                />
              </div>
            </div>
          ))}

          <button type="submit" className="btn btn-dark w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default EventRegister;
