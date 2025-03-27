import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../utils/auth";
import { FaUser, FaEnvelope, FaLock, FaBuilding, FaInfoCircle, FaUserTie, FaImage } from "react-icons/fa";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    clubName: "",
    description: "",
    clubHead: "",
    logo: "",
  });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      setOpen(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sign Up and Register Club</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
            {[
              { label: "Name", name: "name", type: "text", icon: <FaUser /> },
              { label: "Email", name: "email", type: "email", icon: <FaEnvelope /> },
              { label: "Password", name: "password", type: "password", icon: <FaLock /> },
              { label: "Club Name", name: "clubName", type: "text", icon: <FaBuilding /> },
              { label: "Description", name: "description", type: "text", icon: <FaInfoCircle /> },
              { label: "Club Head", name: "clubHead", type: "text", icon: <FaUserTie /> },
              { label: "Logo URL", name: "logo", type: "text", icon: <FaImage /> },
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
              Register Club
            </button>
          </form>
          {open && (
            <div className="alert alert-success mt-3" role="alert">
              Registration successful!
            </div>
          )}
          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-dark text-white">
          <h3>Welcome to Club Management</h3>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
