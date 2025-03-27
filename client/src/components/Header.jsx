import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IoHomeOutline, IoPeopleOutline, IoMegaphoneOutline, IoCalendarOutline, IoLogInOutline, IoPersonAddOutline, IoLogOutOutline, IoGridOutline } from 'react-icons/io5';

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        isScrolled ? 'glass-effect' : ''
      }`}
    >
        <NavLink className="navbar-brand" to="/">
          CM
        </NavLink>
        <div className="d-flex align-items-center">
          <ul className="navbar-nav d-flex flex-row align-items-center gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <IoHomeOutline className="me-2" /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clubs">
                <IoPeopleOutline className="me-2" /> Clubs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/announcements">
                <IoMegaphoneOutline className="me-2" /> Announcements
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/events">
                <IoCalendarOutline className="me-2" /> Events
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center gap-3">
          {!isAuthenticated ? (
            <>
              <button
                className="btn btn-link "
                onClick={() => navigate('/register')}
              >
                <IoPersonAddOutline className="me-2" /> Register
              </button>
              <button
                className="btn btn-link "
                onClick={() => navigate('/login')}
              >
                <IoLogInOutline className="me-2" /> Login
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-link "
                onClick={() => navigate('/dashboard')}
              >
                <IoGridOutline className="me-2" /> Dashboard
              </button>
              <button
                className="btn btn-link "
                onClick={handleLogout}
              >
                <IoLogOutOutline className="me-2" /> Logout
              </button>
            </>
          )}
        </div>
    </nav>
  );
}

export default Header;
