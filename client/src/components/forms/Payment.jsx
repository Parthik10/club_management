import React, { useState } from "react";
import { FaCalendarAlt, FaEnvelope, FaDollarSign, FaCheckCircle, FaReceipt } from "react-icons/fa";

function Payment() {
  const [formData, setFormData] = useState({
    eventId: "",
    userEmail: "",
    amount: "",
    status: "",
    transactionId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Payment</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
        {[
          { label: "Event ID", name: "eventId", type: "text", icon: <FaCalendarAlt /> },
          { label: "User Email", name: "userEmail", type: "email", icon: <FaEnvelope /> },
          { label: "Amount", name: "amount", type: "number", icon: <FaDollarSign /> },
          { label: "Status", name: "status", type: "text", icon: <FaCheckCircle /> },
          { label: "Transaction ID", name: "transactionId", type: "text", icon: <FaReceipt /> },
        ].map(({ label, name, type, icon }) => (
          <div className="mb-3" key={name}>
            <label className="form-label">{label}</label>
            <div className="input-group">
              <span className="input-group-text">{icon}</span>
              <input
                type={type}
                className="form-control"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        ))}
        <button type="submit" className="btn btn-dark w-100">
          Create Payment
        </button>
      </form>
    </div>
  );
}

export default Payment;
